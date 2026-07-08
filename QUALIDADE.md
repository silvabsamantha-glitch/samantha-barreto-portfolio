# QUALIDADE.md — Padrão de qualidade inegociável do portfólio

Toda alteração, antes de gerar zip ou commitar, passa por este checklist completo.
Nenhum zip é gerado com item FALHOU. Corrija primeiro, gere depois.

---

## 1. WCAG 2.1 AA — Contraste de cores

### Modo claro (padrão para todos os visitantes)
| Par | Mínimo | Verificar |
|-----|--------|-----------|
| --navy (#1A1A2E) sobre --white (#FFFFFF) | ≥ 4.5:1 | |
| --navy sobre --gray-light (#FBF9F4) | ≥ 4.5:1 | |
| --navy sobre --cream-warm (#F2EFE8) | ≥ 4.5:1 | |
| --gray (#5C5C6E) sobre --white | ≥ 4.5:1 | |
| --green (#0F6E56) sobre --white | ≥ 4.5:1 | |
| Texto sobre fundo de badge/pill claro | ≥ 4.5:1 | |
| Botões outline: texto sobre fundo | ≥ 4.5:1 | |
| Links hover: nova cor sobre fundo | ≥ 4.5:1 | |

### Modo escuro (toggle manual)
| Par | Mínimo | Verificar |
|-----|--------|-----------|
| --text-primary (#F0EDE6) sobre --bg-primary (#0E1124) | ≥ 4.5:1 | |
| --text-primary sobre --bg-secondary (#16213E) | ≥ 4.5:1 | |
| --text-primary sobre --bg-tertiary (#1E2A45) | ≥ 4.5:1 | |
| --text-secondary sobre --bg-primary | ≥ 4.5:1 | |
| --text-secondary sobre --bg-tertiary | ≥ 4.5:1 | |
| --green-dm (#4ECBA8) sobre --bg-primary | ≥ 4.5:1 | |
| --green-dm sobre --bg-tertiary | ≥ 4.5:1 | |
| Texto sobre fundo de badge/pill escuro | ≥ 4.5:1 | |
| Botões outline modo escuro: texto sobre fundo | ≥ 4.5:1 | |

### Regra especial: elementos com fundo fixo
Qualquer elemento com background hardcoded (hex literal, não token)
deve ter sua cor de texto também hardcoded — nunca usar token semântico
que muda com o tema. Verificar todos os elementos com style inline.

---

## 2. WCAG 2.1 AA — Acessibilidade estrutural

### Navegação e foco
- [ ] Skip link presente como primeiro elemento do body em todas as páginas
- [ ] Todos os links e botões têm :focus-visible com outline 2px solid --green
- [ ] Navegação completa por teclado (Tab, Enter, Espaço, Escape)
- [ ] Ordem de foco lógica e sequencial
- [ ] Touch targets mínimo 44x44px (verificar lang-btn, theme-toggle, case-back, cni)

### Semântica e hierarquia
- [ ] h1 único por página
- [ ] h2 para títulos de seção, h3 para subtítulos — sem pular níveis
- [ ] aria-label em todas as sections e regiões
- [ ] aria-label e aria-pressed nos botões de estado (lang-btn, theme-toggle)
- [ ] aria-current="page" no item de nav da página atual
- [ ] aria-hidden="true" em todos os elementos decorativos (SVGs, aurora, estrelas, marcadores §)
- [ ] alt descritivo em todas as imagens reais
- [ ] data-alt-pt / data-alt-en em imagens bilíngues
- [ ] role="region" + aria-label no carrossel
- [ ] role="tab" + aria-selected nos dots do carrossel

### Leitores de tela
- [ ] Nenhuma informação transmitida só por cor (sempre tem texto, ícone ou forma)
- [ ] Emoji decorativo em aria-hidden="true"
- [ ] Texto sr-only onde necessário para contexto

---

## 3. Daltonismo — Independência de cor

Verificar que nenhuma informação depende exclusivamente de cor:

| Elemento | Indicador além da cor | Verificar |
|----------|----------------------|-----------|
| Toggle de tema ☾/☀ | Ícone + aria-label + aria-pressed | |
| Seletor PT/EN | Bandeira + texto | |
| Badge "live" | Texto "Em piloto" além do ponto | |
| Tags de case (.tag-amber, .tag-blue) | Texto descritivo | |
| Métricas dos cases | Valor numérico + label de texto | |
| Estados hover/focus | outline ou transform além de cor | |
| Links | underline ou indicador visual além de cor | |

Ferramenta para simulação visual:
- Chrome DevTools → Rendering → Emulate vision deficiencies
- Testar: Protanopia, Deuteranopia, Tritanopia, Achromatopsia

---

## 4. Sistema bilíngue PT/EN

- [ ] shared.js não foi alterado
- [ ] Todo texto visível novo tem data-pt e data-en
- [ ] Nenhum elemento novo usa data-pt/data-en para fins não-tradução
  (ex: botão de tema deve usar data-label-pt/data-label-en)
- [ ] applyLang() não quebra com os novos elementos
- [ ] Títulos de página (title) têm versão bilíngue quando necessário
- [ ] alt de imagens bilíngues usa data-alt-pt/data-alt-en
- [ ] localStorage key correta: 'ss_lang' (não criar chave nova)

---

## 5. Tema claro/escuro

- [ ] theme.js não modifica shared.js
- [ ] Default é sempre modo claro (sem localStorage)
- [ ] localStorage key: 'sb_theme' (não confundir com 'ss_lang')
- [ ] html.light-mode e html.dark-mode têm tokens completos
- [ ] Nenhum @media (prefers-color-scheme) ativo (removido)
- [ ] Botão toggle tem aria-label atualizado dinamicamente por idioma
- [ ] Ícone ☾ = modo claro ativo (convida para escuro)
- [ ] Ícone ☀ = modo escuro ativo (convida para claro)
- [ ] Elementos com fundo fixo (hero, nav, footer, .about-left) não participam do tema
- [ ] Elementos com fundo via token semântico participam corretamente
- [ ] Nenhum estilo inline (color/background) usa token semântico sobre fundo fixo

---

## 6. Animações e movimento

- [ ] prefers-reduced-motion cobre TODAS as animações:
  .fade, .aurora-band, .aurora-star, .aurora-node, .theme-toggle,
  .badge-live-dot, .carousel-slide, .back-to-top, hover transforms
- [ ] Animações novas adicionadas ao bloco existente (não criar novo @media)
- [ ] Transições de interface não excedem 0.65s
- [ ] Carrossel navegável por teclado (ArrowLeft/ArrowRight)

---

## 7. Responsividade

### Breakpoints obrigatórios (testar todos)
| Breakpoint | O que verificar |
|------------|----------------|
| 480px | .hero-cta em coluna, botões largura total, nav compacto |
| 600px | padding reduzido, fontes menores, .contact-links em coluna |
| 768px | touch targets 44px nos cases, .case-back e .cni |
| 900px | hero em coluna única, nav-center oculto, grids em 1 coluna |

### Verificar em todos os breakpoints
- [ ] Nenhum elemento vaza horizontalmente (overflow-x)
- [ ] Texto legível sem zoom
- [ ] Botões clicáveis sem precisar de zoom
- [ ] Toggle de tema não quebra o nav em mobile
- [ ] PT/EN e theme-toggle lado a lado (não empilhados) em todos os arquivos

---

## 8. Encoding e integridade de arquivo

- [ ] Zero ocorrências de mojibake (Ã, ç, ã virados em caracteres estranhos)
- [ ] Python com UTF-8 explícito para qualquer edição em massa
- [ ] Nunca usar Perl para edição de arquivos HTML
- [ ] CSS sem erros de sintaxe (chaves balanceadas)
- [ ] @import do Google Fonts na linha 1 do shared.css

---

## 9. Entrega — Processo obrigatório

### Antes de gerar zip
1. Rodar todos os itens acima
2. Corrigir cada FALHOU antes de continuar
3. Documentar o que foi alterado e o que não foi

### Formato do zip
- Nome: `samantha-barreto-portfolio-vN.zip` (N incremental)
- Conteúdo: TODOS os arquivos do projeto (não só os alterados)
- Incluir obrigatoriamente: assets/, cases/, notas/, index.html,
  sobre.html, CNAME, CLAUDE.md, PRESERVAR.md, QUALIDADE.md
- Excluir: .git/, .DS_Store, .claude/

### Após upload no GitHub
- Verificar no browser: modo claro abre por padrão
- Verificar toggle de tema funcionando
- Verificar PT/EN funcionando
- Verificar notas/ acessível
- Verificar um case completo nos dois modos
- Salvar cópia do zip no Google Drive: pasta "portfólio", nome com versão

---

## 10. Prompt padrão de QA (copiar e colar no Claude Code)

```
Rodar QA completo conforme QUALIDADE.md antes de gerar zip.
Não alterar nada. Reportar cada item como PASSOU, FALHOU ou ATENÇÃO.

1. Calcular contraste dos pares de modo claro listados no QUALIDADE.md
2. Calcular contraste dos pares de modo escuro listados no QUALIDADE.md
3. Verificar skip link, focus-visible, aria-*, hierarquia de headings
4. Verificar independência de cor em todos os elementos listados
5. Verificar sistema bilíngue: shared.js intocado, data-pt/data-en completos
6. Verificar theme.js: default claro, sem prefers-color-scheme, keys corretas
7. Verificar prefers-reduced-motion cobrindo todas as animações
8. Verificar responsividade nos 4 breakpoints (480/600/768/900px)
9. Verificar encoding: zero mojibake, CSS válido, @import na linha 1

Para cada FALHOU: corrigir antes de continuar.
Somente após tudo PASSAR: gerar samantha-barreto-portfolio-vN.zip
com TODOS os arquivos do projeto, incluindo assets/, cases/, notas/,
index.html, sobre.html, CNAME, CLAUDE.md, PRESERVAR.md, QUALIDADE.md.
Excluir .git/, .DS_Store, .claude/
```

---

## 11. Contexto técnico do projeto

### Arquivos que nunca devem ser modificados sem autorização explícita
- `assets/shared.js` — único responsável pelo sistema bilíngue
- `assets/shared.css` — tokens e estilos globais (alterações afetam todo o site)

### Arquivos de tema
- `assets/theme.js` — gerencia dark/light mode, isolado de shared.js

### Estrutura de pastas
```
/
├── assets/
│   ├── shared.css
│   ├── shared.js
│   ├── theme.js
│   └── images/
├── cases/
│   └── case-01.html até case-10.html
├── notas/
│   ├── index.html
│   └── habilidade-contexto.html
├── index.html
├── sobre.html
├── CNAME
├── CLAUDE.md
├── PRESERVAR.md
├── QUALIDADE.md
└── README.md
```

### Tokens de cor — referência rápida
```css
/* Modo claro (padrão) */
--navy:       #1A1A2E;
--navy-mid:   #16213E;
--navy-soft:  #1E2A45;
--green:      #0F6E56;
--green-2:    #1A9B76;
--gray:       #5C5C6E;
--gray-light: #FBF9F4;
--cream-warm: #F2EFE8;
--white:      #FFFFFF;

/* Tokens semânticos — modo claro */
--bg-primary:    #FFFFFF;
--bg-secondary:  #FBF9F4;
--bg-tertiary:   #F2EFE8;
--text-primary:  #1A1A2E;
--text-secondary:#5C5C6E;
--green-dm:      #0F6E56;
--border-subtle: rgba(26,26,46,0.08);

/* Tokens semânticos — modo escuro (html.dark-mode) */
--bg-primary:    #0E1124;
--bg-secondary:  #16213E;
--bg-tertiary:   #1E2A45;
--text-primary:  #F0EDE6;
--text-secondary:rgba(240,237,230,0.65);
--green-dm:      #4ECBA8;
--border-subtle: rgba(255,255,255,0.08);
```

### Regras de edição em massa
- Sempre Python com `open(f, encoding='utf-8')`
- Nunca Perl (corrompeu encoding em incidente anterior)
- Verificar mojibake após qualquer edição em massa

---

*Documento mantido por Samantha Barreto.*
*Atualizar sempre que uma nova feature ou padrão for adicionado ao portfólio.*
*Versão inicial: Junho 2026.*
