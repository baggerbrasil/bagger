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
