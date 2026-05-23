const categorias = {
  minicarregadeira: {
    titulo: 'Mini Carregadeiras Elétricas',
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
        id: 203,
        modelo: 'E612',
        nome: 'Pá Carregadeira Elétrica E612',
        descricao:
          'Pá carregadeira elétrica compacta para operações intensivas com ótimo desempenho e baixo custo operacional.',
        imagem: 'uploads/carregadeirafundo.jpg',
        imagens: ['uploads/carregadeirafundo.jpg', 'uploads/escavadeira.jpeg'],
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
      }
    ]
  }
};

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
  els.categoriasBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      trocarCategoria(btn.dataset.categoria);
      document.getElementById('maquinas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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
}

document.addEventListener('DOMContentLoaded', init);
