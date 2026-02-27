// Menu Mobile
        const menuMobileBtn = document.getElementById('menuMobileBtn');
        const menuMobile = document.getElementById('menuMobile');
        const overlay = document.getElementById('overlay');
        
        menuMobileBtn.addEventListener('click', () => {
            menuMobile.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = menuMobile.classList.contains('active') ? 'hidden' : 'auto';
            
            // Alternar ícone do botão
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
        
        // Scroll Animation
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
        
        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            document.querySelector('header').classList.toggle('scrolled', window.scrollY > 60);
        });
        
        // Slider de imagem no Hero
        const heroBgCurrent = document.querySelector('.hero-bg-current');
        const heroBgNext = document.querySelector('.hero-bg-next');
        const heroImages = [
            'uploads/escavadeiralogo.jpeg',
            'uploads/campo.jpg',
            'uploads/carregadeirafundo.jpg',
            'uploads/escavadeira.jpeg'
        ];

        let heroImageIndex = 0;

        function setHeroBackground(element, imagePath) {
            element.style.backgroundImage = `url('${imagePath}')`;
        }

        setHeroBackground(heroBgCurrent, heroImages[heroImageIndex]);

        setInterval(() => {
            heroImageIndex = (heroImageIndex + 1) % heroImages.length;
            setHeroBackground(heroBgNext, heroImages[heroImageIndex]);
            heroBgNext.style.opacity = '1';

            setTimeout(() => {
                setHeroBackground(heroBgCurrent, heroImages[heroImageIndex]);
                heroBgNext.style.opacity = '0';
            }, 1000);
        }, 5000);

        // Swiper (Depoimentos)
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
        
        // Form Submission (envio por e-mail)
        document.getElementById('formContato').addEventListener('submit', async function(e) {
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
                        'Accept': 'application/json'
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
                status.textContent = `Proposta enviada com sucesso, ${nome}! Retornaremos em breve por e-mail ou telefone.`;
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
        
        // Smooth Scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Botão "Falar com Especialista"
        document.querySelector('.btn-contato-header').addEventListener('click', () => {
            document.getElementById('contato').scrollIntoView({
                behavior: 'smooth'
            });
        });
