const categorias = {
  minicarregadeira: {
    titulo: 'Mini Escavadeiras Elétricas',
    descricao:
      'Compactas, ágeis e 100% elétricas. Ideais para movimentação de materiais em espaços reduzidos, com zero emissões e baixo ruído.',
    heroImage: 'uploads/escavadeira-1.jpg',
    maquinas: [
      {
        id: 101,
        modelo: 'ME30D',
        nome: 'Mini Escavadeira Elétrica ME30D',
        descricao:
          'Mini escavadeira elétrica compacta com bateria de lítio, ideal para operações em espaços reduzidos.',
        imagem: 'uploads/escavadeira-4.jpg',
        imagens: ['uploads/escavadeira-1.jpg', 'uploads/escavadeira-2.jpg', 'uploads/escavadeira-3.jpg'],
        categoria_nome: 'Mini Escavadeira',
        carga_nominal: '0.065 m³',
        peso_total: '2.950 kg',
        autonomia: '5-7 h',
        preco: 'Sob consulta',
        badge: 'Escavadeira Compacta',
        especificacoes: [
          { label: 'Modelo', valor: 'ME30D' },
          { label: 'Peso da Máquina', valor: '2.950 kg' },
          { label: 'Capacidade da Caçamba', valor: '0.065 m³' },
          { label: 'Bateria', valor: 'Lítio 72V 540Ah' },
          { label: 'Autonomia', valor: '5 - 7 horas' },
          { label: 'Tempo de Carga', valor: '4 horas' },
          { label: 'Potência do Motor', valor: '9 kW (pico 18 kW)' }
        ],
        recursos: [
          'Bateria de lítio de alta capacidade',
          'Autonomia de até 7 horas',
          'Carregamento rápido',
          'Operação silenciosa',
          'Zero emissões locais',
          'Esteiras reforçadas para terreno irregular'
        ]
      },
      {
        id: 102,
        modelo: 'ME15D',
        nome: 'Mini Escavadeira Elétrica ME15D',
        descricao:
          'Versão mais compacta da linha elétrica, muito similar à ME30D, com dimensões reduzidas e opção de cabine como acessório.',
        imagem: 'uploads/DSC09914.jpg',
        imagens: ['uploads/DSC09914.jpg', 'uploads/DSC09887.jpg'],
        categoria_nome: 'Mini Escavadeira',
        carga_nominal: '0.025 m³',
        peso_total: '1.250 kg',
        autonomia: '5-7 h',
        preco: 'Sob consulta',
        badge: 'Compacta com Cabine Opcional',
        especificacoes: [
          { label: 'Modelo', valor: 'ME15D' },
          { label: 'Peso da Máquina', valor: '1.250 kg' },
          { label: 'Capacidade da Caçamba', valor: '0.025 m³' },
          { label: 'Bateria', valor: 'Lítio 72V 300Ah' },
          { label: 'Autonomia', valor: '7 - 9 horas' },
          { label: 'Tempo de Carga', valor: '5 horas' },
          { label: 'Potência do Motor', valor: '5,5 kW (pico 11 kW)' },
          { label: 'Largura Total', valor: '1.000 mm' }
        ],
        recursos: [
          'Mesmo conceito elétrico da ME30D em tamanho reduzido',
          'Cabine disponível como acessório opcional',
          'Bateria de lítio 72V 300Ah',
          'Controle piloto hidráulico',
          'Rotação contínua de 13 rpm',
          'Zero emissões locais e baixa vibração'
        ]
      }
    ]
  },
  dumper: {
    titulo: 'Dumpers Elétricos',
    descricao:
      'Transporte eficiente de materiais com zero emissões. Robustez, economia e silêncio para diferentes cenários operacionais.',
    heroImage: 'uploads/dumpereletrico.png',
    maquinas: [
      {
        id: 201,
        modelo: 'EWD16',
        nome: 'Dumper Elétrico EWD16',
        descricao:
          'Dumper sobre rodas 100% elétrico para transporte de materiais a granel em obras, mineração e manutenção urbana.',
        imagem: 'uploads/dumpereletrico.png',
        imagens: ['uploads/dumpereletrico.png'],
        categoria_nome: 'Dumper Elétrico',
        carga_nominal: '1.600 kg',
        peso_total: '1.980 kg',
        autonomia: '8 h',
        preco: 'Sob consulta',
        badge: 'Transporte Pesado',
        especificacoes: [
          { label: 'Modelo', valor: 'EWD16' },
          { label: 'Carga Nominal', valor: '1.600 kg' },
          { label: 'Peso Total', valor: '1.980 kg' },
          { label: 'Dimensões (CxLxA)', valor: '3325 x 1260 x 2270 mm' },
          { label: 'Capacidade da Caçamba', valor: '1,2 m³' },
          { label: 'Autonomia', valor: '8 horas' },
          { label: 'Tempo de Carga', valor: '6 horas' }
        ],
        recursos: [
          'Capacidade de carga de 1,6 toneladas',
          'Operação silenciosa para áreas urbanas',
          'Zero emissões locais',
          'Caçamba basculante automática',
          'Baixo custo operacional',
          'Manutenção simplificada'
        ]
      },
      {
        id: 202,
        modelo: 'EFL12',
        nome: 'Empilhadeira Elétrica EFL12',
        descricao:
          'Empilhadeira elétrica robusta para movimentação de cargas com operação silenciosa e sem emissões locais.',
        imagem: 'uploads/empilhadeira.png',
        imagens: ['uploads/empilhadeira.png'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.115 kg',
        autonomia: '8 h',
        preco: 'Sob consulta',
        badge: 'Movimentação de Cargas',
        especificacoes: [
          { label: 'Modelo', valor: 'EFL12' },
          { label: 'Capacidade de Carga', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.115 kg' },
          { label: 'Dimensões (CxLxA)', valor: '3800 x 1260 x 2270 mm' },
          { label: 'Altura de Elevação', valor: '3050 mm' },
          { label: 'Autonomia', valor: '8 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '12 unidades 3-EVF-200 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '14,4 kW' },
          { label: 'Tensão Nominal', valor: '72 V' },
          { label: 'Tamanho do Pneu', valor: '26*12.00-12' }
        ],
        recursos: [
          'Elevação de carga de até 3.050 mm',
          'Bateria chumbo-ácido sem manutenção',
          'Autonomia de até 8 horas',
          'Tempo de recarga de 6 horas',
          'Operação silenciosa para ambientes internos e externos',
          'Zero emissões locais'
        ]
      },
      {
        id: 203,
        modelo: 'E612',
        nome: 'Pá Carregadeira Elétrica E612',
        descricao:
          'Pá carregadeira elétrica compacta para operações intensivas com ótimo desempenho e baixo custo operacional.',
        imagem: 'uploads/pá.png',
        imagens: ['uploads/pá.png'],
        categoria_nome: 'Pá Carregadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.920 kg',
        autonomia: '6 h',
        preco: 'Sob consulta',
        badge: 'Carregamento e Movimentação',
        especificacoes: [
          { label: 'Modelo', valor: 'E612' },
          { label: 'Carga Nominal', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.920 kg' },
          { label: 'Dimensões (CxLxA)', valor: '4885 x 1730 x 2550 mm' },
          { label: 'Tempo de Operação', valor: '6 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '8 baterias TEV12-265 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '25,4 kWh' },
          { label: 'Tensão Nominal', valor: '96 V' },
          { label: 'Tamanho do Pneu', valor: '31*15,5-15' }
        ],
        recursos: [
          'Carga nominal de 1.200 kg',
          'Conjunto elétrico de 96 V',
          'Baterias sem manutenção',
          'Autonomia operacional de 6 horas',
          'Recarga completa em 6 horas',
          'Zero emissões locais e baixo ruído'
        ]
      },
      {
        id: 204,
        modelo: 'MPGKT-16',
        nome: 'Plataforma Elevatória Articulada Elétrica MPGKT-16',
        descricao:
          'Plataforma elevatória articulada elétrica para trabalhos em altura com longo alcance horizontal e múltiplos sistemas avançados de segurança.',
        imagem: 'uploads/elevador1.png',
        imagens: ['uploadselevador1.png', 'uploads/elevador2.png','uploads/elevador3.png'],
        categoria_nome: 'Plataforma Elevatória Elétrica',
        carga_nominal: '256 kg',
        peso_total: '8.900 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Trabalho em Altura',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGKT-16' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Articulada Elétrica' },
          { label: 'Altura Máxima de Trabalho', valor: '22 m' },
          { label: 'Altura Máxima da Plataforma', valor: '20 m' },
          { label: 'Altura Máxima de Transposição', valor: '8,54 m' },
          { label: 'Alcance Máximo Horizontal', valor: '12,9 m' },
          { label: 'Largura da Plataforma', valor: '0,9 m' },
          { label: 'Comprimento da Plataforma', valor: '2,4 m' },
          { label: 'Capacidade Máxima de Carga', valor: '256 kg' },
          { label: 'Número de Ocupantes', valor: '2 a 3 pessoas' },
          { label: 'Rotação da Plataforma', valor: '160°' },
          { label: 'Rotação da Torre', valor: '355°' },
          { label: 'Dimensões Recolhida (CxLxA)', valor: '8,9 x 2,5 x 2,53 m' },
          { label: 'Distância entre Eixos', valor: '2,5 m' },
          { label: 'Distância do Solo', valor: '0,3 m' },
          { label: 'Velocidade de Deslocamento', valor: '0–6 km/h' },
          { label: 'Capacidade de Subida', valor: '45%' },
          { label: 'Inclinação Máxima em Operação', valor: '5°' },
          { label: 'Raio de Giro Externo', valor: '5,4 m' },
          { label: 'Tração e Direção', valor: '4x4' },
          { label: 'Bateria', valor: '48V / 320Ah' },
          { label: 'Tensão de Controle', valor: '12V DC' },
          { label: 'Potência do Motor Hidráulico', valor: '7 kW' },
          { label: 'Motores de Tração', valor: '2 x 3,3 kW' },
          { label: 'Unidade de Emergência', valor: '24V / 1,6 kW' },
          { label: 'Peso Total', valor: '8.900 kg' }
        ],
        recursos: [
          'Eixo direcional flutuante reforçado para maior estabilidade em terrenos irregulares',
          'Sensor de segurança por cabo com desligamento automático em caso de instabilidade',
          'Sensor de pressão na válvula principal para subida e descida mais suaves',
          'Caixa preta integrada para registro e diagnóstico de operação',
          'Cilindro oscilante da plataforma com rotação lateral de 80° para cada lado',
          'Sistema automático de nivelamento com sensores de inclinação e controle eletro-hidráulico proporcional',
          'Controle proporcional total com alertas sonoros e luminosos',
          'Travamento automático da plataforma e sistema de descida de emergência',
          'Botão de parada de emergência e sistema anti-esmagamento',
          'Indicação de falhas no painel e proteção contra inclinação excessiva',
          'Sistema de pesagem/carga e rotação da plataforma'
        ]
      },
      {
        id: 205,
        modelo: 'MPGTJ2046',
        nome: 'Plataforma Tesoura Elétrica MPGTJ2046',
        descricao:
          'Plataforma tesoura elétrica compacta para elevação em espaços internos, com acionamento silencioso e pacote completo de segurança.',
        imagem: 'uploads/escavadeira-4.jpg',
        imagens: ['uploads/escavadeira-4.jpg', 'uploads/escavadeira-1.jpg'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: '230 kg',
        peso_total: '860 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Elevação Compacta',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGTJ2046' },
          { label: 'Altura Máxima de Trabalho', valor: '5,8 m' },
          { label: 'Altura Máxima da Plataforma', valor: '3,8 m' },
          { label: 'Comprimento Total', valor: '1,44 m' },
          { label: 'Largura Total', valor: '0,79 m' },
          { label: 'Altura (Guarda-corpo Aberto)', valor: '1,86 m' },
          { label: 'Altura (Guarda-corpo Fechado)', valor: '1,46 m' },
          { label: 'Dimensão da Plataforma', valor: '1,30 x 0,68 m' },
          { label: 'Extensão da Plataforma', valor: '0,55 m' },
          { label: 'Entre-eixos', valor: '1,02 m' },
          { label: 'Distância do Solo', valor: '106 mm / 29 mm' },
          { label: 'Capacidade de Carga', valor: '230 kg' },
          { label: 'Capacidade na Extensão', valor: '113 kg' },
          { label: 'Carga Lateral Máxima', valor: '3,5 kN/m' },
          { label: 'Velocidade de Subida/Descida', valor: '3–5 min/m' },
          { label: 'Inclinação Máxima', valor: '25%' },
          { label: 'Ângulo Máximo de Subida', valor: '3°' },
          { label: 'Inclinação Permitida em Operação', valor: '1,5°' },
          { label: 'Tração', valor: 'Dianteira' },
          { label: 'Tipo de Pneu', valor: 'Pneu sólido sem marca' },
          { label: 'Medida do Pneu', valor: 'φ230 x 80 mm' },
          { label: 'Bateria', valor: '2 x 12V / 85AH' },
          { label: 'Motor de Elevação', valor: '1,2 kW' },
          { label: 'Motor de Tração', valor: '24V / 0,8 kW' },
          { label: 'Carregador', valor: '24V / 30A' },
          { label: 'Peso', valor: '860 kg' },
          { label: 'Versão Relacionada', valor: 'MPGTJ2056 (até 7,8 m de trabalho)' }
        ],
        recursos: [
          'Controle proporcional',
          'Sistema automático de freio',
          'Sistema de descida de emergência',
          'Buzina',
          'Botão de emergência',
          'Sistema de diagnóstico de falhas',
          'Proteção contra inclinação',
          'Pneus sem marca',
          'Sistema de proteção de carregamento',
          'Porta com trava automática',
          'Alarme sonoro de movimento',
          'Deslocamento em altura total',
          'Sistema elétrico de emergência',
          'Entrada para empilhadeira/transporte'
        ]
      },
      {
        id: 206,
        modelo: 'CPD20E',
        nome: 'Empilhadeira Elétrica Hopper CPD20E',
        descricao:
          'Empilhadeira contrabalançada elétrica Hopper para operação sentado, com capacidade de 2 toneladas e conjunto elétrico de alta potência.',
        imagem: 'uploads/miniempilhadeira.png',
        imagens: ['uploads/miniempilhadeira.png'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '2.000 kg',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Contrabalançada Elétrica',
        especificacoes: [
          { label: 'Fabricante', valor: 'Hopper' },
          { label: 'Modelo', valor: 'CPD20E' },
          { label: 'Tipo', valor: 'Empilhadeira Contrabalançada Elétrica' },
          { label: 'Operação', valor: 'Sentado (Seated)' },
          { label: 'Capacidade de Carga', valor: '2.000 kg' },
          { label: 'Centro de Carga', valor: '500 mm' },
          { label: 'Distância Centro Eixo até Garfo', valor: '490 mm' },
          { label: 'Entre-eixos', valor: '1.410 mm' },
          { label: 'Altura da Torre Abaixada', valor: '2.120 mm' },
          { label: 'Elevação Livre', valor: '0 mm' },
          { label: 'Altura Padrão de Elevação', valor: '3.000 mm' },
          { label: 'Altura da Torre Elevada', valor: '3.995 mm' },
          { label: 'Altura do Protetor Superior', valor: '2.180 mm' },
          { label: 'Altura do Assento', valor: '1.180 mm' },
          { label: 'Comprimento Total com Garfos', valor: '3.280 mm' },
          { label: 'Comprimento sem Garfos', valor: '2.240 mm' },
          { label: 'Largura Total', valor: '1.070 mm' },
          { label: 'Dimensão dos Garfos', valor: '40 x 122 x 1070 mm' },
          { label: 'Largura do Carro Porta-garfos', valor: '1.038 mm' },
          { label: 'Raio de Giro', valor: '2.010 mm' },
          { label: 'Tipo de Pneu', valor: 'Borracha maciça (Solid Rubber Wheel)' },
          { label: 'Pneu Dianteiro', valor: '6.50-10' },
          { label: 'Pneu Traseiro', valor: '5.00-8' },
          { label: 'Velocidade de Deslocamento', valor: '12 / 14 km/h (com carga / sem carga)' },
          { label: 'Velocidade de Elevação', valor: '280 / 420 mm/s' },
          { label: 'Velocidade de Descida', valor: '450 / 430 mm/s' },
          { label: 'Capacidade de Rampa', valor: '15 / 15%' },
          { label: 'Freio de Serviço', valor: 'Hidráulico' },
          { label: 'Freio de Estacionamento', valor: 'Mecânico' },
          { label: 'Motor de Tração AC', valor: '11 kW' },
          { label: 'Motor de Elevação DC', valor: '12 kW' },
          { label: 'Bateria', valor: '48V / 650Ah' },
          { label: 'Peso da Bateria', valor: '700 kg' },
          { label: 'Modelos Relacionados', valor: 'CPD20M (2.000 kg) / CPD25M (2.500 kg)' }
        ],
        recursos: [
          'Projeto moderno desenvolvido com tecnologia internacional',
          'Sistema elétrico com economia e regeneração de energia',
          'Controlador CURTIS importado e sistema CAN Bus',
          'Baixo custo de manutenção e compartimento de bateria de fácil acesso',
          'Operação ergonômica com melhor posicionamento dos comandos',
          'Estrutura robusta e estável para movimentação de cargas',
          'Motor AC de alta eficiência, freio hidráulico e assento de segurança',
          'Faróis LED, luz de ré, espelhos, cobertura protetora superior e buzina de ré',
          'Chave geral de emergência e display LCD com diagnóstico de falhas',
          'Tampa traseira de fácil abertura para manutenção rápida',
          'Troca lateral da bateria para facilitar manutenção e substituição',
          'Opcionais disponíveis: torre tríplex, elevação livre, bateria de lítio, side shift, cabine, rodas especiais e sistema de pesagem'
        ]
      },
      {
        id: 207,
        modelo: 'GTJZ1416',
        nome: 'Plataforma Elevatória Tesoura Elétrica Autopropelida GTJZ1416',
        descricao:
          'Plataforma elevatória tipo tesoura autopropelida com acionamento elétrico, controle proporcional total e sistemas inteligentes de segurança para trabalho em altura.',
        imagem: 'uploads/elevatorio.png',
        imagens: ['uploads/elevatorio.png'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: 'Sob consulta',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Tesoura Autopropelida',
        especificacoes: [
          { label: 'Modelo', valor: 'GTJZ1416' },
          { label: 'Nome do Produto', valor: 'Self-Propelled Scissor Lift Platform' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Tipo Tesoura Autopropelida' },
          { label: 'Acionamento', valor: 'Elétrico' },
          { label: 'Operação', valor: 'Autopropelida' },
          { label: 'Estrutura', valor: 'Plataforma elevatória tipo tesoura' },
          { label: 'Rodagem', valor: 'Rodas de borracha maciça' },
          { label: 'Proteção', valor: 'Guarda-corpo de proteção integral' },
          { label: 'Extensão', valor: 'Extensão frontal da plataforma' },
          { label: 'Controles', valor: 'Instalados na plataforma superior' },
          { label: 'Controle', valor: 'Controle proporcional total de todos os movimentos' },
          { label: 'Baterias', valor: 'Baterias chumbo-ácido de alto desempenho' },
          { label: 'Sistema Elétrico', valor: 'Chicotes elétricos automotivos e conectores industriais' },
          { label: 'Interação Homem-Máquina', valor: 'Leitura de falhas, parâmetros, monitoramento e diagnóstico em tempo real' }
        ],
        recursos: [
          'Controle proporcional total para maior precisão no posicionamento da plataforma',
          'Maior conforto operacional com sistema de controle de desempenho superior',
          'Baterias chumbo-ácido de alta qualidade para maior estabilidade operacional',
          'Chicotes elétricos automotivos e conectores industriais para maior vida útil dos componentes',
          'Projeto de baixa manutenção com estrutura reforçada e componentes de direção protegidos',
          'Sistema de proteção contra impactos e mancais especiais de alta capacidade de carga',
          'Proteção contra sobrecarga, descida de emergência e proteção contra inclinação',
          'Sistemas de segurança para trabalho em altura',
          'Sistema inteligente com leitura de falhas, exibição de parâmetros e diagnóstico de falhas',
          'Monitoramento em tempo real dos componentes',
          'Indicada para centros logísticos, galpões industriais e manutenção predial',
          'Aplicável em instalações elétricas, montagem industrial, estoques verticais, shoppings, aeroportos e construção civil'
        ]
      }
    ]
  },
  empilhadeira: {
    titulo: 'Empilhadeiras Elétricas',
    descricao:
      'Empilhadeiras elétricas para movimentação de cargas com operação limpa, silenciosa e alto desempenho em ambientes internos e externos.',
    heroImage: 'uploads/escavadeira-6.jpg',
    maquinas: [
      {
        id: 202,
        modelo: 'EFL12',
        nome: 'Empilhadeira Elétrica EFL12',
        descricao:
          'Empilhadeira elétrica robusta para movimentação de cargas com operação silenciosa e sem emissões locais.',
        imagem: 'uploads/escavadeira-6.jpg',
        imagens: ['uploads/escavadeira-6.jpg', 'uploads/escavadeira-5.jpg'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.115 kg',
        autonomia: '8 h',
        preco: 'Sob consulta',
        badge: 'Movimentação de Cargas',
        especificacoes: [
          { label: 'Modelo', valor: 'EFL12' },
          { label: 'Capacidade de Carga', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.115 kg' },
          { label: 'Dimensões (CxLxA)', valor: '3800 x 1260 x 2270 mm' },
          { label: 'Altura de Elevação', valor: '3050 mm' },
          { label: 'Autonomia', valor: '8 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '12 unidades 3-EVF-200 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '14,4 kW' },
          { label: 'Tensão Nominal', valor: '72 V' },
          { label: 'Tamanho do Pneu', valor: '26*12.00-12' }
        ],
        recursos: [
          'Elevação de carga de até 3.050 mm',
          'Bateria chumbo-ácido sem manutenção',
          'Autonomia de até 8 horas',
          'Tempo de recarga de 6 horas',
          'Operação silenciosa para ambientes internos e externos',
          'Zero emissões locais'
        ]
      },
      {
        id: 206,
        modelo: 'CPD20E',
        nome: 'Empilhadeira Elétrica Hopper CPD20E',
        descricao:
          'Empilhadeira contrabalançada elétrica Hopper para operação sentado, com capacidade de 2 toneladas e conjunto elétrico de alta potência.',
        imagem: 'uploads/escavadeira-6.jpg',
        imagens: ['uploads/escavadeira-6.jpg', 'uploads/escavadeira-5.jpg'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '2.000 kg',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Contrabalançada Elétrica',
        especificacoes: [
          { label: 'Fabricante', valor: 'Hopper' },
          { label: 'Modelo', valor: 'CPD20E' },
          { label: 'Tipo', valor: 'Empilhadeira Contrabalançada Elétrica' },
          { label: 'Operação', valor: 'Sentado (Seated)' },
          { label: 'Capacidade de Carga', valor: '2.000 kg' },
          { label: 'Centro de Carga', valor: '500 mm' },
          { label: 'Distância Centro Eixo até Garfo', valor: '490 mm' },
          { label: 'Entre-eixos', valor: '1.410 mm' },
          { label: 'Altura da Torre Abaixada', valor: '2.120 mm' },
          { label: 'Elevação Livre', valor: '0 mm' },
          { label: 'Altura Padrão de Elevação', valor: '3.000 mm' },
          { label: 'Altura da Torre Elevada', valor: '3.995 mm' },
          { label: 'Altura do Protetor Superior', valor: '2.180 mm' },
          { label: 'Altura do Assento', valor: '1.180 mm' },
          { label: 'Comprimento Total com Garfos', valor: '3.280 mm' },
          { label: 'Comprimento sem Garfos', valor: '2.240 mm' },
          { label: 'Largura Total', valor: '1.070 mm' },
          { label: 'Dimensão dos Garfos', valor: '40 x 122 x 1070 mm' },
          { label: 'Largura do Carro Porta-garfos', valor: '1.038 mm' },
          { label: 'Raio de Giro', valor: '2.010 mm' },
          { label: 'Tipo de Pneu', valor: 'Borracha maciça (Solid Rubber Wheel)' },
          { label: 'Pneu Dianteiro', valor: '6.50-10' },
          { label: 'Pneu Traseiro', valor: '5.00-8' },
          { label: 'Velocidade de Deslocamento', valor: '12 / 14 km/h (com carga / sem carga)' },
          { label: 'Velocidade de Elevação', valor: '280 / 420 mm/s' },
          { label: 'Velocidade de Descida', valor: '450 / 430 mm/s' },
          { label: 'Capacidade de Rampa', valor: '15 / 15%' },
          { label: 'Freio de Serviço', valor: 'Hidráulico' },
          { label: 'Freio de Estacionamento', valor: 'Mecânico' },
          { label: 'Motor de Tração AC', valor: '11 kW' },
          { label: 'Motor de Elevação DC', valor: '12 kW' },
          { label: 'Bateria', valor: '48V / 650Ah' },
          { label: 'Peso da Bateria', valor: '700 kg' },
          { label: 'Modelos Relacionados', valor: 'CPD20M (2.000 kg) / CPD25M (2.500 kg)' }
        ],
        recursos: [
          'Projeto moderno desenvolvido com tecnologia internacional',
          'Sistema elétrico com economia e regeneração de energia',
          'Controlador CURTIS importado e sistema CAN Bus',
          'Baixo custo de manutenção e compartimento de bateria de fácil acesso',
          'Operação ergonômica com melhor posicionamento dos comandos',
          'Estrutura robusta e estável para movimentação de cargas',
          'Motor AC de alta eficiência, freio hidráulico e assento de segurança',
          'Faróis LED, luz de ré, espelhos, cobertura protetora superior e buzina de ré',
          'Chave geral de emergência e display LCD com diagnóstico de falhas',
          'Tampa traseira de fácil abertura para manutenção rápida',
          'Troca lateral da bateria para facilitar manutenção e substituição',
          'Opcionais disponíveis: torre tríplex, elevação livre, bateria de lítio, side shift, cabine, rodas especiais e sistema de pesagem'
        ]
      }
    ]
  },
  pacarregadeira: {
    titulo: 'Pás Carregadeiras Elétricas',
    descricao:
      'Pás carregadeiras elétricas para carregamento e movimentação de materiais com baixo ruído, zero emissões locais e economia operacional.',
    heroImage: 'uploads/pá.png',
    maquinas: [
      {
        id: 203,
        modelo: 'E612',
        nome: 'Pá Carregadeira Elétrica E612',
        descricao:
          'Pá carregadeira elétrica compacta para operações intensivas com ótimo desempenho e baixo custo operacional.',
        imagem: 'uploads/carregadeirafundo.jpg',
        imagens: ['uploads/pá.png'],
        categoria_nome: 'Pá Carregadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.920 kg',
        autonomia: '6 h',
        preco: 'Sob consulta',
        badge: 'Carregamento e Movimentação',
        especificacoes: [
          { label: 'Modelo', valor: 'E612' },
          { label: 'Carga Nominal', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.920 kg' },
          { label: 'Dimensões (CxLxA)', valor: '4885 x 1730 x 2550 mm' },
          { label: 'Tempo de Operação', valor: '6 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '8 baterias TEV12-265 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '25,4 kWh' },
          { label: 'Tensão Nominal', valor: '96 V' },
          { label: 'Tamanho do Pneu', valor: '31*15,5-15' }
        ],
        recursos: [
          'Carga nominal de 1.200 kg',
          'Conjunto elétrico de 96 V',
          'Baterias sem manutenção',
          'Autonomia operacional de 6 horas',
          'Recarga completa em 6 horas',
          'Zero emissões locais e baixo ruído'
        ]
      }
    ]
  },
  plataforma: {
    titulo: 'Plataformas Elevatórias Elétricas',
    descricao:
      'Plataformas elevatórias elétricas articuladas e tipo tesoura para trabalho em altura com segurança, precisão e operação autopropelida.',
    heroImage: 'uploads/escavadeira-3.jpg',
    maquinas: [
      {
        id: 204,
        modelo: 'MPGKT-22',
        nome: 'Plataforma Elevatória Articulada Elétrica MPGKT-22',
        descricao:
          'Plataforma elevatória articulada elétrica para trabalhos em altura com longo alcance horizontal e múltiplos sistemas avançados de segurança.',
        imagem: 'uploads/escavadeira-3.jpg',
        imagens: ['uploads/escavadeira-3.jpg', 'uploads/escavadeira-2.jpg'],
        categoria_nome: 'Plataforma Elevatória Elétrica',
        carga_nominal: '256 kg',
        peso_total: '8.900 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Trabalho em Altura',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGKT-22' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Articulada Elétrica' },
          { label: 'Altura Máxima de Trabalho', valor: '22 m' },
          { label: 'Altura Máxima da Plataforma', valor: '20 m' },
          { label: 'Altura Máxima de Transposição', valor: '8,54 m' },
          { label: 'Alcance Máximo Horizontal', valor: '12,9 m' },
          { label: 'Largura da Plataforma', valor: '0,9 m' },
          { label: 'Comprimento da Plataforma', valor: '2,4 m' },
          { label: 'Capacidade Máxima de Carga', valor: '256 kg' },
          { label: 'Número de Ocupantes', valor: '2 a 3 pessoas' },
          { label: 'Rotação da Plataforma', valor: '160°' },
          { label: 'Rotação da Torre', valor: '355°' },
          { label: 'Dimensões Recolhida (CxLxA)', valor: '8,9 x 2,5 x 2,53 m' },
          { label: 'Distância entre Eixos', valor: '2,5 m' },
          { label: 'Distância do Solo', valor: '0,3 m' },
          { label: 'Velocidade de Deslocamento', valor: '0–6 km/h' },
          { label: 'Capacidade de Subida', valor: '45%' },
          { label: 'Inclinação Máxima em Operação', valor: '5°' },
          { label: 'Raio de Giro Externo', valor: '5,4 m' },
          { label: 'Tração e Direção', valor: '4x4' },
          { label: 'Bateria', valor: '48V / 320Ah' },
          { label: 'Tensão de Controle', valor: '12V DC' },
          { label: 'Potência do Motor Hidráulico', valor: '7 kW' },
          { label: 'Motores de Tração', valor: '2 x 3,3 kW' },
          { label: 'Unidade de Emergência', valor: '24V / 1,6 kW' },
          { label: 'Peso Total', valor: '8.900 kg' }
        ],
        recursos: [
          'Eixo direcional flutuante reforçado para maior estabilidade em terrenos irregulares',
          'Sensor de segurança por cabo com desligamento automático em caso de instabilidade',
          'Sensor de pressão na válvula principal para subida e descida mais suaves',
          'Caixa preta integrada para registro e diagnóstico de operação',
          'Cilindro oscilante da plataforma com rotação lateral de 80° para cada lado',
          'Sistema automático de nivelamento com sensores de inclinação e controle eletro-hidráulico proporcional',
          'Controle proporcional total com alertas sonoros e luminosos',
          'Travamento automático da plataforma e sistema de descida de emergência',
          'Botão de parada de emergência e sistema anti-esmagamento',
          'Indicação de falhas no painel e proteção contra inclinação excessiva',
          'Sistema de pesagem/carga e rotação da plataforma'
        ]
      },
      {
        id: 205,
        modelo: 'MPGTJ2046',
        nome: 'Plataforma Tesoura Elétrica MPGTJ2046',
        descricao:
          'Plataforma tesoura elétrica compacta para elevação em espaços internos, com acionamento silencioso e pacote completo de segurança.',
        imagem: 'uploads/escavadeira-4.jpg',
        imagens: ['uploads/escavadeira-4.jpg', 'uploads/escavadeira-1.jpg'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: '230 kg',
        peso_total: '860 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Elevação Compacta',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGTJ2046' },
          { label: 'Altura Máxima de Trabalho', valor: '5,8 m' },
          { label: 'Altura Máxima da Plataforma', valor: '3,8 m' },
          { label: 'Comprimento Total', valor: '1,44 m' },
          { label: 'Largura Total', valor: '0,79 m' },
          { label: 'Altura (Guarda-corpo Aberto)', valor: '1,86 m' },
          { label: 'Altura (Guarda-corpo Fechado)', valor: '1,46 m' },
          { label: 'Dimensão da Plataforma', valor: '1,30 x 0,68 m' },
          { label: 'Extensão da Plataforma', valor: '0,55 m' },
          { label: 'Entre-eixos', valor: '1,02 m' },
          { label: 'Distância do Solo', valor: '106 mm / 29 mm' },
          { label: 'Capacidade de Carga', valor: '230 kg' },
          { label: 'Capacidade na Extensão', valor: '113 kg' },
          { label: 'Carga Lateral Máxima', valor: '3,5 kN/m' },
          { label: 'Velocidade de Subida/Descida', valor: '3–5 min/m' },
          { label: 'Inclinação Máxima', valor: '25%' },
          { label: 'Ângulo Máximo de Subida', valor: '3°' },
          { label: 'Inclinação Permitida em Operação', valor: '1,5°' },
          { label: 'Tração', valor: 'Dianteira' },
          { label: 'Tipo de Pneu', valor: 'Pneu sólido sem marca' },
          { label: 'Medida do Pneu', valor: 'φ230 x 80 mm' },
          { label: 'Bateria', valor: '2 x 12V / 85AH' },
          { label: 'Motor de Elevação', valor: '1,2 kW' },
          { label: 'Motor de Tração', valor: '24V / 0,8 kW' },
          { label: 'Carregador', valor: '24V / 30A' },
          { label: 'Peso', valor: '860 kg' },
          { label: 'Versão Relacionada', valor: 'MPGTJ2056 (até 7,8 m de trabalho)' }
        ],
        recursos: [
          'Controle proporcional',
          'Sistema automático de freio',
          'Sistema de descida de emergência',
          'Buzina',
          'Botão de emergência',
          'Sistema de diagnóstico de falhas',
          'Proteção contra inclinação',
          'Pneus sem marca',
          'Sistema de proteção de carregamento',
          'Porta com trava automática',
          'Alarme sonoro de movimento',
          'Deslocamento em altura total',
          'Sistema elétrico de emergência',
          'Entrada para empilhadeira/transporte'
        ]
      },
      {
        id: 207,
        modelo: 'GTJZ1416',
        nome: 'Plataforma Elevatória Tesoura Elétrica Autopropelida GTJZ1416',
        descricao:
          'Plataforma elevatória tipo tesoura autopropelida com acionamento elétrico, controle proporcional total e sistemas inteligentes de segurança para trabalho em altura.',
        imagem: 'uploads/elevatorio.png',
        imagens: ['uploads/elevatorio.png'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: 'Sob consulta',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Tesoura Autopropelida',
        especificacoes: [
          { label: 'Modelo', valor: 'GTJZ1416' },
          { label: 'Nome do Produto', valor: 'Self-Propelled Scissor Lift Platform' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Tipo Tesoura Autopropelida' },
          { label: 'Acionamento', valor: 'Elétrico' },
          { label: 'Operação', valor: 'Autopropelida' },
          { label: 'Estrutura', valor: 'Plataforma elevatória tipo tesoura' },
          { label: 'Rodagem', valor: 'Rodas de borracha maciça' },
          { label: 'Proteção', valor: 'Guarda-corpo de proteção integral' },
          { label: 'Extensão', valor: 'Extensão frontal da plataforma' },
          { label: 'Controles', valor: 'Instalados na plataforma superior' },
          { label: 'Controle', valor: 'Controle proporcional total de todos os movimentos' },
          { label: 'Baterias', valor: 'Baterias chumbo-ácido de alto desempenho' },
          { label: 'Sistema Elétrico', valor: 'Chicotes elétricos automotivos e conectores industriais' },
          { label: 'Interação Homem-Máquina', valor: 'Leitura de falhas, parâmetros, monitoramento e diagnóstico em tempo real' }
        ],
        recursos: [
          'Controle proporcional total para maior precisão no posicionamento da plataforma',
          'Maior conforto operacional com sistema de controle de desempenho superior',
          'Baterias chumbo-ácido de alta qualidade para maior estabilidade operacional',
          'Chicotes elétricos automotivos e conectores industriais para maior vida útil dos componentes',
          'Projeto de baixa manutenção com estrutura reforçada e componentes de direção protegidos',
          'Sistema de proteção contra impactos e mancais especiais de alta capacidade de carga',
          'Proteção contra sobrecarga, descida de emergência e proteção contra inclinação',
          'Sistemas de segurança para trabalho em altura',
          'Sistema inteligente com leitura de falhas, exibição de parâmetros e diagnóstico de falhas',
          'Monitoramento em tempo real dos componentes',
          'Indicada para centros logísticos, galpões industriais e manutenção predial',
          'Aplicável em instalações elétricas, montagem industrial, estoques verticais, shoppings, aeroportos e construção civil'
        ]
      }
    ]
  },
  empilhadeira: {
    titulo: 'Empilhadeiras Elétricas',
    descricao:
      'Empilhadeiras elétricas para movimentação de cargas com operação limpa, silenciosa e alto desempenho em ambientes internos e externos.',
    heroImage: 'uploads/escavadeira-6.jpg',
    maquinas: [
      {
        id: 202,
        modelo: 'EFL12',
        nome: 'Empilhadeira Elétrica EFL12',
        descricao:
          'Empilhadeira elétrica robusta para movimentação de cargas com operação silenciosa e sem emissões locais.',
        imagem: 'uploads/escavadeira-6.jpg',
        imagens: ['uploads/escavadeira-6.jpg', 'uploads/escavadeira-5.jpg'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.115 kg',
        autonomia: '8 h',
        preco: 'Sob consulta',
        badge: 'Movimentação de Cargas',
        especificacoes: [
          { label: 'Modelo', valor: 'EFL12' },
          { label: 'Capacidade de Carga', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.115 kg' },
          { label: 'Dimensões (CxLxA)', valor: '3800 x 1260 x 2270 mm' },
          { label: 'Altura de Elevação', valor: '3050 mm' },
          { label: 'Autonomia', valor: '8 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '12 unidades 3-EVF-200 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '14,4 kW' },
          { label: 'Tensão Nominal', valor: '72 V' },
          { label: 'Tamanho do Pneu', valor: '26*12.00-12' }
        ],
        recursos: [
          'Elevação de carga de até 3.050 mm',
          'Bateria chumbo-ácido sem manutenção',
          'Autonomia de até 8 horas',
          'Tempo de recarga de 6 horas',
          'Operação silenciosa para ambientes internos e externos',
          'Zero emissões locais'
        ]
      },
      {
        id: 206,
        modelo: 'CPD20E',
        nome: 'Empilhadeira Elétrica Hopper CPD20E',
        descricao:
          'Empilhadeira contrabalançada elétrica Hopper para operação sentado, com capacidade de 2 toneladas e conjunto elétrico de alta potência.',
        imagem: 'uploads/escavadeira-6.jpg',
        imagens: ['uploads/escavadeira-6.jpg', 'uploads/escavadeira-5.jpg'],
        categoria_nome: 'Empilhadeira Elétrica',
        carga_nominal: '2.000 kg',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Contrabalançada Elétrica',
        especificacoes: [
          { label: 'Fabricante', valor: 'Hopper' },
          { label: 'Modelo', valor: 'CPD20E' },
          { label: 'Tipo', valor: 'Empilhadeira Contrabalançada Elétrica' },
          { label: 'Operação', valor: 'Sentado (Seated)' },
          { label: 'Capacidade de Carga', valor: '2.000 kg' },
          { label: 'Centro de Carga', valor: '500 mm' },
          { label: 'Distância Centro Eixo até Garfo', valor: '490 mm' },
          { label: 'Entre-eixos', valor: '1.410 mm' },
          { label: 'Altura da Torre Abaixada', valor: '2.120 mm' },
          { label: 'Elevação Livre', valor: '0 mm' },
          { label: 'Altura Padrão de Elevação', valor: '3.000 mm' },
          { label: 'Altura da Torre Elevada', valor: '3.995 mm' },
          { label: 'Altura do Protetor Superior', valor: '2.180 mm' },
          { label: 'Altura do Assento', valor: '1.180 mm' },
          { label: 'Comprimento Total com Garfos', valor: '3.280 mm' },
          { label: 'Comprimento sem Garfos', valor: '2.240 mm' },
          { label: 'Largura Total', valor: '1.070 mm' },
          { label: 'Dimensão dos Garfos', valor: '40 x 122 x 1070 mm' },
          { label: 'Largura do Carro Porta-garfos', valor: '1.038 mm' },
          { label: 'Raio de Giro', valor: '2.010 mm' },
          { label: 'Tipo de Pneu', valor: 'Borracha maciça (Solid Rubber Wheel)' },
          { label: 'Pneu Dianteiro', valor: '6.50-10' },
          { label: 'Pneu Traseiro', valor: '5.00-8' },
          { label: 'Velocidade de Deslocamento', valor: '12 / 14 km/h (com carga / sem carga)' },
          { label: 'Velocidade de Elevação', valor: '280 / 420 mm/s' },
          { label: 'Velocidade de Descida', valor: '450 / 430 mm/s' },
          { label: 'Capacidade de Rampa', valor: '15 / 15%' },
          { label: 'Freio de Serviço', valor: 'Hidráulico' },
          { label: 'Freio de Estacionamento', valor: 'Mecânico' },
          { label: 'Motor de Tração AC', valor: '11 kW' },
          { label: 'Motor de Elevação DC', valor: '12 kW' },
          { label: 'Bateria', valor: '48V / 650Ah' },
          { label: 'Peso da Bateria', valor: '700 kg' },
          { label: 'Modelos Relacionados', valor: 'CPD20M (2.000 kg) / CPD25M (2.500 kg)' }
        ],
        recursos: [
          'Projeto moderno desenvolvido com tecnologia internacional',
          'Sistema elétrico com economia e regeneração de energia',
          'Controlador CURTIS importado e sistema CAN Bus',
          'Baixo custo de manutenção e compartimento de bateria de fácil acesso',
          'Operação ergonômica com melhor posicionamento dos comandos',
          'Estrutura robusta e estável para movimentação de cargas',
          'Motor AC de alta eficiência, freio hidráulico e assento de segurança',
          'Faróis LED, luz de ré, espelhos, cobertura protetora superior e buzina de ré',
          'Chave geral de emergência e display LCD com diagnóstico de falhas',
          'Tampa traseira de fácil abertura para manutenção rápida',
          'Troca lateral da bateria para facilitar manutenção e substituição',
          'Opcionais disponíveis: torre tríplex, elevação livre, bateria de lítio, side shift, cabine, rodas especiais e sistema de pesagem'
        ]
      }
    ]
  },
  pacarregadeira: {
    titulo: 'Pás Carregadeiras Elétricas',
    descricao:
      'Pás carregadeiras elétricas para carregamento e movimentação de materiais com baixo ruído, zero emissões locais e economia operacional.',
    heroImage: 'uploads/pá.png',
    maquinas: [
      {
        id: 203,
        modelo: 'E612',
        nome: 'Pá Carregadeira Elétrica E612',
        descricao:
          'Pá carregadeira elétrica compacta para operações intensivas com ótimo desempenho e baixo custo operacional.',
        imagem: 'uploads/pá.png',
        imagens: ['uploads/pá.png', 'uploads/pá.png'],
        categoria_nome: 'Pá Carregadeira Elétrica',
        carga_nominal: '1.200 kg',
        peso_total: '2.920 kg',
        autonomia: '6 h',
        preco: 'Sob consulta',
        badge: 'Carregamento e Movimentação',
        especificacoes: [
          { label: 'Modelo', valor: 'E612' },
          { label: 'Carga Nominal', valor: '1.200 kg' },
          { label: 'Peso Total', valor: '2.920 kg' },
          { label: 'Dimensões (CxLxA)', valor: '4885 x 1730 x 2550 mm' },
          { label: 'Tempo de Operação', valor: '6 horas' },
          { label: 'Tempo de Carregamento', valor: '6 horas' },
          { label: 'Bateria', valor: '8 baterias TEV12-265 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '25,4 kWh' },
          { label: 'Tensão Nominal', valor: '96 V' },
          { label: 'Tamanho do Pneu', valor: '31*15,5-15' }
        ],
        recursos: [
          'Carga nominal de 1.200 kg',
          'Conjunto elétrico de 96 V',
          'Baterias sem manutenção',
          'Autonomia operacional de 6 horas',
          'Recarga completa em 6 horas',
          'Zero emissões locais e baixo ruído'
        ]
      },
      {
        id: 208,
        modelo: 'E615',
        nome: 'Pá Carregadeira Elétrica E615',
        descricao:
          'Pá carregadeira elétrica de maior porte para operações de alto volume, combinando produtividade, robustez e operação sem emissões locais.',
        imagem: 'uploads/carregadeirafundo.jpg',
        imagens: ['uploads/carregadeirafundo.jpg'],
        categoria_nome: 'Pá Carregadeira Elétrica',
        carga_nominal: '1.500 kg',
        peso_total: '4.750 kg',
        autonomia: '6 h',
        preco: 'Sob consulta',
        badge: 'Alta Potência',
        especificacoes: [
          { label: 'Modelo', valor: 'E615' },
          { label: 'Carga Nominal', valor: '1.500 kg' },
          { label: 'Peso Total', valor: '4.750 kg' },
          { label: 'Dimensões (CxLxA)', valor: '5360 x 1970 x 2720 mm' },
          { label: 'Altura de Elevação', valor: '3270 mm' },
          { label: 'Autonomia', valor: '6 horas' },
          { label: 'Tempo de Carregamento', valor: '8 horas' },
          { label: 'Bateria', valor: '20 unidades TEV12-180 (chumbo-ácido sem manutenção)' },
          { label: 'Capacidade da Bateria', valor: '45 kW' },
          { label: 'Tensão Nominal', valor: '120 V' },
          { label: 'Tamanho do Pneu', valor: '15.5/60-18' }
        ],
        recursos: [
          'Capacidade de carga de 1,5 toneladas',
          'Conjunto elétrico de 120 V',
          'Potência de 45 kW para alto desempenho',
          'Indicada para operações de alta demanda',
          'Estrutura reforçada para trabalho pesado',
          'Concha de alta capacidade',
          'Sistema de recuperação de energia'
        ]
      }
    ]
  },
  plataforma: {
    titulo: 'Plataformas Elevatórias Elétricas',
    descricao:
      'Plataformas elevatórias elétricas articuladas e tipo tesoura para trabalho em altura com segurança, precisão e operação autopropelida.',
    heroImage: 'uploads/escavadeira-3.jpg',
    maquinas: [
      {
        id: 204,
        modelo: 'MPGKT-22',
        nome: 'Plataforma Elevatória Articulada Elétrica MPGKT-22',
        descricao:
          'Plataforma elevatória articulada elétrica para trabalhos em altura com longo alcance horizontal e múltiplos sistemas avançados de segurança.',
        imagem: 'uploads/escavadeira-3.jpg',
        imagens: ['uploads/escavadeira-3.jpg', 'uploads/escavadeira-2.jpg'],
        categoria_nome: 'Plataforma Elevatória Elétrica',
        carga_nominal: '256 kg',
        peso_total: '8.900 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Trabalho em Altura',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGKT-22' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Articulada Elétrica' },
          { label: 'Altura Máxima de Trabalho', valor: '22 m' },
          { label: 'Altura Máxima da Plataforma', valor: '20 m' },
          { label: 'Altura Máxima de Transposição', valor: '8,54 m' },
          { label: 'Alcance Máximo Horizontal', valor: '12,9 m' },
          { label: 'Largura da Plataforma', valor: '0,9 m' },
          { label: 'Comprimento da Plataforma', valor: '2,4 m' },
          { label: 'Capacidade Máxima de Carga', valor: '256 kg' },
          { label: 'Número de Ocupantes', valor: '2 a 3 pessoas' },
          { label: 'Rotação da Plataforma', valor: '160°' },
          { label: 'Rotação da Torre', valor: '355°' },
          { label: 'Dimensões Recolhida (CxLxA)', valor: '8,9 x 2,5 x 2,53 m' },
          { label: 'Distância entre Eixos', valor: '2,5 m' },
          { label: 'Distância do Solo', valor: '0,3 m' },
          { label: 'Velocidade de Deslocamento', valor: '0–6 km/h' },
          { label: 'Capacidade de Subida', valor: '45%' },
          { label: 'Inclinação Máxima em Operação', valor: '5°' },
          { label: 'Raio de Giro Externo', valor: '5,4 m' },
          { label: 'Tração e Direção', valor: '4x4' },
          { label: 'Bateria', valor: '48V / 320Ah' },
          { label: 'Tensão de Controle', valor: '12V DC' },
          { label: 'Potência do Motor Hidráulico', valor: '7 kW' },
          { label: 'Motores de Tração', valor: '2 x 3,3 kW' },
          { label: 'Unidade de Emergência', valor: '24V / 1,6 kW' },
          { label: 'Peso Total', valor: '8.900 kg' }
        ],
        recursos: [
          'Eixo direcional flutuante reforçado para maior estabilidade em terrenos irregulares',
          'Sensor de segurança por cabo com desligamento automático em caso de instabilidade',
          'Sensor de pressão na válvula principal para subida e descida mais suaves',
          'Caixa preta integrada para registro e diagnóstico de operação',
          'Cilindro oscilante da plataforma com rotação lateral de 80° para cada lado',
          'Sistema automático de nivelamento com sensores de inclinação e controle eletro-hidráulico proporcional',
          'Controle proporcional total com alertas sonoros e luminosos',
          'Travamento automático da plataforma e sistema de descida de emergência',
          'Botão de parada de emergência e sistema anti-esmagamento',
          'Indicação de falhas no painel e proteção contra inclinação excessiva',
          'Sistema de pesagem/carga e rotação da plataforma'
        ]
      },
      {
        id: 205,
        modelo: 'MPGTJ2046',
        nome: 'Plataforma Tesoura Elétrica MPGTJ2046',
        descricao:
          'Plataforma tesoura elétrica compacta para elevação em espaços internos, com acionamento silencioso e pacote completo de segurança.',
        imagem: 'uploads/escavadeira-4.jpg',
        imagens: ['uploads/escavadeira-4.jpg', 'uploads/escavadeira-1.jpg'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: '230 kg',
        peso_total: '860 kg',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Elevação Compacta',
        especificacoes: [
          { label: 'Modelo', valor: 'MPGTJ2046' },
          { label: 'Altura Máxima de Trabalho', valor: '5,8 m' },
          { label: 'Altura Máxima da Plataforma', valor: '3,8 m' },
          { label: 'Comprimento Total', valor: '1,44 m' },
          { label: 'Largura Total', valor: '0,79 m' },
          { label: 'Altura (Guarda-corpo Aberto)', valor: '1,86 m' },
          { label: 'Altura (Guarda-corpo Fechado)', valor: '1,46 m' },
          { label: 'Dimensão da Plataforma', valor: '1,30 x 0,68 m' },
          { label: 'Extensão da Plataforma', valor: '0,55 m' },
          { label: 'Entre-eixos', valor: '1,02 m' },
          { label: 'Distância do Solo', valor: '106 mm / 29 mm' },
          { label: 'Capacidade de Carga', valor: '230 kg' },
          { label: 'Capacidade na Extensão', valor: '113 kg' },
          { label: 'Carga Lateral Máxima', valor: '3,5 kN/m' },
          { label: 'Velocidade de Subida/Descida', valor: '3–5 min/m' },
          { label: 'Inclinação Máxima', valor: '25%' },
          { label: 'Ângulo Máximo de Subida', valor: '3°' },
          { label: 'Inclinação Permitida em Operação', valor: '1,5°' },
          { label: 'Tração', valor: 'Dianteira' },
          { label: 'Tipo de Pneu', valor: 'Pneu sólido sem marca' },
          { label: 'Medida do Pneu', valor: 'φ230 x 80 mm' },
          { label: 'Bateria', valor: '2 x 12V / 85AH' },
          { label: 'Motor de Elevação', valor: '1,2 kW' },
          { label: 'Motor de Tração', valor: '24V / 0,8 kW' },
          { label: 'Carregador', valor: '24V / 30A' },
          { label: 'Peso', valor: '860 kg' },
          { label: 'Versão Relacionada', valor: 'MPGTJ2056 (até 7,8 m de trabalho)' }
        ],
        recursos: [
          'Controle proporcional',
          'Sistema automático de freio',
          'Sistema de descida de emergência',
          'Buzina',
          'Botão de emergência',
          'Sistema de diagnóstico de falhas',
          'Proteção contra inclinação',
          'Pneus sem marca',
          'Sistema de proteção de carregamento',
          'Porta com trava automática',
          'Alarme sonoro de movimento',
          'Deslocamento em altura total',
          'Sistema elétrico de emergência',
          'Entrada para empilhadeira/transporte'
        ]
      },
      {
        id: 207,
        modelo: 'GTJZ1416',
        nome: 'Plataforma Elevatória Tesoura Elétrica Autopropelida GTJZ1416',
        descricao:
          'Plataforma elevatória tipo tesoura autopropelida com acionamento elétrico, controle proporcional total e sistemas inteligentes de segurança para trabalho em altura.',
        imagem: 'uploads/escavadeira-4.jpg',
        imagens: ['uploads/escavadeira-4.jpg', 'uploads/escavadeira-1.jpg'],
        categoria_nome: 'Plataforma Tesoura Elétrica',
        carga_nominal: 'Sob consulta',
        peso_total: 'Sob consulta',
        autonomia: 'Sob consulta',
        preco: 'Sob consulta',
        badge: 'Tesoura Autopropelida',
        especificacoes: [
          { label: 'Modelo', valor: 'GTJZ1416' },
          { label: 'Nome do Produto', valor: 'Self-Propelled Scissor Lift Platform' },
          { label: 'Tipo', valor: 'Plataforma Elevatória Tipo Tesoura Autopropelida' },
          { label: 'Acionamento', valor: 'Elétrico' },
          { label: 'Operação', valor: 'Autopropelida' },
          { label: 'Estrutura', valor: 'Plataforma elevatória tipo tesoura' },
          { label: 'Rodagem', valor: 'Rodas de borracha maciça' },
          { label: 'Proteção', valor: 'Guarda-corpo de proteção integral' },
          { label: 'Extensão', valor: 'Extensão frontal da plataforma' },
          { label: 'Controles', valor: 'Instalados na plataforma superior' },
          { label: 'Controle', valor: 'Controle proporcional total de todos os movimentos' },
          { label: 'Baterias', valor: 'Baterias chumbo-ácido de alto desempenho' },
          { label: 'Sistema Elétrico', valor: 'Chicotes elétricos automotivos e conectores industriais' },
          { label: 'Interação Homem-Máquina', valor: 'Leitura de falhas, parâmetros, monitoramento e diagnóstico em tempo real' }
        ],
        recursos: [
          'Controle proporcional total para maior precisão no posicionamento da plataforma',
          'Maior conforto operacional com sistema de controle de desempenho superior',
          'Baterias chumbo-ácido de alta qualidade para maior estabilidade operacional',
          'Chicotes elétricos automotivos e conectores industriais para maior vida útil dos componentes',
          'Projeto de baixa manutenção com estrutura reforçada e componentes de direção protegidos',
          'Sistema de proteção contra impactos e mancais especiais de alta capacidade de carga',
          'Proteção contra sobrecarga, descida de emergência e proteção contra inclinação',
          'Sistemas de segurança para trabalho em altura',
          'Sistema inteligente com leitura de falhas, exibição de parâmetros e diagnóstico de falhas',
          'Monitoramento em tempo real dos componentes',
          'Indicada para centros logísticos, galpões industriais e manutenção predial',
          'Aplicável em instalações elétricas, montagem industrial, estoques verticais, shoppings, aeroportos e construção civil'
        ]
      }
    ]
  }
};

const maquinasDumper = categorias.dumper.maquinas;

categorias.empilhadeira = {
  titulo: 'Empilhadeiras Elétricas',
  descricao:
    'Empilhadeiras elétricas para movimentação de cargas com operação limpa, silenciosa e alto desempenho em ambientes internos e externos.',
  heroImage: 'uploads/escavadeira-6.jpg',
  maquinas: maquinasDumper.filter((maquina) => ['EFL12', 'CPD20E'].includes(maquina.modelo))
};

categorias.pacarregadeira = {
  titulo: 'Pás Carregadeiras Elétricas',
  descricao:
    'Pás carregadeiras elétricas para carregamento e movimentação de materiais com baixo ruído, zero emissões locais e economia operacional.',
  heroImage: 'uploads/carregadeirafundo.jpg',
  maquinas: maquinasDumper.filter((maquina) => maquina.modelo === 'E612')
};

categorias.plataforma = {
  titulo: 'Plataformas Elevatórias Elétricas',
  descricao:
    'Plataformas elevatórias elétricas articuladas e tipo tesoura para trabalho em altura com segurança, precisão e operação autopropelida.',
  heroImage: 'uploads/escavadeira-3.jpg',
  maquinas: maquinasDumper.filter((maquina) => ['MPGKT-22', 'MPGTJ2046', 'GTJZ1416'].includes(maquina.modelo))
};

categorias.dumper.maquinas = maquinasDumper.filter((maquina) => maquina.modelo === 'EWD16');

const state = {
  categoriaAtual: 'minicarregadeira',
  maquinaAtual: null
};

const els = {
  menuMobileBtn: document.getElementById('menuMobileBtn'),
  menuMobile: document.getElementById('menuMobile'),
  overlay: document.getElementById('overlay'),
  categoriasBtn: document.querySelectorAll('.categoria-btn'),
  breadcrumbCurrent: document.getElementById('breadcrumbCurrent'),
  heroCategoria: document.getElementById('heroCategoria'),
  categoriaTitulo: document.getElementById('categoriaTitulo'),
  categoriaDescricao: document.getElementById('categoriaDescricao'),
  listaTitulo: document.getElementById('listaTitulo'),
  listaDescricao: document.getElementById('listaDescricao'),
  maquinasGrid: document.getElementById('maquinasGrid'),
  detalhesMaquina: document.getElementById('detalhesMaquina'),
  maquinaTitulo: document.getElementById('maquinaTitulo'),
  maquinaCategoria: document.getElementById('maquinaCategoria'),
  maquinaDescricao: document.getElementById('maquinaDescricao'),
  maquinaPreco: document.getElementById('maquinaPreco'),
  especificacoesGrid: document.getElementById('especificacoesGrid'),
  recursosLista: document.getElementById('recursosLista'),
  mainImage: document.getElementById('mainImage'),
  galeriaMiniaturas: document.getElementById('galeriaMiniaturas'),
  voltarLista: document.getElementById('voltarLista')
};

function configurarMenuMobile() {
  if (!els.menuMobileBtn || !els.menuMobile || !els.overlay) return;

  const fecharMenu = () => {
    els.menuMobile.classList.remove('active');
    els.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  els.menuMobileBtn.addEventListener('click', () => {
    els.menuMobile.classList.toggle('active');
    els.overlay.classList.toggle('active');
    document.body.style.overflow = els.menuMobile.classList.contains('active') ? 'hidden' : 'auto';
  });

  els.overlay.addEventListener('click', fecharMenu);
  els.menuMobile.querySelectorAll('a').forEach((link) => link.addEventListener('click', fecharMenu));
}

function renderizarCards() {
  const categoria = categorias[state.categoriaAtual];
  if (!categoria || !els.maquinasGrid) return;

  els.maquinasGrid.innerHTML = categoria.maquinas
    .map(
      (m) => `
      <article class="maquina-card" data-id="${m.id}">
        <span class="maquina-card-badge">${m.badge || 'Elétrica'}</span>
        <div class="maquina-img">
          <img src="${m.imagem}" alt="${m.nome}" loading="lazy" />
        </div>
        <div class="maquina-info">
          <h3>${m.nome}</h3>
          <span class="maquina-categoria">${m.categoria_nome}</span>
          <p class="maquina-desc">${m.descricao}</p>
          <div class="maquina-especs">
            <div class="espec-item">
              <div class="espec-valor">${m.carga_nominal || '-'}</div>
              <div class="espec-label">Carga</div>
            </div>
            <div class="espec-item">
              <div class="espec-valor">${m.peso_total || '-'}</div>
              <div class="espec-label">Peso</div>
            </div>
            <div class="espec-item">
              <div class="espec-valor">${m.autonomia || '-'}</div>
              <div class="espec-label">Autonomia</div>
            </div>
          </div>
          <button class="btn btn-primary" type="button">Ver detalhes</button>
        </div>
      </article>
    `
    )
    .join('');

  els.maquinasGrid.querySelectorAll('.maquina-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = Number(card.dataset.id);
      const maquina = categoria.maquinas.find((item) => item.id === id);
      if (maquina) mostrarDetalhes(maquina);
    });
  });
}

function atualizarCabecalhoCategoria() {
  const categoria = categorias[state.categoriaAtual];
  if (!categoria) return;

  if (els.categoriaTitulo) els.categoriaTitulo.textContent = categoria.titulo;
  if (els.categoriaDescricao) els.categoriaDescricao.textContent = categoria.descricao;
  if (els.listaTitulo) els.listaTitulo.textContent = categoria.titulo;
  if (els.breadcrumbCurrent) els.breadcrumbCurrent.textContent = categoria.titulo;
  if (els.heroCategoria && categoria.heroImage) {
    els.heroCategoria.style.backgroundImage = `linear-gradient(rgba(17,21,69,.75), rgba(17,21,69,.8)), url('${categoria.heroImage}')`;
    els.heroCategoria.style.backgroundSize = 'cover';
    els.heroCategoria.style.backgroundPosition = 'center';
  }
}

function mostrarDetalhes(maquina) {
  state.maquinaAtual = maquina;

  if (els.maquinaTitulo) els.maquinaTitulo.textContent = maquina.nome;
  if (els.maquinaCategoria) els.maquinaCategoria.textContent = maquina.categoria_nome;
  if (els.maquinaDescricao) els.maquinaDescricao.textContent = maquina.descricao;
  if (els.maquinaPreco) els.maquinaPreco.textContent = maquina.preco || 'Sob consulta';

  if (els.mainImage) {
    els.mainImage.src = maquina.imagens?.[0] || maquina.imagem;
    els.mainImage.alt = maquina.nome;
  }

  if (els.galeriaMiniaturas) {
    const imagens = maquina.imagens?.length ? maquina.imagens : [maquina.imagem];
    els.galeriaMiniaturas.innerHTML = imagens
      .map(
        (img, idx) => `
        <button class="miniatura ${idx === 0 ? 'active' : ''}" type="button" data-img="${img}">
          <img src="${img}" alt="${maquina.nome} ${idx + 1}" loading="lazy" />
        </button>
      `
      )
      .join('');

    els.galeriaMiniaturas.querySelectorAll('.miniatura').forEach((miniatura) => {
      miniatura.addEventListener('click', () => {
        const src = miniatura.dataset.img;
        if (!src || !els.mainImage) return;
        els.mainImage.src = src;
        els.galeriaMiniaturas.querySelectorAll('.miniatura').forEach((item) => item.classList.remove('active'));
        miniatura.classList.add('active');
      });
    });
  }

  if (els.especificacoesGrid) {
    els.especificacoesGrid.innerHTML = (maquina.especificacoes || [])
      .map(
        (esp) => `
      <div class="espec-item-detalhe">
        <span class="espec-label-detalhe">${esp.label}</span>
        <span class="espec-valor-detalhe">${esp.valor}</span>
      </div>
    `
      )
      .join('');
  }

  if (els.recursosLista) {
    els.recursosLista.innerHTML = (maquina.recursos || []).map((r) => `<li>${r}</li>`).join('');
  }

  if (els.detalhesMaquina) {
    els.detalhesMaquina.style.display = 'block';
    els.detalhesMaquina.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function trocarCategoria(categoria) {
  if (!categorias[categoria]) return;
  state.categoriaAtual = categoria;

  els.categoriasBtn.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.categoria === categoria);
  });

  atualizarCabecalhoCategoria();
  renderizarCards();

  if (els.detalhesMaquina) {
    els.detalhesMaquina.style.display = 'none';
  }
}

function configurarCategorias() {
  const container = document.querySelector('.categorias-container');
  if (!container) return;

  container.addEventListener('click', (event) => {
    const btn = event.target.closest('.categoria-btn');
    if (!btn) return;

    event.preventDefault();
    const categoria = btn.dataset.categoria;
    if (!categoria) return;

    trocarCategoria(categoria);
    window.history.replaceState(null, '', `#${categoria}`);
    document.getElementById('maquinas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function configurarAcoes() {
  if (els.voltarLista) {
    els.voltarLista.addEventListener('click', () => {
      if (els.detalhesMaquina) els.detalhesMaquina.style.display = 'none';
      document.getElementById('maquinas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function init() {
  configurarMenuMobile();
  configurarCategorias();
  configurarAcoes();

  const categoriaInicial = window.location.hash.replace('#', '');
  const categoriaValida = categorias[categoriaInicial] ? categoriaInicial : 'minicarregadeira';
  trocarCategoria(categoriaValida);

  window.addEventListener('hashchange', () => {
    const categoriaHash = window.location.hash.replace('#', '');
    if (categorias[categoriaHash]) trocarCategoria(categoriaHash);
  });
}

document.addEventListener('DOMContentLoaded', init);
