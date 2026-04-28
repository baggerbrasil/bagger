// Dados das máquinas por categoria (com suas categorias) 
        // Dados COMPLETOS das máquinas da Bagger Brasil - 100% elétricas 
const categorias = { 
    minicarregadeira: { 
        titulo: "Mini Carregadeiras Elétricas", 
        descricao: "Compactas, ágeis e 100% elétricas. Ideais para movimentação de materiais em espaços reduzidos, diversos segmentos operacionais. Zero emissões e baixíssimo ruído.", 
        heroImage: "uploads/escavadeira-1.jpg", 
        maquinas: [ 
            { 
                id: 101,
                modelo: "ME30D",
                nome: "Mini Escavadeira Elétrica ME30D",
                descricao: "Mini escavadeira elétrica compacta com bateria de lítio, ideal para operações em espaços reduzidos com baixo ruído e zero emissões.",
                imagem: "uploads/escavadeira-4.jpg",
                imagens: [
                    "uploads/escavadeira-1.jpg",
                    "uploads/escavadeira-2.jpg",
                    "uploads/escavadeira-3.jpg"
                ],
                categoria_nome: "Mini Escavadeira",
                carga_nominal: "Caçamba 0.065 m³",
                peso_total: "2950 kg",
                dimensoes: "4200 x 1550 x 2480 mm",
                altura_elevacao: "4396 mm",
                autonomia: "5 - 7 horas",
                tempo_carga: "4 horas",

                bateria: "Bateria de lítio 72V 540Ah",
                tipo_bateria: "Lítio",
                capacidade_bateria: "540 Ah",
                tensao_nominal: "72 V",

                pneu: "Esteiras de aço",
                potencia_motor: "9 kW (pico 18 kW)",
                velocidade: "0 – 2.2 – 3.1 km/h",

                preco: "Sob consulta",
                badge: "Escavadeira Compacta",
                personalizavel: "Cor e logotipo personalizáveis",

                especificacoes: [
                    { label: "Modelo", valor: "ME30D" },
                    { label: "Peso da Máquina", valor: "2.950 kg" },
                    { label: "Capacidade da Caçamba", valor: "0.065 m³" }
                ],

    especificacoes: [
        { label: "Modelo", valor: "ME30D" },
        { label: "Peso da Máquina", valor: "2.950 kg" },
        { label: "Capacidade da Caçamba", valor: "0.065 m³" },
        { label: "Bateria", valor: "Lítio 72V 540Ah" },
        { label: "Autonomia", valor: "5 - 7 horas" },
        { label: "Tempo de Carga", valor: "4 horas" },
        { label: "Potência do Motor", valor: "9 kW (pico 18 kW)" },
        { label: "Comprimento Total", valor: "4200 mm" },
        { label: "Altura Total", valor: "2480 mm" },
        { label: "Largura", valor: "1550 mm (ajustável 900–1300)" },
        { label: "Largura da Esteira", valor: "300 mm" },
        { label: "Velocidade de Deslocamento", valor: "0-2.2-3.1 km/h" }
    ],

    recursos: [
        "Bateria de lítio 72V de alta capacidade",
        "Autonomia de até 7 horas",
        "Carregamento rápido em 4 horas",
        "Sistema hidráulico com sensor de carga",
        "Motor de deslocamento com redutor de duas velocidades",
        "Esteiras de aço reforçadas",
        "Função de giro lateral do braço",
        "Design sem cauda (no-tail swing)",
        "Cabine confortável estilo luxury cockpit",
        "Controle de temperatura e dissipação de calor",
        "Três circuitos hidráulicos auxiliares",
             ]
        }
    ]
},
           
     
    dumper: { 
        titulo: "Dumpers Elétricos", 
        descricao: "Transporte eficiente de materiais com zero emissões. Robustez, economia e silêncio para diferentes cenários operacionais.", 
        heroImage: "uploads/dumpereletrico.png", 
        maquinas: [ 
            { 
                id: 201, 
                modelo: "EWD16", 
                nome: "Dumper Elétrico EWD16", 
                descricao: "Dumper sobre rodas 100% elétrico para transporte de materiais a granel. Ideal para movimentação de materiais em diversos segmentos.", 
                imagem: "uploads/dumpereletrico.png", 
                imagens: [ 
                    "uploads/dumpereletrico.png"
                    
                ], 
                categoria_nome: "Dumper Elétrico", 
                carga_nominal: "1600 kg", 
                peso_total: "1980 kg", 
                dimensoes: "3325 x 1260 x 2270 mm", 
                autonomia: "8 horas", 
                tempo_carga: "6 horas", 
                bateria: "12 unidades 3-EVF-200", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "14,4 kW", 
                tensao_nominal: "72 V", 
                pneu: "26 x 12.00-12", 
                potencia_motor: "14,4 kW", 
                velocidade: "0-18 km/h", 
                capacidade_cacamba: "1,2 m³", 
                preco: "Sob consulta", 
                badge: "Transporte Pesado", 
                especificacoes: [ 
                    { label: "Modelo", valor: "EWD16" }, 
                    { label: "Carga Nominal", valor: "1.600 kg" }, 
                    { label: "Peso Total", valor: "1.980 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "3325 x 1260 x 2270 mm" }, 
                    { label: "Capacidade Caçamba", valor: "1,2 m³" }, 
                    { label: "Autonomia", valor: "8 horas" }, 
                    { label: "Tempo de Carga", valor: "6 horas" }, 
                    { label: "Bateria", valor: "12 unid. 3-EVF-200" }, 
                    { label: "Tipo de Bateria", valor: "Chumbo-ácido s/ manutenção" }, 
                    { label: "Capacidade da Bateria", valor: "14,4 kW" }, 
                    { label: "Tensão Nominal", valor: "72 V" }, 
                    { label: "Pneus", valor: "26 x 12.00-12" } 
                ], 
                recursos: [ 
                    "Capacidade de carga de 1,6 toneladas", 
                    "Operação silenciosa para áreas urbanas", 
                    "Zero emissões - sustentável", 
                    "Caçamba basculante automática", 
                    "Ideal para transporte em curtas distâncias", 
                    "Baixo custo operacional", 
                    "Manutenção simplificada" 
                ] 
            },
      /*      {
                id: 202,
                modelo: "2T-2W",
                nome: "Dumper Elétrico sobre Rodas 2T-2W",
                descricao: "Dumper elétrico sobre rodas para transporte de materiais a granel, com operação silenciosa e zero emissões.",
                imagem: "uploads/escavadeira.jpeg",
                imagens: [
                    "uploads/escavadeira.jpeg",
                    "uploads/escavadeira-6.jpg",
                    "uploads/escavadeira-5.jpg"
                ],
                categoria_nome: "Dumper Elétrico",
                carga_nominal: "1600 kg",
                peso_total: "1980 kg",
                dimensoes: "3325 x 1260 x 2270 mm",
                autonomia: "8 horas",
                tempo_carga: "6 horas",
                bateria: "12 unidades 3-EVF-200",
                tipo_bateria: "Chumbo-ácido sem manutenção",
                capacidade_bateria: "14,4 kW",
                tensao_nominal: "72 V",
                pneu: "26 x 12.00-12",
                potencia_motor: "14,4 kW",
                velocidade: "0-18 km/h",
                preco: "Sob consulta",
                badge: "Novo",
                especificacoes: [
                    { label: "Modelo", valor: "2T-2W" },
                    { label: "Carga Nominal", valor: "1.600 kg" },
                    { label: "Peso Total", valor: "1.980 kg" },
                    { label: "Dimensões (CxLxA)", valor: "3325 x 1260 x 2270 mm" },
                    { label: "Autonomia", valor: "8 horas" },
                    { label: "Tempo de Carga", valor: "6 horas" },
                    { label: "Bateria", valor: "12 unid. 3-EVF-200" },
                    { label: "Tipo de Bateria", valor: "Chumbo-ácido s/ manutenção" },
                    { label: "Capacidade da Bateria", valor: "14,4 kW" },
                    { label: "Tensão Nominal", valor: "72 V" },
                    { label: "Pneus", valor: "26 x 12.00-12" }
                ],
                recursos: [
                    "Dumper elétrico sobre rodas",
                    "Capacidade nominal de 1,6 toneladas",
                    "Operação contínua de até 8 horas",
                    "Tempo de recarga de 6 horas",
                    "Sistema com bateria chumbo-ácido sem manutenção",
                    "Zero emissões e baixo ruído para ambientes sensíveis"
                ]
            } 
        ] 
    }, 

    
     
    empilhadeira: { 
        titulo: "Empilhadeiras Elétricas", 
        descricao: "Movimentação vertical com eficiência e precisão. Perfeitas para armazéns, centros de distribuição e indústrias.", 
        heroImage: "https://images.unsplash.com/photo-1581092335871-4c7f65b0e606?q=80&w=2070", 
        maquinas: [ 
            { 
                id: 301, 
                modelo: "EFL12", 
                nome: "Empilhadeira Elétrica EFL12", 
                descricao: "Empilhadeira elétrica para operações de armazenagem e logística. Compacta, ágil e eficiente para movimentação vertical.", 
                imagem: "uploads/empilhadeira-efl12.jpg", 
                imagens: [ 
                    "uploads/empilhadeira-efl12-1.jpg", 
                    "uploads/empilhadeira-efl12-2.jpg" 
                ], 
                categoria_nome: "Empilhadeira Elétrica", 
                carga_nominal: "1200 kg", 
                peso_total: "2115 kg", 
                dimensoes: "3800 x 1260 x 2270 mm", 
                altura_elevacao: "3050 mm", 
                autonomia: "8 horas", 
                tempo_carga: "6 horas", 
                bateria: "12 unidades 3-EVF-200", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "14,4 kW", 
                tensao_nominal: "72 V", 
                pneu: "26 x 12.00-12", 
                potencia_motor: "14,4 kW", 
                velocidade: "0-15 km/h", 
                preco: "R$ 259.000,00", 
                badge: "Logística", 
                especificacoes: [ 
                    { label: "Modelo", valor: "EFL12" }, 
                    { label: "Capacidade de Carga", valor: "1.200 kg" }, 
                    { label: "Peso Total", valor: "2.115 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "3800 x 1260 x 2270 mm" }, 
                    { label: "Altura de Elevação", valor: "3.050 mm" }, 
                    { label: "Autonomia", valor: "8 horas" }, 
                    { label: "Tempo de Carga", valor: "6 horas" }, 
                    { label: "Bateria", valor: "12 unid. 3-EVF-200" }, 
                    { label: "Capacidade da Bateria", valor: "14,4 kW" }, 
                    { label: "Tensão Nominal", valor: "72 V" } 
                ], 
                recursos: [ 
                    "Elevação de até 3 metros", 
                    "Operação limpa para ambientes fechados", 
                    "Controles precisos para paletização", 
                    "Zero emissões - seguro para operadores", 
                    "Mastro de visão ampla", 
                    "Bateria de longa duração", 
                    "Ideal para armazéns e CD's" 
                ] 
            }, 
            { 
                id: 302, 
                modelo: "ETL1200", 
                nome: "Empilhadeira Elétrica ETL1200", 
                descricao: "Empilhadeira de alta capacidade para operações pesadas. Ideal para indústrias, portos e grandes centros logísticos.", 
                imagem: "uploads/empilhadeira-etl1200.jpg", 
                imagens: [ 
                    "uploads/empilhadeira-etl1200-1.jpg", 
                    "uploads/empilhadeira-etl1200-2.jpg" 
                ], 
                categoria_nome: "Empilhadeira Elétrica", 
                carga_nominal: "2500 kg", 
                peso_total: "3465 kg / 3765 kg", 
                dimensoes: "4500 x 1580 x 2700 mm", 
                altura_elevacao: "4060 mm", 
                autonomia: "6 horas", 
                tempo_carga: "7.5 horas", 
                bateria: "8 baterias TEV12-265", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "25,4 kWh", 
                tensao_nominal: "96 V", 
                pneu: "31 x 15,5-15", 
                potencia_motor: "25,4 kW", 
                velocidade: "0-18 km/h", 
                preco: "R$ 385.000,00", 
                badge: "Alta Capacidade", 
                especificacoes: [ 
                    { label: "Modelo", valor: "ETL1200" }, 
                    { label: "Capacidade de Carga", valor: "2.500 kg" }, 
                    { label: "Peso Total", valor: "3.465 - 3.765 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "4500 x 1580 x 2700 mm" }, 
                    { label: "Altura de Elevação", valor: "4.060 mm" }, 
                    { label: "Autonomia", valor: "6 horas" }, 
                    { label: "Tempo de Carga", valor: "7,5 horas" }, 
                    { label: "Bateria", valor: "8 unid. TEV12-265" }, 
                    { label: "Capacidade da Bateria", valor: "25,4 kWh" }, 
                    { label: "Tensão Nominal", valor: "96 V" }, 
                    { label: "Pneus", valor: "31 x 15,5-15" } 
                ], 
                recursos: [ 
                    "Capacidade de carga de 2,5 toneladas", 
                    "Elevação de até 4 metros", 
                    "Ideal para operações portuárias", 
                    "Estrutura reforçada para trabalho pesado", 
                    "Sistema de estabilidade avançado", 
                    "Bateria de alta capacidade 25,4 kWh", 
                    "Controles ergonômicos" 
                ] 
            } 
        ] 
    }, 
     
    pacarregadeira: { 
        titulo: "Pás Carregadeiras Elétricas", 
        descricao: "Potência e produtividade para carregamento de materiais. Versatilidade para diferentes aplicações com zero emissões.", 
        heroImage: "https://images.unsplash.com/photo-1565043666747-69f6641db530?q=80&w=2070", 
        maquinas: [ 
            { 
                id: 401, 
                modelo: "E612", 
                nome: "Carregadeira Telescópica Elétrica E612", 
                descricao: "Carregadeira telescópica elétrica com braço articulado para alcance superior. Ideal para múltiplas funções em um único equipamento.", 
                imagem: "uploads/carregadeira-e612.jpg", 
                imagens: [ 
                    "uploads/carregadeira-e612-1.jpg", 
                    "uploads/carregadeira-e612-2.jpg" 
                ], 
                categoria_nome: "Carregadeira Telescópica", 
                carga_nominal: "1200 kg", 
                peso_total: "3500 kg / 3800 kg", 
                dimensoes: "44880 x 1730 x 2510 mm", 
                altura_elevacao: "3044 - 3720 mm", 
                autonomia: "6 horas", 
                tempo_carga: "6.5 horas", 
                bateria: "8 unidades TEV12-265", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "25,4 kW", 
                tensao_nominal: "96 V", 
                pneu: "31 x 15,5-15", 
                potencia_motor: "25,4 kW", 
                velocidade: "0-20 km/h", 
                preco: "R$ 415.000,00", 
                badge: "Telescópica", 
                especificacoes: [ 
                    { label: "Modelo", valor: "E612" }, 
                    { label: "Carga Nominal", valor: "1.200 kg" }, 
                    { label: "Peso Total", valor: "3.500 - 3.800 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "44880 x 1730 x 2510 mm" }, 
                    { label: "Altura de Elevação", valor: "3.044 - 3.720 mm" }, 
                    { label: "Autonomia", valor: "6 horas" }, 
                    { label: "Tempo de Carga", valor: "6,5 horas" }, 
                    { label: "Bateria", valor: "8 unid. TEV12-265" }, 
                    { label: "Capacidade da Bateria", valor: "25,4 kW" }, 
                    { label: "Tensão Nominal", valor: "96 V" }, 
                    { label: "Pneus", valor: "31 x 15,5-15" } 
                ], 
                recursos: [ 
                    "Braço telescópico para maior alcance", 
                    "Versatilidade com múltiplos implementos", 
                    "Elevação de até 3,7 metros", 
                    "Ideal para diferentes aplicações", 
                    "Controle hidráulico de precisão", 
                    "Bateria 96V com 25,4 kWh", 
                    "Estrutura robusta para trabalho pesado" 
                ] 
            }, 
            { 
                id: 402, 
                modelo: "E615", 
                nome: "Pá Carregadeira Elétrica E615", 
                descricao: "Pá carregadeira elétrica de grande porte para operações de alto volume. Máxima produtividade com sustentabilidade.", 
                imagem: "uploads/pacarregadeira-e615.jpg", 
                imagens: [ 
                    "uploads/pacarregadeira-e615-1.jpg", 
                    "uploads/pacarregadeira-e615-2.jpg" 
                ], 
                categoria_nome: "Pá Carregadeira", 
                carga_nominal: "1500 kg", 
                peso_total: "4750 kg", 
                dimensoes: "5360 x 1970 x 2720 mm", 
                altura_elevacao: "3270 mm", 
                autonomia: "6 horas", 
                tempo_carga: "8 horas", 
                bateria: "20 unidades TEV12-180", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "45 kW", 
                tensao_nominal: "120 V", 
                pneu: "15.5/60-18", 
                potencia_motor: "45 kW", 
                velocidade: "0-22 km/h", 
                preco: "R$ 525.000,00", 
                badge: "Alta Potência", 
                especificacoes: [ 
                    { label: "Modelo", valor: "E615" }, 
                    { label: "Carga Nominal", valor: "1.500 kg" }, 
                    { label: "Peso Total", valor: "4.750 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "5360 x 1970 x 2720 mm" }, 
                    { label: "Altura de Elevação", valor: "3.270 mm" }, 
                    { label: "Autonomia", valor: "6 horas" }, 
                    { label: "Tempo de Carga", valor: "8 horas" }, 
                    { label: "Bateria", valor: "20 unid. TEV12-180" }, 
                    { label: "Capacidade da Bateria", valor: "45 kW" }, 
                    { label: "Tensão Nominal", valor: "120 V" }, 
                    { label: "Pneus", valor: "15.5/60-18" } 
                ], 
                recursos: [ 
                    "Potência de 45 kW para alto desempenho", 
                    "Tensão nominal de 120 V", 
                    "Capacidade de carga de 1,5 toneladas", 
                    "Ideal para operações de alta demanda", 
                    "Estrutura super-reforçada", 
                    "Concha de alta capacidade", 
                    "Sistema de recuperação de energia" 
                ] 
            }, 
            { 
                id: 403, 
                modelo: "PC1200", 
                nome: "Pá Carregadeira Elétrica 1200kg", 
                descricao: "Pá carregadeira elétrica versátil para operações gerais. Equilíbrio perfeito entre potência e eficiência.", 
                imagem: "uploads/pacarregadeira-1200kg.jpg", 
                imagens: [ 
                    "uploads/pacarregadeira-1200kg-1.jpg", 
                    "uploads/pacarregadeira-1200kg-2.jpg" 
                ], 
                categoria_nome: "Pá Carregadeira", 
                carga_nominal: "1200 kg", 
                peso_total: "2920 kg", 
                dimensoes: "4885 x 1730 x 2550 mm", 
                autonomia: "6 horas", 
                tempo_carga: "6 horas", 
                bateria: "8 baterias TEV12-265", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "25,4 kWh", 
                tensao_nominal: "96 V", 
                pneu: "31 x 15,5-15", 
                potencia_motor: "25,4 kW", 
                velocidade: "0-18 km/h", 
                preco: "R$ 345.000,00", 
                badge: "Versátil", 
                especificacoes: [ 
                    { label: "Modelo", valor: "PC1200" }, 
                    { label: "Carga Nominal", valor: "1.200 kg" }, 
                    { label: "Peso Total", valor: "2.920 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "4885 x 1730 x 2550 mm" }, 
                    { label: "Autonomia", valor: "6 horas" }, 
                    { label: "Tempo de Carga", valor: "6 horas" }, 
                    { label: "Bateria", valor: "8 unid. TEV12-265" }, 
                    { label: "Capacidade da Bateria", valor: "25,4 kWh" }, 
                    { label: "Tensão Nominal", valor: "96 V" }, 
                    { label: "Pneus", valor: "31 x 15,5-15" } 
                ], 
                recursos: [ 
                    "Bateria de 25,4 kWh", 
                    "Tensão nominal 96V", 
                    "Peso total de 2.920 kg", 
                    "Ideal para diferentes frentes de operação", 
                    "Ótima relação custo-benefício", 
                    "Operação silenciosa", 
                    "Manutenção simplificada" 
                ] 
            } 
        ] 
    }, 
     
    carregadeira: { 
        titulo: "Carregadeiras Elétricas", 
        descricao: "Soluções completas para movimentação e carregamento de materiais. Eficiência energética e alta produtividade.", 
        heroImage: "https://images.unsplash.com/photo-1577471488278-16eec37c6c38?q=80&w=2070", 
        maquinas: [ 
            { 
                id: 501, 
                modelo: "ETL600", 
                nome: "Carregadeira Telescópica Elétrica ETL600", 
                descricao: "Carregadeira telescópica compacta para operações que exigem alcance e versatilidade. Perfeita para múltiplas aplicações.", 
                imagem: "uploads/carregadeira-etl600.jpg", 
                imagens: [ 
                    "uploads/carregadeira-etl600-1.jpg", 
                    "uploads/carregadeira-etl600-2.jpg" 
                ], 
                categoria_nome: "Carregadeira Telescópica", 
                carga_nominal: "600 kg", 
                peso_total: "2170 kg", 
                dimensoes: "4290 x 1260 x 2270 mm", 
                altura_elevacao: "2618 - 3099 mm", 
                autonomia: "8 horas", 
                tempo_carga: "6 horas", 
                bateria: "12 unidades 3-EVF-200", 
                tipo_bateria: "Chumbo-ácido sem manutenção", 
                capacidade_bateria: "14,4 kW", 
                tensao_nominal: "72 V", 
                pneu: "26 x 12.00-12", 
                potencia_motor: "14,4 kW", 
                velocidade: "0-16 km/h", 
                preco: "R$ 295.000,00", 
                badge: "Compacta Telescópica", 
                especificacoes: [ 
                    { label: "Modelo", valor: "ETL600" }, 
                    { label: "Carga Nominal", valor: "600 kg" }, 
                    { label: "Peso Total", valor: "2.170 kg" }, 
                    { label: "Dimensões (CxLxA)", valor: "4290 x 1260 x 2270 mm" }, 
                    { label: "Altura de Elevação", valor: "2.618 - 3.099 mm" }, 
                    { label: "Autonomia", valor: "8 horas" }, 
                    { label: "Tempo de Carga", valor: "6 horas" }, 
                    { label: "Bateria", valor: "12 unid. 3-EVF-200" }, 
                    { label: "Capacidade da Bateria", valor: "14,4 kW" }, 
                    { label: "Tensão Nominal", valor: "72 V" }, 
                    { label: "Pneus", valor: "26 x 12.00-12" } 
                ], 
                recursos: [ 
                    "Autonomia estendida de 8 horas", 
                    "Braço telescópico com 3 metros de altura", 
                    "Design compacto para espaços reduzidos", 
                    "Versatilidade com múltiplos acessórios", 
                    "Ideal para operações de precisão", 
                    "Baixo custo operacional", 
                    "Zero emissões" 
                ] 
            } 
        ] 
    } 
}; 

*/
 
        // Menu Mobile 
        const menuMobileBtn = document.getElementById('menuMobileBtn'); 
        const menuMobile = document.getElementById('menuMobile'); 
        const overlay = document.getElementById('overlay'); 
         
        menuMobileBtn.addEventListener('click', () => { 
            menuMobile.classList.toggle('active'); 
            overlay.classList.toggle('active'); 
            document.body.style.overflow = menuMobile.classList.contains('active') ? 'hidden' : 'auto'; 
             
            // Alternar ícone 
            const icon = menuMobileBtn.querySelector('i'); 
            if (menuMobile.classList.contains('active')) { 
                icon.classList.remove('fa-bars'); 
                icon.classList.add('fa-times'); 
            } else { 
                icon.classList.remove('fa-times'); 
                icon.classList.add('fa-bars'); 
            } 
        }); 
         
        overlay.addEventListener('click', () => { 
            menuMobile.classList.remove('active'); 
            overlay.classList.remove('active'); 
            document.body.style.overflow = 'auto'; 
            menuMobileBtn.querySelector('i').classList.remove('fa-times'); 
            menuMobileBtn.querySelector('i').classList.add('fa-bars'); 
        }); 
         
        // Fechar menu ao clicar em um link 
        menuMobile.querySelectorAll('a').forEach(link => { 
            link.addEventListener('click', () => { 
                menuMobile.classList.remove('active'); 
                overlay.classList.remove('active'); 
                document.body.style.overflow = 'auto'; 
                menuMobileBtn.querySelector('i').classList.remove('fa-times'); 
                menuMobileBtn.querySelector('i').classList.add('fa-bars'); 
            }); 
        }); 
         
        // Categoria atual (padrão: miniescavadeiraeletrica) 
        let categoriaAtual = 'minicarregadeira'; 
         
        // Carregar máquinas da categoria 
        function carregarMaquinasCategoria(categoria) { 
            categoriaAtual = categoria; 
            const categoriaData = categorias[categoria]; 
             
            if (!categoriaData) { 
                console.error(`Categoria ${categoria} não encontrada`); 
                return; 
            } 

            // Garantir estado de listagem ao trocar de categoria
            document.getElementById('heroCategoria').style.display = 'block';
            document.getElementById('maquinas').style.display = 'block';
            document.getElementById('detalhesMaquina').style.display = 'none';
             
            // Atualizar breadcrumb 
            document.getElementById('breadcrumbCurrent').textContent = categoriaData.titulo; 
             
            // Atualizar hero 
            document.getElementById('categoriaTitulo').textContent = categoriaData.titulo; 
            document.getElementById('categoriaDescricao').textContent = categoriaData.descricao; 
            document.getElementById('heroCategoria').style.backgroundImage = `linear-gradient(rgba(10, 61, 98, 0.88), rgba(10, 61, 98, 0.92)), url('${categoriaData.heroImage}')`; 
             
            // Atualizar lista 
            document.getElementById('listaTitulo').textContent = categoriaData.titulo; 
            document.getElementById('listaDescricao').textContent = `Selecione uma máquina para ver especificações técnicas detalhadas, fotos em alta resolução e recursos exclusivos.`; 
             
            // Atualizar botões de categoria 
            document.querySelectorAll('.categoria-btn').forEach(btn => { 
                btn.classList.remove('active'); 
                if (btn.getAttribute('data-categoria') === categoria) { 
                    btn.classList.add('active'); 
                } 
            }); 
             
            // Carregar grid de máquinas 
            const maquinasGrid = document.getElementById('maquinasGrid'); 
            maquinasGrid.innerHTML = ''; 
             
            if (categoriaData.maquinas && categoriaData.maquinas.length > 0) { 
                categoriaData.maquinas.forEach(maquina => { 
                    const maquinaCard = document.createElement('div'); 
                    maquinaCard.className = 'maquina-card fade-in'; 
                    maquinaCard.setAttribute('data-id', maquina.id); 
                     
                    maquinaCard.innerHTML = ` 
                        ${maquina.badge ? `<div class="maquina-card-badge ${maquina.badge.includes('Econômica') ? 'laranja' : ''}">${maquina.badge}</div>` : ''} 
                        <div class="maquina-img"> 
                            <img src="${maquina.imagem}" alt="${maquina.nome}" loading="lazy"> 
                        </div> 
                        <div class="maquina-info"> 
                            <span class="maquina-categoria">${categoriaData.titulo}</span> 
                            <h3>${maquina.nome}</h3> 
                            <p class="maquina-desc">${maquina.descricao}</p> 
                            <div class="maquina-especs"> 
                                <div class="espec-item"> 
                                    <div class="espec-valor">${maquina.potencia}</div> 
                                    <div class="espec-label">Potência</div> 
                                </div> 
                                <div class="espec-item"> 
                                    <div class="espec-valor">${maquina.autonomia}</div> 
                                    <div class="espec-label">Autonomia</div> 
                                </div> 
                                <div class="espec-item"> 
                                    <div class="espec-valor">${maquina.capacidade || maquina.profundidade || maquina.volume}</div> 
                                    <div class="espec-label">${maquina.capacidade ? 'Capacidade' : maquina.profundidade ? 'Profundidade' : 'Volume'}</div> 
                                </div> 
                            </div> 
                            <button class="btn btn-primary" style="width: 100%; text-align: center;" data-maquina-id="${maquina.id}"> 
                                <i class="fas fa-search"></i> Ver Detalhes 
                            </button> 
                        </div> 
                    `; 
                     
                    maquinasGrid.appendChild(maquinaCard); 
                }); 
                 
                // Adicionar event listeners para os botões "Ver Detalhes" 
                document.querySelectorAll('[data-maquina-id]').forEach(btn => { 
                    btn.addEventListener('click', function() { 
                        const maquinaId = parseInt(this.getAttribute('data-maquina-id')); 
                        mostrarDetalhesMaquina(maquinaId, categoria); 
                    }); 
                }); 
            } else { 
                maquinasGrid.innerHTML = ` 
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0;"> 
                        <h3 style="color: var(--cinza-medio);">Em breve nesta categoria</h3> 
                        <p>Estamos preparando máquinas incríveis para esta categoria. Entre em contato para ser avisado quando lançarmos.</p> 
                        <a href="index.html#contato" class="btn btn-primary" style="margin-top: 20px;"> 
                            <i class="fas fa-bell"></i> Avise-me 
                        </a> 
                    </div> 
                `; 
            } 
             
            // Scroll para a lista de máquinas 
            document.getElementById('maquinas').scrollIntoView({behavior: 'smooth', block: 'start'}); 
        } 
         
        // Mostrar detalhes da máquina 
        function mostrarDetalhesMaquina(maquinaId, categoria) { 
            const categoriaData = categorias[categoria]; 
            const maquina = categoriaData.maquinas.find(m => m.id === maquinaId); 
             
            if (!maquina) return; 
             
            // Atualizar informações da máquina 
            document.getElementById('maquinaTitulo').textContent = maquina.nome; 
            document.getElementById('maquinaCategoria').textContent = categoriaData.titulo; 
            document.getElementById('maquinaDescricao').textContent = maquina.descricao; 
            document.getElementById('maquinaPreco').textContent = maquina.preco; 
             
            // Atualizar imagem principal 
            document.getElementById('mainImage').src = maquina.imagem; 
            document.getElementById('mainImage').alt = maquina.nome; 
             
            // Atualizar galeria de miniaturas 
            const galeriaMiniaturas = document.getElementById('galeriaMiniaturas'); 
            galeriaMiniaturas.innerHTML = ''; 
             
            maquina.imagens.forEach((imagem, index) => { 
                const miniatura = document.createElement('div'); 
                miniatura.className = `miniatura ${index === 0 ? 'active' : ''}`; 
                miniatura.setAttribute('data-imagem', imagem); 
                 
                miniatura.innerHTML = `<img src="${imagem}" alt="${maquina.nome} - Imagem ${index + 1}" loading="lazy">`; 
                 
                miniatura.addEventListener('click', function() { 
                    // Atualizar imagem principal 
                    document.getElementById('mainImage').src = this.getAttribute('data-imagem'); 
                     
                    // Atualizar miniaturas ativas 
                    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('active')); 
                    this.classList.add('active'); 
                }); 
                 
                galeriaMiniaturas.appendChild(miniatura); 
            }); 
             
            // Atualizar especificações 
            const especificacoesGrid = document.getElementById('especificacoesGrid'); 
            especificacoesGrid.innerHTML = ''; 
             
            maquina.especificacoes.forEach(espec => { 
                const especItem = document.createElement('div'); 
                especItem.className = 'espec-item-detalhe'; 
                 
                especItem.innerHTML = ` 
                    <div class="espec-label-detalhe">${espec.label}</div> 
                    <div class="espec-valor-detalhe">${espec.valor}</div> 
                `; 
                 
                especificacoesGrid.appendChild(especItem); 
            }); 
             
            // Atualizar recursos 
            const recursosLista = document.getElementById('recursosLista'); 
            recursosLista.innerHTML = ''; 
             
            maquina.recursos.forEach(recurso => { 
                const li = document.createElement('li'); 
                li.textContent = recurso; 
                recursosLista.appendChild(li); 
            }); 
             
            // Mostrar seção de detalhes e esconder hero/lista 
            document.getElementById('heroCategoria').style.display = 'none';
            document.getElementById('detalhesMaquina').style.display = 'block'; 
            document.getElementById('maquinas').style.display = 'none'; 
             
            // Atualizar URL (simulação) 
            window.history.pushState({categoria, maquinaId}, '', `#${categoria}/${maquinaId}`); 
             
            // Scroll para o topo 
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        } 
         
        // Voltar para a lista 
        document.getElementById('voltarLista').addEventListener('click', function() { 
            document.getElementById('detalhesMaquina').style.display = 'none'; 
            document.getElementById('heroCategoria').style.display = 'block';
            document.getElementById('maquinas').style.display = 'block'; 
             
            // Atualizar URL (simulação) 
            window.history.pushState({categoria: categoriaAtual}, '', `#${categoriaAtual}`); 
             
            document.getElementById('maquinas').scrollIntoView({behavior: 'smooth', block: 'start'}); 
        }); 
         
        // Botões de categoria 
        document.querySelectorAll('.categoria-btn').forEach(btn => { 
            btn.addEventListener('click', function(e) { 
                e.preventDefault(); 
                 
                const categoria = this.getAttribute('data-categoria'); 
                carregarMaquinasCategoria(categoria); 
            }); 
        }); 
         
        // Header scroll effect 
        window.addEventListener('scroll', function() { 
            const header = document.querySelector('header'); 
            if(window.scrollY > 100) { 
                header.classList.add('scrolled'); 
            } else { 
                header.classList.remove('scrolled'); 
            } 
        }); 
         
        // Botão "Falar com Especialista" 
        document.querySelectorAll('.btn-contato-header').forEach(btn => { 
            btn.addEventListener('click', () => { 
                window.location.href = 'index.html#contato'; 
            }); 
        }); 

        function encontrarMaquinaPorIdentificador(identificador) {
            const idNumerico = parseInt(identificador, 10);

            for (const [categoria, categoriaData] of Object.entries(categorias)) {
                const maquina = categoriaData.maquinas.find(m => {
                    if (!Number.isNaN(idNumerico) && m.id === idNumerico) {
                        return true;
                    }

                    return String(m.modelo).toLowerCase() === String(identificador).toLowerCase();
                });

                if (maquina) {
                    return { categoria, maquinaId: maquina.id };
                }
            }

            return null;
        }
         
        // Inicializar página 
        document.addEventListener('DOMContentLoaded', function() { 
            // Verificar se há categoria na URL 
            const hash = window.location.hash.substring(1); 
            const hashParts = hash.split('/'); 
            const categoriaHash = hashParts[0];
            let categoriaInicial = categorias[categoriaHash] ? categoriaHash : 'minicarregadeira';
            let maquinaInicial = hashParts.length > 1 ? encontrarMaquinaPorIdentificador(hashParts[1]) : null;

            if (!categorias[categoriaHash] && categoriaHash) {
                const maquinaDireta = encontrarMaquinaPorIdentificador(categoriaHash);

                if (maquinaDireta) {
                    categoriaInicial = maquinaDireta.categoria;
                    maquinaInicial = maquinaDireta;
                }
            }

            if (maquinaInicial && maquinaInicial.categoria !== categoriaInicial) {
                categoriaInicial = maquinaInicial.categoria;
            }
             
            carregarMaquinasCategoria(categoriaInicial); 
             
            // Se houver ID de máquina na URL, mostrar detalhes 
            if (maquinaInicial) { 
                setTimeout(() => { 
                    mostrarDetalhesMaquina(maquinaInicial.maquinaId, categoriaInicial); 
                }, 500); 
            } 
             
            // Animar elementos ao rolar 
            const observerOptions = { 
                threshold: 0.1, 
                rootMargin: '0px 0px -100px 0px' 
            }; 
             
            const observer = new IntersectionObserver((entries) => { 
                entries.forEach(entry => { 
                    if(entry.isIntersecting) { 
                        entry.target.classList.add('fade-in'); 
                    } 
                }); 
            }, observerOptions); 
             
            // Observar elementos para animação 
            document.querySelectorAll('.vantagem-card, .maquina-card').forEach(el => { 
                observer.observe(el); 
            }); 
        });
