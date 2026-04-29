/**
 * textos.js — Todos os textos editaveis do portfolio Samantha Silva
 *
 * COMO EDITAR:
 * 1. Abra este arquivo em qualquer editor de texto (VS Code, Notepad++, etc)
 * 2. Use Ctrl+F para encontrar o texto que quer mudar
 * 3. Edite o valor depois de pt: (portugues) ou en: (ingles)
 * 4. Salve e suba no GitHub em assets/textos.js substituindo o existente
 *
 * REGRAS IMPORTANTES:
 * - Nao altere as chaves (palavras antes dos dois pontos)
 * - Nao altere a estrutura do arquivo
 * - Tags HTML simples sao permitidas: <strong>, <em>, <br>
 */

const TEXTOS = {

  // ── INDEX — Pagina principal ────────────────────────────
  index: {
    // [a] Sobre
    sobre_0: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_1: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_2: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_3: { pt: "Contato", en: "Contato" },

    // [span] Disponível para novas oportunidades
    disponível_para_novas_oportunidades_4: { pt: "Disponível para novas oportunidades", en: "Disponível para novas oportunidades" },

    // [span] Designer Conversacional
    designer_conversacional_5: { pt: "Designer Conversacional", en: "Designer Conversacional" },

    // [span] IA Generativa · Fintech · 6+ anos
    ia_generativa_fintech_6_anos_6: { pt: "IA Generativa · Fintech · 6+ anos", en: "IA Generativa · Fintech · 6+ anos" },

    // [a] Ver cases
    ver_cases_7: { pt: "Ver cases", en: "Ver cases" },

    // [a] Fale comigo
    fale_comigo_8: { pt: "Fale comigo", en: "Fale comigo" },

    // [p] Onde trabalhei
    onde_trabalhei_9: { pt: "Onde trabalhei", en: "Onde trabalhei" },

    // [div] Sobre mim
    sobre_mim_10: { pt: "Sobre mim", en: "Sobre mim" },

    // [h2] Conteúdo que resolve, não só comunica.
    conteúdo_que_resolve_não_só_11: { pt: "Conteúdo que <em>resolve</em>, não só comunica.", en: "Conteúdo que <em>resolve</em>, não só comunica." },

    // [div] Habilidades
    habilidades_12: { pt: "Habilidades", en: "Habilidades" },

    // [span] Conversacional
    conversacional_13: { pt: "Conversacional", en: "Conversacional" },

    // [span] Pesquisa
    pesquisa_14: { pt: "Pesquisa", en: "Pesquisa" },

    // [span] Métricas
    métricas_15: { pt: "Métricas", en: "Métricas" },

    // [span] Ferramentas
    ferramentas_16: { pt: "Ferramentas", en: "Ferramentas" },

    // [span] Idiomas
    idiomas_17: { pt: "Idiomas", en: "Idiomas" },

    // [span] Português nativo
    português_nativo_18: { pt: "Português nativo", en: "Português nativo" },

    // [span] Inglês fluente
    inglês_fluente_19: { pt: "Inglês fluente", en: "Inglês fluente" },

    // [span] Espanhol intermediário
    espanhol_intermediário_20: { pt: "Espanhol intermediário", en: "Espanhol intermediário" },

    // [div] Cases selecionados
    cases_selecionados_21: { pt: "Cases selecionados", en: "Cases selecionados" },

    // [h2] Cada projeto começacom uma dor real.
    cada_projeto_começacom_uma_dor_22: { pt: "Cada projeto começa<br>com uma dor real.", en: "Cada projeto começa<br>com uma dor real." },

    // [a] Ver todos os cases →
    ver_todos_os_cases_23: { pt: "Ver todos os cases →", en: "Ver todos os cases →" },

    // [div] Case em destaque · Personalidade & Tom de Voz
    case_em_destaque_personalidade_tom_24: { pt: "Case em destaque · Personalidade & Tom de Voz", en: "Case em destaque · Personalidade & Tom de Voz" },

    // [h3] Niara: Criando a alma de um assistente virtual de RH
    niara_criando_a_alma_de_25: { pt: "Niara: Criando a alma de um assistente virtual de RH", en: "Niara: Criando a alma de um assistente virtual de RH" },

    // [p] +600 colaboradores ouvidos, 40h de testes de conteúdo, 
    600_colaboradores_ouvidos_40h_de_26: { pt: "+600 colaboradores ouvidos, 40h de testes de conteúdo, 24h de Design Sprint. Do zero à personalidade que mudou os números do bot.", en: "+600 colaboradores ouvidos, 40h de testes de conteúdo, 24h de Design Sprint. Do zero à personalidade que mudou os números do bot." },

    // [span] Tom de Voz
    tom_de_voz_27: { pt: "Tom de Voz", en: "Tom de Voz" },

    // [span] Persona
    persona_28: { pt: "Persona", en: "Persona" },

    // [div] volume de conversas
    volume_de_conversas_29: { pt: "volume de conversas", en: "volume de conversas" },

    // [div] share de atendimento digital
    share_de_atendimento_digital_30: { pt: "share de atendimento digital", en: "share de atendimento digital" },

    // [div] falso positivo
    falso_positivo_31: { pt: "falso positivo", en: "falso positivo" },

    // [div] acurácia
    acurácia_32: { pt: "acurácia", en: "acurácia" },

    // [h3] Assistente de Voz da Marca
    assistente_de_voz_da_marca_33: { pt: "Assistente de Voz da Marca", en: "Assistente de Voz da Marca" },

    // [p] Copiloto com IA para garantir consistência de voz em to
    copiloto_com_ia_para_garantir_34: { pt: "Copiloto com IA para garantir consistência de voz em todos os canais, adaptado por segmento e momento de jornada.", en: "Copiloto com IA para garantir consistência de voz em todos os canais, adaptado por segmento e momento de jornada." },

    // [span] Em piloto
    em_piloto_35: { pt: "Em piloto", en: "Em piloto" },

    // [div] Case 02 · Framework próprio
    case_02_framework_próprio_36: { pt: "Case 02 · Framework próprio", en: "Case 02 · Framework próprio" },

    // [h3] Bot de Content First
    bot_de_content_first_37: { pt: "Bot de Content First", en: "Bot de Content First" },

    // [p] Uma iniciativa minha para inverter o processo. Intenção
    uma_iniciativa_minha_para_inverter_38: { pt: "Uma iniciativa minha para inverter o processo. Intenção antes de canal. Prototipado e testando.", en: "Uma iniciativa minha para inverter o processo. Intenção antes de canal. Prototipado e testando." },

    // [span] Em testes
    em_testes_39: { pt: "Em testes", en: "Em testes" },

    // [h3] Redesign Conversacional: Crédito PJ
    redesign_conversacional_crédito_pj_40: { pt: "Redesign Conversacional: Crédito PJ", en: "Redesign Conversacional: Crédito PJ" },

    // [p] O maior ofensor de CSAT do produto, com mais de 3 mil a
    o_maior_ofensor_de_csat_41: { pt: "O maior ofensor de CSAT do produto, com mais de 3 mil acessos por mês. Hierarquia da informação e cenários invisíveis que mudaram tudo.", en: "O maior ofensor de CSAT do produto, com mais de 3 mil acessos por mês. Hierarquia da informação e cenários invisíveis que mudaram tudo." },

    // [div] Retenção
    retenção_42: { pt: "Retenção", en: "Retenção" },

    // [div] Case 05 · Alta pressão
    case_05_alta_pressão_43: { pt: "Case 05 · Alta pressão", en: "Case 05 · Alta pressão" },

    // [h3] Assistente de Gerentes PF: do zero ao segundo começo
    assistente_de_gerentes_pf_do_44: { pt: "Assistente de Gerentes PF: do zero ao segundo começo", en: "Assistente de Gerentes PF: do zero ao segundo começo" },

    // [p] O cliente está na frente do gerente. Cada segundo conta
    o_cliente_está_na_frente_45: { pt: "O cliente está na frente do gerente. Cada segundo conta. Projetei um assistente para funcionar exatamente nesse contexto.", en: "O cliente está na frente do gerente. Cada segundo conta. Projetei um assistente para funcionar exatamente nesse contexto." },

    // [h3] Seguros — Content First do Zero
    seguros_content_first_do_zero_46: { pt: "Seguros — Content First do Zero", en: "Seguros — Content First do Zero" },

    // [p] Novo assistente de seguros. Antes de qualquer tela, def
    novo_assistente_de_seguros_antes_47: { pt: "Novo assistente de seguros. Antes de qualquer tela, definimos intenção, resultado esperado e encenamos a conversa.", en: "Novo assistente de seguros. Antes de qualquer tela, definimos intenção, resultado esperado e encenamos a conversa." },

    // [span] Novo Bot
    novo_bot_48: { pt: "Novo Bot", en: "Novo Bot" },

    // [h3] Cartão de Crédito: a pergunta que não foi respondida
    cartão_de_crédito_a_pergunta_49: { pt: "Cartão de Crédito: a pergunta que não foi respondida", en: "Cartão de Crédito: a pergunta que não foi respondida" },

    // [p] O cliente perguntava quando chega o cartão, não qual é 
    o_cliente_perguntava_quando_chega_50: { pt: "O cliente perguntava quando chega o cartão, não qual é o prazo. Três caminhos de solução, com e sem API.", en: "O cliente perguntava quando chega o cartão, não qual é o prazo. Três caminhos de solução, com e sem API." },

    // [span] Cenários
    cenários_51: { pt: "Cenários", en: "Cenários" },

    // [a] Ver todos os cases →
    ver_todos_os_cases_52: { pt: "Ver todos os cases →", en: "Ver todos os cases →" },

    // [div] Como trabalho
    como_trabalho_53: { pt: "Como trabalho", en: "Como trabalho" },

    // [h2] Do problema real ao resultado real.
    do_problema_real_ao_resultado_54: { pt: "Do problema real ao resultado real.", en: "Do problema real ao resultado real." },

    // [div] Entendo antes de escrever
    entendo_antes_de_escrever_55: { pt: "Entendo antes de escrever", en: "Entendo antes de escrever" },

    // [div] Converso com quem usa, leio os dados, ouço o atendiment
    converso_com_quem_usa_leio_56: { pt: "Converso com quem usa, leio os dados, ouço o atendimento. A pergunta certa raramente é a primeira que aparece.", en: "Converso com quem usa, leio os dados, ouço o atendimento. A pergunta certa raramente é a primeira que aparece." },

    // [div] Mapeio o contexto
    mapeio_o_contexto_57: { pt: "Mapeio o contexto", en: "Mapeio o contexto" },

    // [div] Onde a pessoa está na jornada, o que ela já sabe, o que
    onde_a_pessoa_está_na_58: { pt: "Onde a pessoa está na jornada, o que ela já sabe, o que precisa saber. Vale para chatbot, e-mail, botão ou FAQ.", en: "Onde a pessoa está na jornada, o que ela já sabe, o que precisa saber. Vale para chatbot, e-mail, botão ou FAQ." },

    // [div] Tomo decisões intencionais
    tomo_decisões_intencionais_59: { pt: "Tomo decisões intencionais", en: "Tomo decisões intencionais" },

    // [div] Tom, hierarquia, canal, formato. Cada escolha tem uma r
    tom_hierarquia_canal_formato_cada_60: { pt: "Tom, hierarquia, canal, formato. Cada escolha tem uma razão. Nada é por instinto ou convenção.", en: "Tom, hierarquia, canal, formato. Cada escolha tem uma razão. Nada é por instinto ou convenção." },

    // [div] Meço e ajusto
    meço_e_ajusto_61: { pt: "Meço e ajusto", en: "Meço e ajusto" },

    // [div] KPIs definidos antes de publicar. Ciclos curtos. O trab
    kpis_definidos_antes_de_publicar_62: { pt: "KPIs definidos antes de publicar. Ciclos curtos. O trabalho não termina no go-live.", en: "KPIs definidos antes de publicar. Ciclos curtos. O trabalho não termina no go-live." },

    // [span] Disponível para novas oportunidades
    disponível_para_novas_oportunidades_63: { pt: "Disponível para novas oportunidades", en: "Disponível para novas oportunidades" },

    // [h2] Vamos construir algo juntos?
    vamos_construir_algo_juntos_64: { pt: "Vamos construir algo <em>juntos</em>?", en: "Vamos construir algo <em>juntos</em>?" },

    // [p] Aberta a conversas sobre oportunidades em Content Desig
    aberta_a_conversas_sobre_oportunidades_65: { pt: "Aberta a conversas sobre oportunidades em Content Design, Design Conversacional e IA Generativa — no Brasil ou internacionalmente.", en: "Aberta a conversas sobre oportunidades em Content Design, Design Conversacional e IA Generativa — no Brasil ou internacionalmente." },

    // [p] Inglês fluente · Espanhol intermediário
    inglês_fluente_espanhol_intermediário_66: { pt: "Inglês fluente · Espanhol intermediário", en: "Inglês fluente · Espanhol intermediário" },

    // [a] Ver todos os cases
    ver_todos_os_cases_67: { pt: "Ver todos os cases", en: "Ver todos os cases" },

  },

  // ── CASE 01 — Assistente de Voz da Marca ────────────────
  case01: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Assistente de Voz da Marca
    assistente_de_voz_da_marca_5: { pt: "Assistente de Voz da Marca", en: "Assistente de Voz da Marca" },

    // [p] Como criamos um copiloto com IA para garantir que qualq
    como_criamos_um_copiloto_com_6: { pt: "Como criamos um copiloto com IA para garantir que qualquer time pudesse escrever com a voz da Meridian, no canal certo, para o cliente certo, no momento certo.", en: "Como criamos um copiloto com IA para garantir que qualquer time pudesse escrever com a voz da Meridian, no canal certo, para o cliente certo, no momento certo." },

    // [div] Elementos ficcionalizados para proteger a confidenciali
    elementos_ficcionalizados_para_proteger_a_7: { pt: "Elementos ficcionalizados para proteger a confidencialidade: nome da empresa (Meridian Investimentos), nomes de segmentos e registros de comunicação. O processo, as decisões e os resultados são reais.", en: "Elementos ficcionalizados para proteger a confidencialidade: nome da empresa (Meridian Investimentos), nomes de segmentos e registros de comunicação. O processo, as decisões e os resultados são reais." },

    // [span] Em piloto
    em_piloto_8: { pt: "Em piloto", en: "Em piloto" },

    // [p] A Meridian atende três segmentos de clientes com perfis
    a_meridian_atende_três_segmentos_9: { pt: "A Meridian atende três segmentos de clientes com perfis, vocabulários e estados mentais muito diferentes. Todos os times de produto escreviam copy para esses segmentos sem uma referência consolidada de voz. O resultado eram inconsistências entre canais, entre segmentos e entre times.", en: "A Meridian atende três segmentos de clientes com perfis, vocabulários e estados mentais muito diferentes. Todos os times de produto escreviam copy para esses segmentos sem uma referência consolidada de voz. O resultado eram inconsistências entre canais, entre segmentos e entre times." },

    // [p] Um mesmo estado de erro podia soar protocolar em um can
    um_mesmo_estado_de_erro_10: { pt: "Um mesmo estado de erro podia soar protocolar em um canal e informal em outro. O time de Content não conseguia revisar tudo.", en: "Um mesmo estado de erro podia soar protocolar em um canal e informal em outro. O time de Content não conseguia revisar tudo." },

    // [div] Sintoma visível
    sintoma_visível_11: { pt: "Sintoma visível", en: "Sintoma visível" },

    // [p] Designers e PMs escreviam copy sem referência consolida
    designers_e_pms_escreviam_copy_12: { pt: "Designers e PMs escreviam copy sem referência consolidada. O mesmo erro soava protocolar em um canal e informal em outro.", en: "Designers e PMs escreviam copy sem referência consolidada. O mesmo erro soava protocolar em um canal e informal em outro." },

    // [div] Raiz do problema
    raiz_do_problema_13: { pt: "Raiz do problema", en: "Raiz do problema" },

    // [p] Não existia uma arquitetura de voz operacionalizável. A
    não_existia_uma_arquitetura_de_14: { pt: "Não existia uma arquitetura de voz operacionalizável. Algo que um Designer sem especialização em conteúdo pudesse consultar e aplicar sozinho.", en: "Não existia uma arquitetura de voz operacionalizável. Algo que um Designer sem especialização em conteúdo pudesse consultar e aplicar sozinho." },

    // [p] A solução não era só um guia de tom de voz. Guias exist
    a_solução_não_era_só_15: { pt: "A solução não era só um guia de tom de voz. Guias existem e ficam guardados sem ninguém ler. A solução era um assistente que incorporasse a voz e devolvesse respostas, não documentos.", en: "A solução não era só um guia de tom de voz. Guias existem e ficam guardados sem ninguém ler. A solução era um assistente que incorporasse a voz e devolvesse respostas, não documentos." },

    // [h2] 3 registros de comunicação
    3_registros_de_comunicação_16: { pt: "3 registros de comunicação", en: "3 registros de comunicação" },

    // [p] Trabalhei em co-design com o líder de Design e outra Co
    trabalhei_em_codesign_com_o_17: { pt: "Trabalhei em co-design com o líder de Design e outra Content Designer para estruturar os registros. Cada um calibrado para um estado mental diferente do cliente.", en: "Trabalhei em co-design com o líder de Design e outra Content Designer para estruturar os registros. Cada um calibrado para um estado mental diferente do cliente." },

    // [h2] Calibração por segmento
    calibração_por_segmento_18: { pt: "Calibração por segmento", en: "Calibração por segmento" },

    // [div] Em piloto com times de Design
    em_piloto_com_times_de_19: { pt: "Em piloto com times de Design", en: "Em piloto com times de Design" },

    // [p] O assistente está sendo testado com Designers que não t
    o_assistente_está_sendo_testado_20: { pt: "O assistente está sendo testado com Designers que não têm Content dedicado no squad. Estamos medindo: adoção pelos times, qualidade de copy antes e depois, redução de ciclos de revisão. Próximos passos: expansão para novos canais e jornadas de produto.", en: "O assistente está sendo testado com Designers que não têm Content dedicado no squad. Estamos medindo: adoção pelos times, qualidade de copy antes e depois, redução de ciclos de revisão. Próximos passos: expansão para novos canais e jornadas de produto." },

    // [a] ← Todos os cases
    todos_os_cases_21: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 02 — Bot de Content First ──────────────────────
  case02: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Bot de Content First
    bot_de_content_first_5: { pt: "Bot de Content First", en: "Bot de Content First" },

    // [p] Como inverti o processo de criação de comunicações colo
    como_inverti_o_processo_de_6: { pt: "Como inverti o processo de criação de comunicações colocando intenção antes de canal e transformei esse raciocínio em um assistente que qualquer pessoa do time consegue usar.", en: "Como inverti o processo de criação de comunicações colocando intenção antes de canal e transformei esse raciocínio em um assistente que qualquer pessoa do time consegue usar." },

    // [span] Prototipado · Em testes
    prototipado_em_testes_7: { pt: "Prototipado · Em testes", en: "Prototipado · Em testes" },

    // [a] ← Todos os cases
    todos_os_cases_8: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 03 — Redesign Credito PJ ───────────────────────
  case03: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] A pergunta que o chatbot nunca respondeu
    a_pergunta_que_o_chatbot_5: { pt: "A pergunta que o chatbot nunca respondeu", en: "A pergunta que o chatbot nunca respondeu" },

    // [p] Como reescrever fluxos com hierarquia da informação ger
    como_reescrever_fluxos_com_hierarquia_6: { pt: "Como reescrever fluxos com hierarquia da informação gerou mais 10 pontos percentuais de CSAT e mais 3 de retenção, e o que os dados não estavam mostrando.", en: "Como reescrever fluxos com hierarquia da informação gerou mais 10 pontos percentuais de CSAT e mais 3 de retenção, e o que os dados não estavam mostrando." },

    // [div] Elementos ficcionalizados para proteger a confidenciali
    elementos_ficcionalizados_para_proteger_a_7: { pt: "Elementos ficcionalizados para proteger a confidencialidade: nome do produto interno e detalhes do sistema. O processo, as decisões e os resultados são reais.", en: "Elementos ficcionalizados para proteger a confidencialidade: nome do produto interno e detalhes do sistema. O processo, as decisões e os resultados são reais." },

    // [div] Retenção (76% para 79%)
    retenção_76_para_79_8: { pt: "Retenção (76% para 79%)", en: "Retenção (76% para 79%)" },

    // [div] acessos mensais no fluxo
    acessos_mensais_no_fluxo_9: { pt: "acessos mensais no fluxo", en: "acessos mensais no fluxo" },

    // [div] 01 — A fala que revelou tudo
    01_a_fala_que_revelou_10: { pt: "01 — A fala que revelou tudo", en: "01 — A fala que revelou tudo" },

    // [cite] Avaliação real de CSAT — chatbot de crédito PJ
    avaliação_real_de_csat_chatbot_11: { pt: "Avaliação real de CSAT — chatbot de crédito PJ", en: "Avaliação real de CSAT — chatbot de crédito PJ" },

    // [div] acessos mensais no fluxo de crédito
    acessos_mensais_no_fluxo_de_12: { pt: "acessos mensais no fluxo de crédito", en: "acessos mensais no fluxo de crédito" },

    // [div] CSAT médio. Maior ofensor do produto.
    csat_médio_maior_ofensor_do_13: { pt: "CSAT médio. Maior ofensor do produto.", en: "CSAT médio. Maior ofensor do produto." },

    // [p] O chatbot de crédito PJ era o maior ofensor de CSAT da 
    o_chatbot_de_crédito_pj_14: { pt: "O chatbot de crédito PJ era o maior ofensor de CSAT da Stone. Mais de 3 mil clientes por mês acessavam o fluxo e saíam sem entender se tinham crédito disponível. O problema não era técnico. Era de conteúdo.", en: "O chatbot de crédito PJ era o maior ofensor de CSAT da Stone. Mais de 3 mil clientes por mês acessavam o fluxo e saíam sem entender se tinham crédito disponível. O problema não era técnico. Era de conteúdo." },

    // [div] 02 — O que os dados escondiam
    02_o_que_os_dados_15: { pt: "02 — O que os dados escondiam", en: "02 — O que os dados escondiam" },

    // [h2] Os números mostravam sintomas. As conversas mostravam a
    os_números_mostravam_sintomas_as_16: { pt: "Os números mostravam sintomas. As conversas mostravam a causa.", en: "Os números mostravam sintomas. As conversas mostravam a causa." },

    // [p] Li cada conversa para entender o que estava acontecendo
    li_cada_conversa_para_entender_17: { pt: "Li cada conversa para entender o que estava acontecendo de verdade. Encontrei três padrões que não apareciam nos tickets de suporte como problema de conteúdo.", en: "Li cada conversa para entender o que estava acontecendo de verdade. Encontrei três padrões que não apareciam nos tickets de suporte como problema de conteúdo." },

    // [div] O cliente perguntava se tinha crédito. O bot explicava 
    o_cliente_perguntava_se_tinha_18: { pt: "O cliente perguntava <strong>se tinha crédito</strong>. O bot explicava como o sistema de análise funcionava.", en: "O cliente perguntava <strong>se tinha crédito</strong>. O bot explicava como o sistema de análise funcionava." },

    // [div] Clientes que recebiam e-mail com oferta chegavam ao cha
    clientes_que_recebiam_email_com_19: { pt: "Clientes que recebiam e-mail com oferta chegavam ao chatbot e <strong>a oferta já tinha expirado</strong>, sem nenhuma explicação.", en: "Clientes que recebiam e-mail com oferta chegavam ao chatbot e <strong>a oferta já tinha expirado</strong>, sem nenhuma explicação." },

    // [div] Clientes que buscavam crédito mais de uma vez no mês ca
    clientes_que_buscavam_crédito_mais_20: { pt: "Clientes que buscavam crédito mais de uma vez no mês <strong>caíam no mesmo fluxo genérico</strong>, sem reconhecimento do contexto.", en: "Clientes que buscavam crédito mais de uma vez no mês <strong>caíam no mesmo fluxo genérico</strong>, sem reconhecimento do contexto." },

    // [div] Nenhum desses cenários aparecia nos tickets como proble
    nenhum_desses_cenários_aparecia_nos_21: { pt: "Nenhum desses cenários aparecia nos tickets como problema de conteúdo. Só lendo as conversas deu para enxergar.", en: "Nenhum desses cenários aparecia nos tickets como problema de conteúdo. Só lendo as conversas deu para enxergar." },

    // [div] 03 — Antes e depois
    03_antes_e_depois_22: { pt: "03 — Antes e depois", en: "03 — Antes e depois" },

    // [h2] A resposta tinha 4 parágrafos. A nova tinha 2 linhas.
    a_resposta_tinha_4_parágrafos_23: { pt: "A resposta tinha 4 parágrafos. A nova tinha 2 linhas.", en: "A resposta tinha 4 parágrafos. A nova tinha 2 linhas." },

    // [p] A diferença não era o tamanho. Era o que vinha primeiro
    a_diferença_não_era_o_24: { pt: "A diferença não era o tamanho. Era o que vinha primeiro.", en: "A diferença não era o tamanho. Era o que vinha primeiro." },

    // [span] Antes
    antes_25: { pt: "Antes", en: "Antes" },

    // [p] Sabemos que o empréstimo pode fazer a diferença no seu 
    sabemos_que_o_empréstimo_pode_26: { pt: "Sabemos que o empréstimo pode fazer a diferença no seu negócio e é por isso que estamos fazendo melhorias. Por enquanto, apenas uma pequena base de clientes tem o produto disponível.", en: "Sabemos que o empréstimo pode fazer a diferença no seu negócio e é por isso que estamos fazendo melhorias. Por enquanto, apenas uma pequena base de clientes tem o produto disponível." },

    // [p] A gente não consegue te garantir uma oferta no momento,
    a_gente_não_consegue_te_27: { pt: "A gente não consegue te garantir uma oferta no momento, mas temos algumas dicas que podem te ajudar a aumentar suas chances de passar pela análise de crédito...", en: "A gente não consegue te garantir uma oferta no momento, mas temos algumas dicas que podem te ajudar a aumentar suas chances de passar pela análise de crédito..." },

    // [span] Depois
    depois_28: { pt: "Depois", en: "Depois" },

    // [p] Verifiquei aqui e no momento não há crédito disponível 
    verifiquei_aqui_e_no_momento_29: { pt: "Verifiquei aqui e no momento não há crédito disponível pra você.", en: "Verifiquei aqui e no momento não há crédito disponível pra você." },

    // [p] Assim que surgir uma oferta, a gente te avisa!
    assim_que_surgir_uma_oferta_30: { pt: "Assim que surgir uma oferta, a gente te avisa!", en: "Assim que surgir uma oferta, a gente te avisa!" },

    // [div] 04 — O processo
    04_o_processo_31: { pt: "04 — O processo", en: "04 — O processo" },

    // [div] Análise de conversas e dados
    análise_de_conversas_e_dados_32: { pt: "Análise de conversas e dados", en: "Análise de conversas e dados" },

    // [div] Leitura de conversas reais, análise de CSAT respondidos
    leitura_de_conversas_reais_análise_33: { pt: "Leitura de conversas reais, análise de CSAT respondidos, mapeamento de comportamento conversacional e desk research com o time de produto.", en: "Leitura de conversas reais, análise de CSAT respondidos, mapeamento de comportamento conversacional e desk research com o time de produto." },

    // [div] Identificação de cenários não mapeados
    identificação_de_cenários_não_mapeados_34: { pt: "Identificação de cenários não mapeados", en: "Identificação de cenários não mapeados" },

    // [div] Dois cenários recorrentes que o fluxo não tratava: busc
    dois_cenários_recorrentes_que_o_35: { pt: "Dois cenários recorrentes que o fluxo não tratava: busca repetida no mesmo mês e oferta expirada após e-mail. Esses cenários geravam frustração sem nenhuma resposta adequada.", en: "Dois cenários recorrentes que o fluxo não tratava: busca repetida no mesmo mês e oferta expirada após e-mail. Esses cenários geravam frustração sem nenhuma resposta adequada." },

    // [div] Redesign dos fluxos
    redesign_dos_fluxos_36: { pt: "Redesign dos fluxos", en: "Redesign dos fluxos" },

    // [div] Reescrita aplicando hierarquia da informação, redução d
    reescrita_aplicando_hierarquia_da_informação_37: { pt: "Reescrita aplicando hierarquia da informação, redução de carga cognitiva, quebra de blocos semânticos e criação de jornadas específicas para os cenários identificados.", en: "Reescrita aplicando hierarquia da informação, redução de carga cognitiva, quebra de blocos semânticos e criação de jornadas específicas para os cenários identificados." },

    // [div] Monitoramento e iteração
    monitoramento_e_iteração_38: { pt: "Monitoramento e iteração", en: "Monitoramento e iteração" },

    // [div] Acompanhamento de KPIs após a implementação: CSAT, rete
    acompanhamento_de_kpis_após_a_39: { pt: "Acompanhamento de KPIs após a implementação: CSAT, retenção, volume de transbordo. Para validar o impacto e identificar novas oportunidades de melhoria.", en: "Acompanhamento de KPIs após a implementação: CSAT, retenção, volume de transbordo. Para validar o impacto e identificar novas oportunidades de melhoria." },

    // [div] 05 — O resultado
    05_o_resultado_40: { pt: "05 — O resultado", en: "05 — O resultado" },

    // [div] CSAT (66% para 76%)
    csat_66_para_76_41: { pt: "CSAT (66% para 76%)", en: "CSAT (66% para 76%)" },

    // [div] Retenção (76% para 79%)
    retenção_76_para_79_42: { pt: "Retenção (76% para 79%)", en: "Retenção (76% para 79%)" },

    // [p] O que os clientes passaram a dizer nas avaliações:
    o_que_os_clientes_passaram_43: { pt: "O que os clientes passaram a dizer nas avaliações:", en: "O que os clientes passaram a dizer nas avaliações:" },

    // [p] Dados mostram onde dói. Conversas mostram por quê. Às v
    dados_mostram_onde_dói_conversas_44: { pt: "Dados mostram onde dói. Conversas mostram por quê. Às vezes o problema que você foi resolver não é o problema real. É só o mais visível.", en: "Dados mostram onde dói. Conversas mostram por quê. Às vezes o problema que você foi resolver não é o problema real. É só o mais visível." },

    // [div] 06 — Decisões de design
    06_decisões_de_design_45: { pt: "06 — Decisões de design", en: "06 — Decisões de design" },

    // [div] Por que hierarquia de informação resolve um problema de
    por_que_hierarquia_de_informação_46: { pt: "Por que hierarquia de informação resolve um problema de CSAT?", en: "Por que hierarquia de informação resolve um problema de CSAT?" },

    // [div] O cliente não estava insatisfeito com o produto. Estava
    o_cliente_não_estava_insatisfeito_47: { pt: "O cliente não estava insatisfeito com o produto. Estava insatisfeito com o esforço de entender a resposta. Quando a informação mais importante vem primeiro e a mensagem cabe em uma tela sem rolagem, o esforço cognitivo cai. Menos esforço significa melhor percepção da experiência.", en: "O cliente não estava insatisfeito com o produto. Estava insatisfeito com o esforço de entender a resposta. Quando a informação mais importante vem primeiro e a mensagem cabe em uma tela sem rolagem, o esforço cognitivo cai. Menos esforço significa melhor percepção da experiência." },

    // [div] O que diferencia mapear cenários de simplesmente reescr
    o_que_diferencia_mapear_cenários_48: { pt: "O que diferencia mapear cenários de simplesmente reescrever textos?", en: "O que diferencia mapear cenários de simplesmente reescrever textos?" },

    // [div] Reescrever sem mapear cenários resolve os sintomas, não
    reescrever_sem_mapear_cenários_resolve_49: { pt: "Reescrever sem mapear cenários resolve os sintomas, não as causas. Os dois cenários que identifiquei não estavam nos tickets como problema de conteúdo. Estavam escondidos como clientes insatisfeitos. Precisei ler as conversas para enxergar isso.", en: "Reescrever sem mapear cenários resolve os sintomas, não as causas. Os dois cenários que identifiquei não estavam nos tickets como problema de conteúdo. Estavam escondidos como clientes insatisfeitos. Precisei ler as conversas para enxergar isso." },

    // [a] ← Todos os cases
    todos_os_cases_50: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 04 — Niara ─────────────────────────────────────
  case04: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Niara: a alma de um assistente virtual
    niara_a_alma_de_um_5: { pt: "Niara: a alma de um assistente virtual", en: "Niara: a alma de um assistente virtual" },

    // [p] Como desenvolvemos a personalidade de um chatbot de RH 
    como_desenvolvemos_a_personalidade_de_6: { pt: "Como desenvolvemos a personalidade de um chatbot de RH ouvindo mais de 600 colaboradores e o que aconteceu com os números depois que a Niara ganhou vida.", en: "Como desenvolvemos a personalidade de um chatbot de RH ouvindo mais de 600 colaboradores e o que aconteceu com os números depois que a Niara ganhou vida." },

    // [a] ← Todos os cases
    todos_os_cases_7: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 05 — Assistente de Gerentes ────────────────────
  case05: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Assistente de Gerentes PF: do zero ao segundo começo
    assistente_de_gerentes_pf_do_5: { pt: "Assistente de Gerentes PF: do zero ao segundo começo", en: "Assistente de Gerentes PF: do zero ao segundo começo" },

    // [p] Como projetar um chatbot para gerentes de agência que p
    como_projetar_um_chatbot_para_6: { pt: "Como projetar um chatbot para gerentes de agência que precisam de resposta em segundos, com o cliente sentado na sua frente.", en: "Como projetar um chatbot para gerentes de agência que precisam de resposta em segundos, com o cliente sentado na sua frente." },

    // [a] ← Todos os cases
    todos_os_cases_7: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 06 — Seguros Content First ─────────────────────
  case06: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Seguros: Content First do zero
    seguros_content_first_do_zero_5: { pt: "Seguros: Content First do zero", en: "Seguros: Content First do zero" },

    // [p] Como projetamos um assistente virtual de seguros antes 
    como_projetamos_um_assistente_virtual_6: { pt: "Como projetamos um assistente virtual de seguros antes de qualquer tela, definindo intenção, resultado esperado e encenando a conversa antes de escrever uma linha de fluxo.", en: "Como projetamos um assistente virtual de seguros antes de qualquer tela, definindo intenção, resultado esperado e encenando a conversa antes de escrever uma linha de fluxo." },

    // [a] ← Todos os cases
    todos_os_cases_7: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

  // ── CASE 07 — Cartao de Credito ─────────────────────────
  case07: {
    // [a] Pular para o conteúdo
    pular_para_o_conteúdo_0: { pt: "Pular para o conteúdo", en: "Pular para o conteúdo" },

    // [a] Sobre
    sobre_1: { pt: "Sobre", en: "Sobre" },

    // [a] Cases
    cases_2: { pt: "Cases", en: "Cases" },

    // [a] Processo
    processo_3: { pt: "Processo", en: "Processo" },

    // [a] Contato
    contato_4: { pt: "Contato", en: "Contato" },

    // [h1] Cartão de Crédito: a pergunta que não foi respondida
    cartão_de_crédito_a_pergunta_5: { pt: "Cartão de Crédito: a pergunta que não foi respondida", en: "Cartão de Crédito: a pergunta que não foi respondida" },

    // [p] Uma análise de como um chatbot bem-intencionado falhou 
    uma_análise_de_como_um_6: { pt: "Uma análise de como um chatbot bem-intencionado falhou em responder à pergunta mais simples do cliente e três caminhos possíveis para resolver, com e sem integração de API.", en: "Uma análise de como um chatbot bem-intencionado falhou em responder à pergunta mais simples do cliente e três caminhos possíveis para resolver, com e sem integração de API." },

    // [span] Estudo de caso — análise e proposta, não implementação
    estudo_de_caso_análise_e_7: { pt: "Estudo de caso — análise e proposta, não implementação", en: "Estudo de caso — análise e proposta, não implementação" },

    // [a] ← Todos os cases
    todos_os_cases_8: { pt: "← Todos os cases", en: "← Todos os cases" },

  },

};
