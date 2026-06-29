# PRESERVAR.md — Inventário do que existe e não pode regredir

Documento de auditoria do estado atual do portfólio antes da evolução 2026.
Qualquer feature nova deve se adaptar ao que está descrito aqui — nunca o contrário.

---

## 1. Animações

### 1.1 Scroll reveal ("fade")
- Classe: `.fade` (definida em [assets/shared.css:251-256](assets/shared.css))
- Estado inicial: `opacity: 0; transform: translateY(20px)`
- Estado visível: `.fade.visible` → `opacity: 1; transform: none`
- Transição: `0.65s var(--ease-out)` em `opacity` e `transform`
- Ativada via `IntersectionObserver` em `initFadeIn()` ([assets/shared.js](assets/shared.js))
  - threshold `0.08`, rootMargin `0px 0px -32px 0px`
  - suporta `data-delay` (ms) por elemento para escalonar entradas
- Usada em praticamente todas as seções de `index.html` e `sobre.html`

### 1.2 Hover / transições de interface
- `.btn-primary:hover` → muda cor de fundo, `translateY(-2px)`, sombra ([assets/shared.css:213](assets/shared.css))
- `.btn-outline:hover`, `.btn-ghost:hover` → mudança de background/cor
- `.case-card:hover` → `translateY(-4px)` + `box-shadow: var(--shadow-md)` ([assets/shared.css:310-313](assets/shared.css))
- `.nav-center a:hover`, `footer a:hover`, `.back-link:hover` → mudança de cor (`color 0.2s`)
- `.carousel-btn:hover` → background translúcido
- `.back-to-top:hover` → `translateY(-2px)` + mudança de cor

### 1.3 Nav scroll state
- `initNav()` ([assets/shared.js](assets/shared.js)) escuta `scroll` e alterna classe `.scrolled` em `nav` quando `window.scrollY > 40`
- `.scrolled` aplica fundo branco translúcido + blur + sombra ([assets/shared.css:122-126](assets/shared.css))
- Variante `nav.nav-dark` para hero escuro: cores claras que invertem ao scrollar ([assets/shared.css:127-141](assets/shared.css))
- Em `index.html`, um `IntersectionObserver` adicional alterna `.nav-on-dark` em `#main-nav` com base na visibilidade do `.hero`

### 1.4 Contador animado
- `animateCounter()` / `initCounters()` ([assets/shared.js](assets/shared.js))
- Anima elementos `[data-target]` de 0 até o valor, com easing cúbico (`1600ms`), suporta `data-prefix` e `data-suffix`
- Disparado via `IntersectionObserver` (threshold `0.5`), uma única vez (`dataset.counted`)

### 1.5 Botão "Voltar ao topo"
- Criado dinamicamente em `initBackToTop()` ([assets/shared.js](assets/shared.js)), injetado no `<body>`
- Classe `.back-to-top`, fica `.visible` quando `window.scrollY > 300` ([assets/shared.css:462-474](assets/shared.css))
- Transições de `opacity`, `transform`, `visibility`, `background`

### 1.6 Badge "live" piscando
- `.badge-live-dot` com `animation: blink 1.6s ease-in-out infinite` ([assets/shared.css:293-299](assets/shared.css))

### 1.7 Slider/carrossel interativo "Na prática" (index.html)
- Localização: seção `#processo`, bloco `.process-carousel` (`index.html` por volta da linha 1200)
- Markup: `.carousel-eyebrow`, `.carousel-slides` > `.carousel-slide` (4 slides, ids `cs1`-`cs4`), `.carousel-controls` com `.carousel-dots` (`.cdot`) e `.carousel-btns` (`#cprev`/`#cnext`)
- CSS: `.carousel-slide { display: none }`, `.carousel-slide.active { display: block; animation: slideIn 0.35s ease }` ([assets/shared.css ou bloco `<style>` de index.html, linhas ~673-820])
- JS (inline em `index.html`, final do arquivo):
  - `goSlide(n)` — troca slide ativo, atualiza `.cdot` (incl. `aria-selected`) e habilita/desabilita `#cprev`/`#cnext`
  - `navSlide(d)` — navega `±1` slide com clamp
  - Navegação por teclado: `ArrowLeft`/`ArrowRight` quando o foco está dentro de `.process-carousel`
