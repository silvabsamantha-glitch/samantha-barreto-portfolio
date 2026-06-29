# CLAUDE.md — Regras inegociáveis para este projeto

Portfólio estático de Samantha Barreto (GitHub Pages). Trabalho de evolução ocorre
no branch `evolucao-2026`. Ver `PRESERVAR.md` para o inventário completo do que
existe hoje e não pode regredir.

## Regras inegociáveis

1. **Nunca remover ou degradar** animações, acessibilidade, responsividade ou o
   sistema bilíngue existentes (ver `PRESERVAR.md`). Em caso de conflito entre
   uma feature nova e algo existente, a feature nova se adapta — nunca o contrário.

2. **Nunca modificar `assets/shared.js`** nem criar um sistema de conteúdo paralelo
   (como antigos `textos.js`/`content.js`, que já quebraram tradução e navegação).
   `shared.js` é o único responsável pela troca de idioma via `data-pt`/`data-en`.
   Arquivos novos de conteúdo (ex.: `conversa.json`) só podem ser lidos por scripts
   isolados próprios, sem interferir em `shared.js` ou no fluxo de `applyLang`.

3. **Todo conteúdo novo precisa de versão PT e EN** via `data-pt`/`data-en` (ou
   `data-pt-placeholder`/`data-alt-pt` quando aplicável), seguindo exatamente o
   padrão descrito em `PRESERVAR.md` § 3.

4. **Todo conteúdo novo precisa atender WCAG 2.1 AA**: contraste adequado, foco
   visível (`:focus-visible`), navegação por teclado, `aria-*` quando necessário,
   `alt` em imagens, hierarquia de headings coerente.

5. **Toda animação nova precisa respeitar `prefers-reduced-motion`**, seguindo o
   padrão já existente em `assets/shared.css`.

6. **Texto narrativo nunca usa travessão.** Tom em primeira pessoa.

7. **Linguagem neutra de gênero por reescrita.** Nunca usar barras, parênteses,
   "x" ou "@" para neutralidade. Reescrever a frase até o gênero desaparecer.

8. **Empresas dos cases sempre ficcionalizadas**: "grande instituição financeira
   nacional", "grande instituição brasileira de pagamentos", "grande empresa
   financeira de investimentos nos Estados Unidos". A timeline de trajetória usa
   nomes reais. Projetos pessoais podem citar ferramentas reais.

9. **O nome é sempre "Samantha Barreto".**

10. **Manter a paleta azul-petróleo e verde-petróleo** (tokens atuais `--navy*`
    e `--green*` em `assets/shared.css`). Onde referências mencionarem "cobre",
    isso equivale a `--green`/`--green-2` (#0F6E56), a cor de destaque do site.
    Nada de criar paleta nova ou introduzir um tom "cobre" literal.
