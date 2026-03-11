const menuMobileBtn = document.getElementById('menuMobileBtn');
const menuMobile = document.getElementById('menuMobile');
const overlay = document.getElementById('overlay');

if (menuMobileBtn && menuMobile && overlay) {
    menuMobileBtn.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menuMobile.classList.contains('active') ? 'hidden' : 'auto';

        const icon = menuMobileBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars', !menuMobile.classList.contains('active'));
            icon.classList.toggle('fa-times', menuMobile.classList.contains('active'));
        }
    });

    overlay.addEventListener('click', () => {
        menuMobile.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        const icon = menuMobileBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });

    menuMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            const icon = menuMobileBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
});

const heroBgCurrent = document.querySelector('.hero-bg-current');
const heroBgNext = document.querySelector('.hero-bg-next');
const heroImages = [
    'uploads/escavadeiralogo.jpeg',
    'uploads/carregadeirafundo.jpg',
    'uploads/escavadeira.jpeg'
];

if (heroBgCurrent && heroBgNext) {
    let heroImageIndex = 0;

    const setHeroBackground = (element, imagePath) => {
        element.style.backgroundImage = `url('${imagePath}')`;
    };

    setHeroBackground(heroBgCurrent, heroImages[heroImageIndex]);

    setInterval(() => {
        heroImageIndex = (heroImageIndex + 1) % heroImages.length;
        setHeroBackground(heroBgNext, heroImages[heroImageIndex]);
        heroBgNext.style.opacity = '1';

        setTimeout(() => {
            setHeroBackground(heroBgCurrent, heroImages[heroImageIndex]);
            heroBgNext.style.opacity = '0';
        }, 900);
    }, 4500);
}

const formContato = document.getElementById('formContato');
if (formContato) {
    formContato.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const interesse = document.getElementById('interesse');
        const interesseTexto = interesse.options[interesse.selectedIndex]?.text || '';
        const mensagem = document.getElementById('mensagem').value.trim() || 'Não informada.';
        const status = document.getElementById('formStatus');
        const botao = this.querySelector('button[type="submit"]');
        const textoOriginal = botao.innerHTML;

        if (!nome || !email || !telefone || !interesse.value) {
            status.style.display = 'block';
            status.style.color = '#b91c1c';
            status.textContent = 'Preencha os campos obrigatórios para solicitar sua proposta.';
            return;
        }

        botao.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando proposta...';
        botao.disabled = true;

        const assunto = `Nova solicitação de proposta - ${interesseTexto}`;
        const corpo = [
            'Nova solicitação recebida pelo site BaggerBrasil:',
            '',
            `Nome: ${nome}`,
            `E-mail: ${email}`,
            `Telefone: ${telefone}`,
            `Interesse: ${interesseTexto}`,
            `Mensagem: ${mensagem}`
        ].join('\n');

        try {
            const resposta = await fetch('https://formsubmit.co/ajax/davikaspary15@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    email,
                    telefone,
                    interesse: interesseTexto,
                    mensagem,
                    _subject: assunto,
                    _captcha: 'false',
                    _template: 'table'
                })
            });

            if (!resposta.ok) {
                throw new Error('Falha ao enviar e-mail');
            }

            status.style.display = 'block';
            status.style.color = 'var(--verde-secundario)';
            status.textContent = `Proposta enviada com sucesso, ${nome}! Retornaremos em breve.`;
            this.reset();
        } catch (erro) {
            const mailto = `mailto:davikaspary15@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
            window.location.href = mailto;
            status.style.display = 'block';
            status.style.color = '#b45309';
            status.textContent = 'Não conseguimos enviar automaticamente. Abrimos seu aplicativo de e-mail para concluir o envio.';
        } finally {
            botao.innerHTML = textoOriginal;
            botao.disabled = false;
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({ top: targetElement.offsetTop - 90, behavior: 'smooth' });
        }
    });
});

const botaoContatoHeader = document.querySelector('.btn-contato-header');
if (botaoContatoHeader) {
    botaoContatoHeader.addEventListener('click', () => {
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    });
}