- Acessibilidade do carrossel: `role="region"` + `aria-label`, dots com `role="tab"`/`aria-selected`, `aria-controls` apontando para o id do slide, `aria-label="Slide X de 4"` nos números, textos `sr-only` descrevendo cada slide

### 1.8 "Chips" do hero (papéis/roles)
- Localização: `.hero-roles` em `index.html` (seção `.hero-left`)
- Markup: `<span class="hero-role">` (alguns com classe extra `hi`), cada um com `data-pt`/`data-en`
- Estilo visual de "chip"/pill — verificar regras `.hero-role` no bloco `<style>` de `index.html` antes de alterar
- Estes spans também participam do sistema bilíngue (data-pt/data-en)

---

## 2. Acessibilidade

- **Skip link**: `<a href="#hero" class="skip-link" data-pt="Pular para o conteúdo principal" data-en="Skip to main content">` — primeiro elemento do `<body>` em `index.html` (linha ~590). Estilo em [assets/shared.css:2-18](assets/shared.css): fica fora da tela (`top: -100%`) e aparece (`top: 0`) com `:focus`.
- **Hierarquia de headings**: `h1` único (`.hero-name`, "Samantha Barreto"), `h2` para títulos de seção (`.sec-title`, `.about-quote`, `.contact-title`), `h3` para títulos de cards de case (`.case-card-title`). Não pular níveis ao adicionar novas seções.
- **`aria-label`** em seções (`<section aria-label="...">`), no nav (`aria-label="Navegação principal"`), no carrossel (`role="region" aria-label="..."`), nos botões de navegação do carrossel e dots.
- **`aria-hidden="true"`** em ilustrações SVG decorativas (ex.: `.hero-illustration-bg`, ícone do `.back-to-top`).
- **`alt` texts**: imagens reais têm `alt` descritivo (ex.: `alt="Samantha Barreto, Content Designer"`); algumas usam `data-alt-pt`/`data-alt-en` para alt bilíngue.
- **`.sr-only`**: classe utilitária ([assets/shared.css:20-30](assets/shared.css)) para texto somente leitor de tela (usada nos dots do carrossel).
- **Foco visível**: `:focus-visible` global com `outline: 2px solid var(--green)` + `outline-offset` ([assets/shared.css:32-42](assets/shared.css)); reforçado em `a:focus-visible, button:focus-visible` e em `.back-to-top:focus-visible`.
- **`prefers-reduced-motion`**: media query global ([assets/shared.css:44-55](assets/shared.css)) zera durações de animação/transição e remove o transform/opacity do `.fade` quando o usuário pede menos movimento.
- **Touch targets**: `.lang-btn` e `.hero-lang .lang-btn` têm `min-height/min-width: 44px`; `.case-back`/`.cni` em telas pequenas também têm `min-height: 44px`.
- **Contraste**: paleta navy/green foi escolhida com contraste AA em mente (texto escuro sobre branco, texto claro sobre navy escuro). Qualquer cor nova deve ser checada contra `--navy`/`--white`/`--gray-light`.

---

## 3. Sistema bilíngue PT/EN

- Chave de armazenamento: `localStorage['ss_lang']` (`'pt'` ou `'en'`)
- Funções centrais em [assets/shared.js](assets/shared.js):
  - `getLang()` / `setLang(lang)` / `applyLang(lang)` / `initLang()`
- `applyLang(lang)` percorre o DOM e troca conteúdo via:
  - `[data-pt]` / `[data-en]` → `innerHTML` (texto principal, suporta HTML inline como `<em>`)
  - `[data-pt-placeholder]` / `[data-en-placeholder]` (com fallback `data-pt-placeholder`) → `placeholder`
  - `[data-alt-pt]` / `[data-alt-en]` → `alt` de imagens
  - `[data-lang-block]` → mostra/esconde blocos inteiros conforme idioma (`display: '' | 'none'`)
  - `iframe[data-src-pt]` / `data-src-en` → troca `src` de iframes
  - `img[data-src-pt]` / `data-src-en` → troca `src` de imagens
  - Faz `postMessage({type:'setLang', lang})` para todos os `<iframe>` (fallback)
- Botões `.lang-btn[data-lang="pt"|"en"]`: recebem `.active` e `aria-pressed` conforme idioma atual; clique chama `setLang()`
- `document.documentElement.lang` e `[data-lang]` são atualizados (`pt-BR` ou `en`)
- `initLang()` é chamado no `DOMContentLoaded`, junto com `initCounters`, `initFadeIn`, `initNav`, `initBackToTop`
- **Todo texto visível novo precisa de `data-pt` + `data-en`** seguindo este padrão. Nenhum novo sistema de tradução deve ser criado — `shared.js` é o único responsável pela troca de idioma.

