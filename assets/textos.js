/**
 * textos.js — Textos editaveis do portfolio
 *
 * COMO EDITAR:
 * 1. Abra no VS Code ou qualquer editor
 * 2. Use Ctrl+F para encontrar o texto
 * 3. Edite entre aspas depois de pt: (portugues) ou en: (ingles)
 * 4. Salve e suba em assets/textos.js no GitHub
 *
 * Nao altere as chaves nem a estrutura do arquivo.
 */

const TEXTOS = {

  // ── INDEX
  index: {
    // Sobre
    t0: { pt: "Sobre", en: "About" },
    // Cases
    t1: { pt: "Cases", en: "Work" },
    // Processo
    t2: { pt: "Processo", en: "Process" },
    // Contato
    t3: { pt: "Contato", en: "Contact" },
    // Disponível para novas oportunidades
    t4: { pt: "Disponível para novas oportunidades", en: "Open to new opportunities" },
    // Designer Conversacional
    t5: { pt: "Designer Conversacional", en: "Conversational Designer" },
    // IA Generativa · Fintech · 6+ anos
    t6: { pt: "IA Generativa · Fintech · 6+ anos", en: "Generative AI · Fintech · 6+ years" },
    // Ver cases
    t7: { pt: "Ver cases", en: "See work" },
    // Fale comigo
    t8: { pt: "Fale comigo", en: "Get in touch" },
    // Onde trabalhei
    t9: { pt: "Onde trabalhei", en: "Where I've worked" },
    // Sobre mim
    t10: { pt: "Sobre mim", en: "About me" },
    // Conteúdo que resolve, não só comunica.
    t11: { pt: "Conteúdo que <em>resolve</em>, não só comunica.", en: "Content that <em>solves</em>, not just communicates." },
    // Habilidades
    t12: { pt: "Habilidades", en: "Skills" },
    // Conversacional
    t13: { pt: "Conversacional", en: "Conversational" },
    // Pesquisa
    t14: { pt: "Pesquisa", en: "Research" },
    // Métricas
    t15: { pt: "Métricas", en: "Metrics" },
    // Ferramentas
    t16: { pt: "Ferramentas", en: "Tools" },
    // Idiomas
    t17: { pt: "Idiomas", en: "Languages" },
    // Português nativo
    t18: { pt: "Português nativo", en: "Native Portuguese" },
    // Inglês fluente
    t19: { pt: "Inglês fluente", en: "Fluent English" },
    // Espanhol intermediário
    t20: { pt: "Espanhol intermediário", en: "Intermediate Spanish" },
    // Cases selecionados
    t21: { pt: "Cases selecionados", en: "Selected work" },
    // Cada projeto começacom uma dor real.
    t22: { pt: "Cada projeto começa<br>com uma dor real.", en: "Every project starts<br>with a real problem." },
    // Ver todos os cases →
    t23: { pt: "Ver todos os cases →", en: "See all cases →" },
    // Case em destaque · Personalidade & Tom de Voz
    t24: { pt: "Case em destaque · Personalidade & Tom de Voz", en: "Featured case · Personality & Tone of Voice" },
    // Niara: Criando a alma de um assistente virtual de 
    t25: { pt: "Niara: Criando a alma de um assistente virtual de RH", en: "Niara — Building the soul of an HR virtual assistant" },
    // +600 colaboradores ouvidos, 40h de testes de conte
    t26: { pt: "+600 colaboradores ouvidos, 40h de testes de conteúdo, 24h de Design Sprint. Do zero à personalidade que mudou os números do bot.", en: "+600 employees interviewed, 40h of content testing, 24h of Design Sprint. From scratch to a personality that changed the bot's numbers." },
    // Tom de Voz
    t27: { pt: "Tom de Voz", en: "Tone of Voice" },
    // Persona
    t28: { pt: "Persona", en: "Persona" },
    // volume de conversas
    t29: { pt: "volume de conversas", en: "conversation volume" },
    // share de atendimento digital
    t30: { pt: "share de atendimento digital", en: "digital support share" },
    // falso positivo
    t31: { pt: "falso positivo", en: "false positive" },
    // acurácia
    t32: { pt: "acurácia", en: "accuracy" },
    // Assistente de Voz da Marca
    t33: { pt: "Assistente de Voz da Marca", en: "Brand Voice Assistant" },
    // Copiloto com IA para garantir consistência de voz 
    t34: { pt: "Copiloto com IA para garantir consistência de voz em todos os canais, adaptado por segmento e momento de jornada.", en: "AI copilot to ensure voice consistency across all channels — adapted by segment and journey moment." },
    // Em piloto
    t35: { pt: "Em piloto", en: "In pilot" },
    // Case 02 · Framework próprio
    t36: { pt: "Case 02 · Framework próprio", en: "Case 02 · Own framework" },
    // Bot de Content First
    t37: { pt: "Bot de Content First", en: "Content First Bot" },
    // Uma iniciativa minha para inverter o processo. Int
    t38: { pt: "Uma iniciativa minha para inverter o processo. Intenção antes de canal. Prototipado e testando.", en: "Own initiative to flip the process: intention before channel. Prototyped and testing." },
    // Em testes
    t39: { pt: "Em testes", en: "In testing" },
    // Redesign Conversacional: Crédito PJ
    t40: { pt: "Redesign Conversacional: Crédito PJ", en: "Conversational Redesign — Business Credit" },
    // O maior ofensor de CSAT do produto, com mais de 3 
    t41: { pt: "O maior ofensor de CSAT do produto, com mais de 3 mil acessos por mês. Hierarquia da informação e cenários invisíveis que mudaram tudo.", en: "Information hierarchy and unmapped scenarios. Biggest CSAT offender turned into real improvement." },
    // Retenção
    t42: { pt: "Retenção", en: "Retention" },
    // Case 05 · Alta pressão
    t43: { pt: "Case 05 · Alta pressão", en: "Case 05 · High pressure" },
    // Assistente de Gerentes PF: do zero ao segundo come
    t44: { pt: "Assistente de Gerentes PF: do zero ao segundo começo", en: "Branch Manager Assistant — from scratch to a second start" },
    // O cliente está na frente do gerente. Cada segundo 
    t45: { pt: "O cliente está na frente do gerente. Cada segundo conta. Projetei um assistente para funcionar exatamente nesse contexto.", en: "Chatbot for branch managers with the customer right in front. High-pressure context changes everything in conversational design." },
    // Seguros — Content First do Zero
    t46: { pt: "Seguros — Content First do Zero", en: "Insurance — Content First from Scratch" },
    // Novo assistente de seguros. Antes de qualquer tela
    t47: { pt: "Novo assistente de seguros. Antes de qualquer tela, definimos intenção, resultado esperado e encenamos a conversa.", en: "New insurance assistant designed before any screen: intention, expected outcome, enactment, and journey." },
    // Novo Bot
    t48: { pt: "Novo Bot", en: "New Bot" },
    // Cartão de Crédito: a pergunta que não foi respondi
    t49: { pt: "Cartão de Crédito: a pergunta que não foi respondida", en: "Credit Card — the question that wasn't answered" },
    // O cliente perguntava quando chega o cartão, não qu
    t50: { pt: "O cliente perguntava quando chega o cartão, não qual é o prazo. Três caminhos de solução, com e sem API.", en: "The customer asked when the card arrives, not what the deadline is. Three solution scenarios with and without API." },
    // Cenários
    t51: { pt: "Cenários", en: "Scenarios" },
    // Ver todos os cases →
    t52: { pt: "Ver todos os cases →", en: "See all cases →" },
    // Como trabalho
    t53: { pt: "Como trabalho", en: "How I work" },
    // Do problema real ao resultado real.
    t54: { pt: "Do problema real ao resultado real.", en: "From real problem to real result." },
    // Entendo antes de escrever
    t55: { pt: "Entendo antes de escrever", en: "Understand before writing" },
    // Converso com quem usa, leio os dados, ouço o atend
    t56: { pt: "Converso com quem usa, leio os dados, ouço o atendimento. A pergunta certa raramente é a primeira que aparece.", en: "I talk to users, read the data, listen to support. The right question is rarely the first one that comes up." },
    // Mapeio o contexto
    t57: { pt: "Mapeio o contexto", en: "Map the context" },
    // Onde a pessoa está na jornada, o que ela já sabe, 
    t58: { pt: "Onde a pessoa está na jornada, o que ela já sabe, o que precisa saber. Vale para chatbot, e-mail, botão ou FAQ.", en: "Where the person is in the journey, what they already know, what they need to know. Works for chatbot, email, button or FAQ." },
    // Tomo decisões intencionais
    t59: { pt: "Tomo decisões intencionais", en: "Make intentional decisions" },
    // Tom, hierarquia, canal, formato. Cada escolha tem 
    t60: { pt: "Tom, hierarquia, canal, formato. Cada escolha tem uma razão. Nada é por instinto ou convenção.", en: "Tone, hierarchy, channel, format. Every choice has a reason. Nothing is by instinct or convention." },
    // Meço e ajusto
    t61: { pt: "Meço e ajusto", en: "Measure and adjust" },
    // KPIs definidos antes de publicar. Ciclos curtos. O
    t62: { pt: "KPIs definidos antes de publicar. Ciclos curtos. O trabalho não termina no go-live.", en: "KPIs defined before publishing. Short cycles. The work doesn't end at go-live." },
    // Disponível para novas oportunidades
    t63: { pt: "Disponível para novas oportunidades", en: "Open to new opportunities" },
    // Vamos construir algo juntos?
    t64: { pt: "Vamos construir algo <em>juntos</em>?", en: "Let's build something <em>together</em>?" },
    // Aberta a conversas sobre oportunidades em Content 
    t65: { pt: "Aberta a conversas sobre oportunidades em Content Design, Design Conversacional e IA Generativa — no Brasil ou internacionalmente.", en: "Open to conversations about opportunities in Content Design, Conversational Design, and Generative AI — in Brazil or internationally." },
    // Inglês fluente · Espanhol intermediário
    t66: { pt: "Inglês fluente · Espanhol intermediário", en: "Fluent English · Intermediate Spanish" },
    // Ver todos os cases
    t67: { pt: "Ver todos os cases", en: "See all cases" },
  },

  // ── CASE 01 — Assistente de Voz da Marca
  case01: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Assistente de Voz da Marca
    t5: { pt: "Assistente de Voz da Marca", en: "Brand Voice Assistant" },
    // Como criamos um copiloto com IA para garantir que 
    t6: { pt: "Como criamos um copiloto com IA para garantir que qualquer time pudesse escrever com a voz da Meridian, no canal certo, para o cliente certo, no momento certo.", en: "How we built an AI copilot to ensure any team could write in Meridian's voice, in the right channel, for the right customer, at the right moment." },
    // Elementos ficcionalizados para proteger a confiden
    t7: { pt: "Elementos ficcionalizados para proteger a confidencialidade: nome da empresa (Meridian Investimentos), nomes de segmentos e registros de comunicação. O processo, as decisões e os resultados são reais.", en: "Fictionalized elements to protect confidentiality: company name (Meridian Investimentos), segment names and communication registers. The process, decisions, and results are real." },
    // Em piloto
    t8: { pt: "Em piloto", en: "In pilot" },
    // A Meridian atende três segmentos de clientes com p
    t9: { pt: "A Meridian atende três segmentos de clientes com perfis, vocabulários e estados mentais muito diferentes. Todos os times de produto escreviam copy para esses segmentos sem uma referência consolidada de voz. O resultado eram inconsistências entre canais, entre segmentos e entre times.", en: "Meridian serves three customer segments with very different profiles, vocabularies, and mental states. All product teams were writing copy for these segments without a consolidated voice reference. The result was inconsistency across channels, segments, and teams." },
    // Um mesmo estado de erro podia soar protocolar em u
    t10: { pt: "Um mesmo estado de erro podia soar protocolar em um canal e informal em outro. O time de Content não conseguia revisar tudo.", en: "The same error state could sound formal in one channel and informal in another. The Content team couldn't review everything." },
    // Sintoma visível
    t11: { pt: "Sintoma visível", en: "Visible symptom" },
    // Designers e PMs escreviam copy sem referência cons
    t12: { pt: "Designers e PMs escreviam copy sem referência consolidada. O mesmo erro soava protocolar em um canal e informal em outro.", en: "Designers and PMs wrote copy without a consolidated reference. The same error sounded formal in one channel and informal in another." },
    // Raiz do problema
    t13: { pt: "Raiz do problema", en: "Root cause" },
    // Não existia uma arquitetura de voz operacionalizáv
    t14: { pt: "Não existia uma arquitetura de voz operacionalizável. Algo que um Designer sem especialização em conteúdo pudesse consultar e aplicar sozinho.", en: "There was no operationalizable voice architecture. Something a Designer without content expertise could consult and apply on their own." },
    // A solução não era só um guia de tom de voz. Guias 
    t15: { pt: "A solução não era só um guia de tom de voz. Guias existem e ficam guardados sem ninguém ler. A solução era um assistente que incorporasse a voz e devolvesse respostas, não documentos.", en: "The solution wasn't just a tone of voice guide. Guides exist and sit around unread. The solution was an assistant that embodied the voice and returned answers, not documents." },
    // 3 registros de comunicação
    t16: { pt: "3 registros de comunicação", en: "3 communication registers" },
    // Trabalhei em co-design com o líder de Design e out
    t17: { pt: "Trabalhei em co-design com o líder de Design e outra Content Designer para estruturar os registros. Cada um calibrado para um estado mental diferente do cliente.", en: "I worked in co-design with the Design Lead and another Content Designer to structure the registers. Each calibrated for a different customer mental state." },
    // Calibração por segmento
    t18: { pt: "Calibração por segmento", en: "Segment calibration" },
    // Em piloto com times de Design
    t19: { pt: "Em piloto com times de Design", en: "In pilot with Design teams" },
    // O assistente está sendo testado com Designers que 
    t20: { pt: "O assistente está sendo testado com Designers que não têm Content dedicado no squad. Estamos medindo: adoção pelos times, qualidade de copy antes e depois, redução de ciclos de revisão. Próximos passos: expansão para novos canais e jornadas de produto.", en: "The assistant is being tested with Designers who don't have dedicated Content in their squad. We're measuring: team adoption, copy quality before and after, reduction in review cycles. Next steps: expansion to new channels and product journeys." },
    // ← Todos os cases
    t21: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 02 — Bot de Content First
  case02: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Bot de Content First
    t5: { pt: "Bot de Content First", en: "Content First Bot" },
    // Como inverti o processo de criação de comunicações
    t6: { pt: "Como inverti o processo de criação de comunicações colocando intenção antes de canal e transformei esse raciocínio em um assistente que qualquer pessoa do time consegue usar.", en: "How I flipped the communication creation process by putting intention before channel — and turned that reasoning into an assistant any team member can use." },
    // Prototipado · Em testes
    t7: { pt: "Prototipado · Em testes", en: "Prototyped · In testing" },
    // ← Todos os cases
    t8: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 03 — Redesign Credito PJ
  case03: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // A pergunta que o chatbot nunca respondeu
    t5: { pt: "A pergunta que o chatbot nunca respondeu", en: "The question the chatbot never answered" },
    // Como reescrever fluxos com hierarquia da informaçã
    t6: { pt: "Como reescrever fluxos com hierarquia da informação gerou mais 10 pontos percentuais de CSAT e mais 3 de retenção, e o que os dados não estavam mostrando.", en: "How rewriting flows with information hierarchy generated 10 more CSAT points and 3 more retention points — and what the data wasn't showing." },
    // Elementos ficcionalizados para proteger a confiden
    t7: { pt: "Elementos ficcionalizados para proteger a confidencialidade: nome do produto interno e detalhes do sistema. O processo, as decisões e os resultados são reais.", en: "Fictionalized elements to protect confidentiality: internal product name and system details. The process, decisions, and results are real." },
    // Retenção (76% para 79%)
    t8: { pt: "Retenção (76% para 79%)", en: "Retention (76% to 79%)" },
    // acessos mensais no fluxo
    t9: { pt: "acessos mensais no fluxo", en: "monthly accesses" },
    // 01 — A fala que revelou tudo
    t10: { pt: "01 — A fala que revelou tudo", en: "01 — The quote that revealed everything" },
    // Avaliação real de CSAT — chatbot de crédito PJ
    t11: { pt: "Avaliação real de CSAT — chatbot de crédito PJ", en: "Real CSAT review — business credit chatbot" },
    // acessos mensais no fluxo de crédito
    t12: { pt: "acessos mensais no fluxo de crédito", en: "monthly accesses in the credit flow" },
    // CSAT médio. Maior ofensor do produto.
    t13: { pt: "CSAT médio. Maior ofensor do produto.", en: "Average CSAT. Biggest product offender." },
    // O chatbot de crédito PJ era o maior ofensor de CSA
    t14: { pt: "O chatbot de crédito PJ era o maior ofensor de CSAT da Stone. Mais de 3 mil clientes por mês acessavam o fluxo e saíam sem entender se tinham crédito disponível. O problema não era técnico. Era de conteúdo.", en: "The business credit chatbot was Stone's biggest CSAT offender. More than 3,000 customers per month accessed the flow and left without understanding if they had credit available. The problem wasn't technical. It was content." },
    // 02 — O que os dados escondiam
    t15: { pt: "02 — O que os dados escondiam", en: "02 — What the data was hiding" },
    // Os números mostravam sintomas. As conversas mostra
    t16: { pt: "Os números mostravam sintomas. As conversas mostravam a causa.", en: "The numbers showed symptoms. The conversations showed the cause." },
    // Li cada conversa para entender o que estava aconte
    t17: { pt: "Li cada conversa para entender o que estava acontecendo de verdade. Encontrei três padrões que não apareciam nos tickets de suporte como problema de conteúdo.", en: "I read each conversation to understand what was really happening. I found three patterns that didn't appear in support tickets as content problems." },
    // O cliente perguntava se tinha crédito. O bot expli
    t18: { pt: "O cliente perguntava <strong>se tinha crédito</strong>. O bot explicava como o sistema de análise funcionava.", en: "The customer asked <strong>if they had credit</strong>. The bot explained how the analysis system worked." },
    // Clientes que recebiam e-mail com oferta chegavam a
    t19: { pt: "Clientes que recebiam e-mail com oferta chegavam ao chatbot e <strong>a oferta já tinha expirado</strong>, sem nenhuma explicação.", en: "Customers who received an offer email arrived at the chatbot and <strong>the offer had already expired</strong>, with no explanation." },
    // Clientes que buscavam crédito mais de uma vez no m
    t20: { pt: "Clientes que buscavam crédito mais de uma vez no mês <strong>caíam no mesmo fluxo genérico</strong>, sem reconhecimento do contexto.", en: "Customers who searched for credit more than once in the month <strong>fell into the same generic flow</strong>, with no context recognition." },
    // Nenhum desses cenários aparecia nos tickets como p
    t21: { pt: "Nenhum desses cenários aparecia nos tickets como problema de conteúdo. Só lendo as conversas deu para enxergar.", en: "None of these scenarios appeared in tickets as content problems. Only by reading the conversations did it become visible." },
    // 03 — Antes e depois
    t22: { pt: "03 — Antes e depois", en: "03 — Before and after" },
    // A resposta tinha 4 parágrafos. A nova tinha 2 linh
    t23: { pt: "A resposta tinha 4 parágrafos. A nova tinha 2 linhas.", en: "The response had 4 paragraphs. The new one had 2 lines." },
    // A diferença não era o tamanho. Era o que vinha pri
    t24: { pt: "A diferença não era o tamanho. Era o que vinha primeiro.", en: "The difference wasn't the size. It was what came first." },
    // Antes
    t25: { pt: "Antes", en: "Before" },
    // Sabemos que o empréstimo pode fazer a diferença no
    t26: { pt: "Sabemos que o empréstimo pode fazer a diferença no seu negócio e é por isso que estamos fazendo melhorias. Por enquanto, apenas uma pequena base de clientes tem o produto disponível.", en: "We know that a loan can make a difference for your business and that's why we're making improvements. For now, only a small customer base has the product available." },
    // A gente não consegue te garantir uma oferta no mom
    t27: { pt: "A gente não consegue te garantir uma oferta no momento, mas temos algumas dicas que podem te ajudar a aumentar suas chances de passar pela análise de crédito...", en: "We can't guarantee you an offer right now, but we have some tips that can help you increase your chances of passing the credit analysis..." },
    // Depois
    t28: { pt: "Depois", en: "After" },
    // Verifiquei aqui e no momento não há crédito dispon
    t29: { pt: "Verifiquei aqui e no momento não há crédito disponível pra você.", en: "I checked here and at the moment there's no credit available for you." },
    // Assim que surgir uma oferta, a gente te avisa!
    t30: { pt: "Assim que surgir uma oferta, a gente te avisa!", en: "As soon as an offer appears, we'll let you know!" },
    // 04 — O processo
    t31: { pt: "04 — O processo", en: "04 — The process" },
    // Análise de conversas e dados
    t32: { pt: "Análise de conversas e dados", en: "Conversation and data analysis" },
    // Leitura de conversas reais, análise de CSAT respon
    t33: { pt: "Leitura de conversas reais, análise de CSAT respondidos, mapeamento de comportamento conversacional e desk research com o time de produto.", en: "Reading real conversations, analyzing CSAT responses, mapping conversational behavior, and desk research with the product team." },
    // Identificação de cenários não mapeados
    t34: { pt: "Identificação de cenários não mapeados", en: "Identifying unmapped scenarios" },
    // Dois cenários recorrentes que o fluxo não tratava:
    t35: { pt: "Dois cenários recorrentes que o fluxo não tratava: busca repetida no mesmo mês e oferta expirada após e-mail. Esses cenários geravam frustração sem nenhuma resposta adequada.", en: "Two recurring scenarios the flow didn't handle: repeated search in the same month and expired offer after email. These scenarios caused frustration with no adequate response." },
    // Redesign dos fluxos
    t36: { pt: "Redesign dos fluxos", en: "Flow redesign" },
    // Reescrita aplicando hierarquia da informação, redu
    t37: { pt: "Reescrita aplicando hierarquia da informação, redução de carga cognitiva, quebra de blocos semânticos e criação de jornadas específicas para os cenários identificados.", en: "Rewriting applying information hierarchy, reducing cognitive load, breaking semantic blocks and creating specific journeys for the identified scenarios." },
    // Monitoramento e iteração
    t38: { pt: "Monitoramento e iteração", en: "Monitoring and iteration" },
    // Acompanhamento de KPIs após a implementação: CSAT,
    t39: { pt: "Acompanhamento de KPIs após a implementação: CSAT, retenção, volume de transbordo. Para validar o impacto e identificar novas oportunidades de melhoria.", en: "Tracking KPIs after implementation: CSAT, retention, overflow volume. To validate impact and identify new improvement opportunities." },
    // 05 — O resultado
    t40: { pt: "05 — O resultado", en: "05 — The result" },
    // CSAT (66% para 76%)
    t41: { pt: "CSAT (66% para 76%)", en: "CSAT (66% to 76%)" },
    // Retenção (76% para 79%)
    t42: { pt: "Retenção (76% para 79%)", en: "Retention (76% to 79%)" },
    // O que os clientes passaram a dizer nas avaliações:
    t43: { pt: "O que os clientes passaram a dizer nas avaliações:", en: "What customers started saying in reviews:" },
    // Dados mostram onde dói. Conversas mostram por quê.
    t44: { pt: "Dados mostram onde dói. Conversas mostram por quê. Às vezes o problema que você foi resolver não é o problema real. É só o mais visível.", en: "Data shows where it hurts. Conversations show why. Sometimes the problem you went to solve isn't the real problem. It's just the most visible one." },
    // 06 — Decisões de design
    t45: { pt: "06 — Decisões de design", en: "06 — Design decisions" },
    // Por que hierarquia de informação resolve um proble
    t46: { pt: "Por que hierarquia de informação resolve um problema de CSAT?", en: "Why does information hierarchy solve a CSAT problem?" },
    // O cliente não estava insatisfeito com o produto. E
    t47: { pt: "O cliente não estava insatisfeito com o produto. Estava insatisfeito com o esforço de entender a resposta. Quando a informação mais importante vem primeiro e a mensagem cabe em uma tela sem rolagem, o esforço cognitivo cai. Menos esforço significa melhor percepção da experiência.", en: "The customer wasn't dissatisfied with the product. They were dissatisfied with the effort to understand the response. When the most important information comes first and the message fits on screen without scrolling, cognitive effort drops. Less effort means better experience perception." },
    // O que diferencia mapear cenários de simplesmente r
    t48: { pt: "O que diferencia mapear cenários de simplesmente reescrever textos?", en: "What distinguishes mapping scenarios from simply rewriting text?" },
    // Reescrever sem mapear cenários resolve os sintomas
    t49: { pt: "Reescrever sem mapear cenários resolve os sintomas, não as causas. Os dois cenários que identifiquei não estavam nos tickets como problema de conteúdo. Estavam escondidos como clientes insatisfeitos. Precisei ler as conversas para enxergar isso.", en: "Rewriting without mapping scenarios solves symptoms, not causes. The two scenarios I identified weren't in tickets as content problems. They were hidden as dissatisfied customers. I needed to read the conversations to see that." },
    // ← Todos os cases
    t50: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 04 — Niara
  case04: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Niara: a alma de um assistente virtual
    t5: { pt: "Niara: a alma de um assistente virtual", en: "Niara: the soul of a virtual assistant" },
    // Como desenvolvemos a personalidade de um chatbot d
    t6: { pt: "Como desenvolvemos a personalidade de um chatbot de RH ouvindo mais de 600 colaboradores e o que aconteceu com os números depois que a Niara ganhou vida.", en: "How we developed the personality of an HR chatbot by listening to more than 600 employees — and what happened to the numbers after Niara came to life." },
    // ← Todos os cases
    t7: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 05 — Assistente de Gerentes
  case05: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Assistente de Gerentes PF: do zero ao segundo come
    t5: { pt: "Assistente de Gerentes PF: do zero ao segundo começo", en: "Branch Manager Assistant: from scratch to a second start" },
    // Como projetar um chatbot para gerentes de agência 
    t6: { pt: "Como projetar um chatbot para gerentes de agência que precisam de resposta em segundos, com o cliente sentado na sua frente.", en: "How to design a chatbot for branch managers who need answers in seconds, with the customer sitting right in front of them." },
    // ← Todos os cases
    t7: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 06 — Seguros Content First
  case06: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Seguros: Content First do zero
    t5: { pt: "Seguros: Content First do zero", en: "Insurance: Content First from scratch" },
    // Como projetamos um assistente virtual de seguros a
    t6: { pt: "Como projetamos um assistente virtual de seguros antes de qualquer tela, definindo intenção, resultado esperado e encenando a conversa antes de escrever uma linha de fluxo.", en: "How we designed an insurance virtual assistant before any screen, defining intention, expected outcome, and enacting the conversation before writing a single flow line." },
    // ← Todos os cases
    t7: { pt: "← Todos os cases", en: "← All cases" },
  },

  // ── CASE 07 — Cartao de Credito
  case07: {
    // Pular para o conteúdo
    t0: { pt: "Pular para o conteúdo", en: "Skip to content" },
    // Sobre
    t1: { pt: "Sobre", en: "About" },
    // Cases
    t2: { pt: "Cases", en: "Work" },
    // Processo
    t3: { pt: "Processo", en: "Process" },
    // Contato
    t4: { pt: "Contato", en: "Contact" },
    // Cartão de Crédito: a pergunta que não foi respondi
    t5: { pt: "Cartão de Crédito: a pergunta que não foi respondida", en: "Credit Card: the question that wasn't answered" },
    // Uma análise de como um chatbot bem-intencionado fa
    t6: { pt: "Uma análise de como um chatbot bem-intencionado falhou em responder à pergunta mais simples do cliente e três caminhos possíveis para resolver, com e sem integração de API.", en: "An analysis of how a well-intentioned chatbot failed to answer the customer's simplest question — and three possible paths to fix it, with and without API integration." },
    // Estudo de caso — análise e proposta, não implement
    t7: { pt: "Estudo de caso — análise e proposta, não implementação", en: "Case study — analysis and proposal, not implementation" },
    // ← Todos os cases
    t8: { pt: "← Todos os cases", en: "← All cases" },
  },

};