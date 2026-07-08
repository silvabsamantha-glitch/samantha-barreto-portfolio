# Portfólio — Samantha Barreto

Site estático (HTML/CSS/JS puro) hospedado na Netlify, com um painel de edição
sem código em `/admin` (Decap CMS + Netlify Identity).

## Como o conteúdo funciona

- Os textos editáveis (títulos, descrições, tags, métricas dos cases, bio,
  links de contato etc.) vivem em arquivos JSON dentro de `content/`.
- O HTML (`index.html`, `sobre.html`, `cases/case-NN.html`) continua sendo a
  fonte de verdade da estrutura da página. Cada elemento editável tem um
  atributo `data-field="..."` que indica de onde vem o conteúdo — esse
  atributo não tem nenhum efeito visual ou funcional, é só uma marcação usada
  no build.
- No deploy, a Netlify roda `python3 scripts/build_content.py`, que lê os
  JSON de `content/` e escreve os valores nos atributos `data-pt`/`data-en`
  (e afins) do HTML, exatamente nos pontos marcados. **`assets/shared.js`
  nunca é tocado** — o sistema bilíngue continua funcionando exatamente como
  sempre funcionou, só que agora os textos vêm de JSON em vez de estarem
  hard-coded no HTML.
- Rodar o build localmente (sem publicar nada): `python3 scripts/build_content.py --check`
  mostra quais arquivos mudariam, sem escrever nada. Sem esse `--check`, o
  script escreve os arquivos no lugar — só faz isso em uma cópia de trabalho
  descartável, nunca direto no checkout que você está editando manualmente.

### Limitação importante: número fixo de campos em listas

Tags, métricas e pills (interesses) usam **posições fixas** no HTML — cada
posição tem seu próprio `data-field`. Isso significa que dá para *editar* uma
tag ou métrica existente pelo painel, mas não dá para *adicionar* uma tag além
das que já existem no HTML sem um desenvolvedor abrir o arquivo e criar o
espaço correspondente. Essa limitação é intencional: evita que o build precise
recriar pedaços de HTML, o que aumentaria o risco de quebrar alguma coisa.

## Como editar pelo painel

1. Acesse `samanthabarreto.com.br/admin`.
2. Faça login com o e-mail convidado no Netlify Identity.
3. Escolha a coleção (Cases, Home, Sobre), edite o campo desejado nos dois
   idiomas (PT e EN) e publique.
4. A Netlify recebe o commit, roda o build automaticamente e o site atualiza
   em alguns minutos.

## Configuração da hospedagem (feito uma vez, por fora deste repositório)

Isto **não é feito por código** — são passos manuais no painel da Netlify e
no registro.br:

1. **Conectar o repositório à Netlify**: New site from Git → selecionar este
   repositório → build command `python3 scripts/build_content.py` → publish
   directory `.` (já configurado em `netlify.toml`, a Netlify detecta
   automaticamente).
2. **Ativar Identity**: no site na Netlify, aba *Identity* → Enable Identity.
3. **Ativar Git Gateway**: ainda em *Identity* → Services → Git Gateway →
   Enable. É isso que permite ao Decap CMS commitar no repositório em nome do
   usuário logado, sem cada pessoa precisar de acesso direto ao GitHub.
4. **Convidar o usuário**: Identity → Invite users → enviar convite para o
   e-mail que vai logar em `/admin`.
5. **Apontar o domínio**: no registro.br, mudar o DNS de `samanthabarreto.com.br`
   para apontar para a Netlify (a Netlify mostra o valor exato em Domain
   settings → Add custom domain). O arquivo `CNAME` neste repositório já está
   configurado para GitHub Pages — ao migrar para Netlify, o domínio passa a
   ser gerenciado nas configurações de domínio da Netlify, e o arquivo `CNAME`
   pode ser removido (ele é uma convenção específica do GitHub Pages).
6. Confirmar que o site abre normalmente em `samanthabarreto.com.br` **antes**
   de testar o painel `/admin`.

## Replicar para um novo portfólio de cliente

Cada cliente tem seu próprio repositório, site na Netlify e login. Passo a
passo para clonar esta estrutura:

1. **Fork/clone** deste repositório para um novo repositório no GitHub do
   cliente (ou da conta que vai hospedar o site dele).
2. **Trocar o conteúdo**: editar os arquivos em `content/` (`index.json`,
   `sobre.json`, `content/cases/*.json`) com as informações do novo cliente.
   Se o número de cases, tags ou métricas for diferente, ajustar também os
   `data-field` correspondentes no HTML (ver limitação acima).
3. **Ajustar `admin/config.yml`**: conferir `backend.branch` (o branch que a
   Netlify vai publicar) e os rótulos dos campos, se fizer sentido customizar.
4. **Criar o site na Netlify** apontando para o novo repositório (mesmos
   passos da seção anterior).
5. **Ativar Identity + Git Gateway** no novo site e convidar o e-mail do
   cliente.
6. **Domínio do cliente**: configurado por ele mesmo ou pela Samantha via
   registro.br (ou o registrador que o cliente já usa), apontando para a
   Netlify do site dele.
7. Rodar o checklist de qualidade (`QUALIDADE.md`) antes de considerar a
   migração concluída.

## Estrutura do repositório

```
/
├── admin/               → painel Decap CMS (index.html + config.yml)
├── assets/              → CSS, JS, imagens
├── cases/               → páginas de case (case-01.html … case-10.html)
├── content/             → JSON editável pelo painel
│   ├── index.json
│   ├── sobre.json
│   └── cases/case-01.json … case-10.json
├── notas/
├── scripts/
│   └── build_content.py → injeta o conteúdo de content/ no HTML no build
├── netlify.toml
├── index.html
├── sobre.html
├── CLAUDE.md            → regras inegociáveis do projeto
├── PRESERVAR.md         → inventário do que não pode regredir
└── QUALIDADE.md         → checklist de qualidade obrigatório
```