---

## 4. Breakpoints e responsividade

Definidos em [assets/shared.css](assets/shared.css) (seção "Responsivo"), além de regras pontuais no `<style>` de `index.html`/`sobre.html`/cases:

- **`max-width: 900px`**
  - `.hero` vira coluna única (`grid-template-columns: 1fr`, `grid-template-rows: auto auto`), `.hero-left` reordenado (`order: 2`)
  - `nav`: padding reduzido, `.nav-center` escondido (menu central some)
  - `.sec` padding reduzido para `4rem 2rem`
  - `.about-sec`, `.cases-grid`, `.case-featured`, `.process-layout` colapsam para 1 coluna
  - `.hero-stats` vira grid `1fr 1fr`
  - `.contact-sec` padding ajustado
  - `footer` vira coluna, centralizado

- **`max-width: 600px`**
  - `.sec` padding `3rem 1.25rem`
  - `.sec-title` reduz para `1.75rem`, `.hero-name` para `2.8rem`
  - `.cases-header` vira coluna
  - `.case-card-body` padding reduzido
  - `.about-left`/`.about-right` padding reduzido
  - `.contact-title` reduz para `2rem`, `.contact-links` vira coluna centralizada
  - `nav` padding `1rem 1.25rem`

- **`max-width: 480px`**
  - `.hero-cta` vira coluna, botões ocupam largura total
  - `.skill-row` vira 1 coluna
  - `.case-card-metrics` permite quebra de linha

- **`max-width: 768px`** (cases)
  - `.case-back`, `.cni` com `min-height: 44px` (touch target em mobile)

> Ao adicionar layouts novos, reaproveitar esses breakpoints (900/600/480/768) em vez de criar novos valores arbitrários, salvo necessidade real comprovada.

---

## 5. Paleta de cores e tokens

Tokens definidos em `:root` em [assets/shared.css:64-88](assets/shared.css):

```css
--navy:       #1A1A2E;   /* azul-petróleo escuro — fundo do hero, footer, texto principal */
--navy-mid:   #16213E;   /* azul-petróleo médio — fundo do hero */
--navy-soft:  #1E2A45;   /* azul-petróleo suave — variações de fundo escuro */
--green:      #0F6E56;   /* verde petróleo/cobre-esverdeado — cor de destaque/ação primária */
--green-2:    #1A9B76;   /* verde mais claro — hover de destaque */
--green-mist: #E1F5EE;   /* fundo claro para tags */
--gray:       #5C5C6E;
--gray-light: #F5F5F7;
--gray-line:  rgba(26,26,46,0.08);
--white:      #FFFFFF;

--font-display: 'Fraunces', Georgia, serif;
--font-body:    'DM Sans', sans-serif;

--r-sm: 8px; --r-md: 14px; --r-lg: 20px; --r-full: 9999px;
--shadow-sm / --shadow-md
--ease-out: cubic-bezier(0.22, 1, 0.36, 1)
```

Tags auxiliares usam cores fora dos tokens centrais (definidas inline em `shared.css`):
- `.tag-amber` → `#FAEEDA` / `#854F0B`
- `.tag-blue` → `#E6F1FB` / `#185FA5`
- `.badge-live` (pilot) → tons de âmbar `#854F0B` / `#C4820A`

**Observação resolvida**: a paleta do site é **azul-petróleo** (família `--navy`/`--navy-mid`/`--navy-soft`) e **verde-petróleo** (família `--green`/`--green-2`, #0F6E56). Onde materiais de referência ou instruções mencionarem "cobre", isso se refere a `--green`/`--green-2` (#0F6E56), a cor de destaque/ação primária do site. Nenhuma cor "cobre" literal nova será introduzida; a paleta permanece exatamente como está.

---

## 6. Outras estruturas relevantes

- `cases/case-01.html` a `case-07.html`: páginas de case individuais, cada uma com seu próprio hero (`.hero-lang` para toggle de idioma sobre fundo escuro) e navegação `.case-back`/`.cni`
- `sobre.html`: página "Sobre", com `.about-sec`, `.about-left`/`.about-right`, `.sobre-cta`
- Footer compartilhado em todas as páginas, com links e copyright
