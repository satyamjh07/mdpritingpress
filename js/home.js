// Value Propositions - Pinned GSAP Scroll Story (desktop/tablet only)
        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);

            const vpMM = gsap.matchMedia();

            vpMM.add('(min-width: 768px)', () => {
                const panels = gsap.utils.toArray('.vp-panel');
                const dots = gsap.utils.toArray('.vp-dot');
                if (!panels.length) return;

                const setActiveDot = (idx) => {
                    dots.forEach((d, i) => {
                        if (i === idx) {
                            d.classList.remove('w-2', 'bg-outline-variant');
                            d.classList.add('w-8', 'bg-primary');
                        } else {
                            d.classList.remove('w-8', 'bg-primary');
                            d.classList.add('w-2', 'bg-outline-variant');
                        }
                    });
                };

                gsap.set(panels, { autoAlpha: 0 });
                gsap.set(panels[0], { autoAlpha: 1 });

                const holdStart = 1.6;
                const holdEnd = 3.6;

                const vpTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#valuePropsScroll',
                        start: 'top top',
                        end: '+=300%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            const t = self.progress * vpTl.duration();
                            const idx = t < holdStart ? 0 : (t < holdEnd ? 1 : 2);
                            setActiveDot(idx);
                        }
                    }
                });

                // Panel 0 -> Panel 1
                vpTl
                    .to(panels[0].querySelector('.vp-image'), { opacity: 0, x: -50, duration: 0.6 }, 1)
                    .to(panels[0].querySelector('.vp-text'), { opacity: 0, y: -25, duration: 0.6 }, 1)
                    .set(panels[0], { autoAlpha: 0 }, holdStart)
                    .set(panels[1], { autoAlpha: 1 }, holdStart)
                    .fromTo(panels[1].querySelector('.vp-image'), { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6 }, holdStart)
                    .fromTo(panels[1].querySelector('.vp-text'), { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, holdStart + 0.1)
                    // Panel 1 -> Panel 2
                    .to(panels[1].querySelector('.vp-image'), { opacity: 0, x: -50, duration: 0.6 }, holdEnd)
                    .to(panels[1].querySelector('.vp-text'), { opacity: 0, y: -25, duration: 0.6 }, holdEnd)
                    .set(panels[1], { autoAlpha: 0 }, holdEnd + 0.6)
                    .set(panels[2], { autoAlpha: 1 }, holdEnd + 0.6)
                    .fromTo(panels[2].querySelector('.vp-image'), { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6 }, holdEnd + 0.6)
                    .fromTo(panels[2].querySelector('.vp-text'), { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, holdEnd + 0.7);

                // Clickable progress dots jump to the right point in the pinned scroll
                dots.forEach((dot, i) => {
                    dot.addEventListener('click', () => {
                        const st = vpTl.scrollTrigger;
                        const targetTimes = [0, holdStart, holdEnd + 0.7];
                        const targetProgress = targetTimes[i] / vpTl.duration();
                        const scrollPos = st.start + (st.end - st.start) * targetProgress;
                        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                    });
                });

                return () => {
                    vpTl.scrollTrigger && vpTl.scrollTrigger.kill();
                    vpTl.kill();
                };
            });
        }

        // Featured Products - Split Screen Pinned Scroll Story (desktop/tablet only)
        if (window.gsap && window.ScrollTrigger) {
            const fpMM = gsap.matchMedia();

            fpMM.add('(min-width: 768px)', () => {
                const panels = gsap.utils.toArray('.fp-panel');
                const navItems = gsap.utils.toArray('.fp-nav-item');
                if (!panels.length) return;

                const setActiveNav = (idx) => {
                    navItems.forEach((item, i) => {
                        item.classList.toggle('is-active', i === idx);
                    });
                };

                gsap.set(panels, { autoAlpha: 0 });
                gsap.set(panels[0], { autoAlpha: 1 });
                setActiveNav(0);

                const holdTime = 1;
                const transTime = 0.6;

                const fpTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#featuredProductsScroll',
                        start: 'top top',
                        end: '+=450%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            const t = self.progress * fpTl.duration();
                            let idx = 0;
                            for (let i = segmentStarts.length - 1; i >= 0; i--) {
                                if (t >= segmentStarts[i]) { idx = i; break; }
                            }
                            setActiveNav(idx);
                        }
                    }
                });

                // Build transitions generically for however many panels exist
                const segmentStarts = [0];
                let cursor = holdTime;
                for (let i = 0; i < panels.length - 1; i++) {
                    const curImg = panels[i].querySelector('.fp-image');
                    const curText = panels[i].querySelector('.fp-text');
                    const nextImg = panels[i + 1].querySelector('.fp-image');
                    const nextText = panels[i + 1].querySelector('.fp-text');

                    fpTl
                        .to(curImg, { opacity: 0, y: -30, duration: transTime }, cursor)
                        .to(curText, { opacity: 0, y: -20, duration: transTime }, cursor)
                        .set(panels[i], { autoAlpha: 0 }, cursor + transTime)
                        .set(panels[i + 1], { autoAlpha: 1 }, cursor + transTime)
                        .fromTo(nextImg, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: transTime }, cursor + transTime)
                        .fromTo(nextText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: transTime }, cursor + transTime + 0.1);

                    cursor = cursor + transTime + holdTime;
                    segmentStarts.push(cursor - holdTime);
                }

                // Clickable left-nav items jump to the right point in the pinned scroll
                navItems.forEach((item, i) => {
                    item.addEventListener('click', () => {
                        const st = fpTl.scrollTrigger;
                        const targetProgress = segmentStarts[i] / fpTl.duration();
                        const scrollPos = st.start + (st.end - st.start) * targetProgress;
                        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
                    });
                });

                return () => {
                    fpTl.scrollTrigger && fpTl.scrollTrigger.kill();
                    fpTl.kill();
                };
            });
        }

        // Simple Testimonial Slider
        const slider = document.getElementById('testimonialSlider');
        let currentSlide = 0;
        const totalSlides = 2;

        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000);

        // Form Validation Logic
        const form = document.getElementById('contactForm');
        const msgDiv = document.getElementById('formMessage');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fields = [
                { id: 'fieldName', name: 'Name' },
                { id: 'fieldPhone', name: 'Phone' },
                { id: 'fieldEmail', name: 'Email' },
                { id: 'fieldMessage', name: 'Message' }
            ];

            let isValid = true;
            let errorMsg = '';

            // Reset borders
            fields.forEach(f => document.getElementById(f.id).classList.remove('border-error', 'border-on-tertiary-container'));

            for (const field of fields) {
                const el = document.getElementById(field.id);
                if (!el.value.trim()) {
                    isValid = false;
                    errorMsg = `Please fill out the ${field.name} field.`;
                    el.classList.add('border-error');
                    break;
                }
            }

            if (isValid) {
                const emailEl = document.getElementById('fieldEmail');
                if (!emailRegex.test(emailEl.value)) {
                    isValid = false;
                    errorMsg = 'Please enter a valid email address.';
                    emailEl.classList.add('border-error');
                }
            }

            msgDiv.classList.remove('hidden', 'bg-error-container', 'text-on-error-container', 'bg-tertiary-fixed', 'text-on-tertiary-fixed');
            
            if (!isValid) {
                msgDiv.textContent = errorMsg;
                msgDiv.classList.add('bg-error-container', 'text-on-error-container');
            } else {
                msgDiv.textContent = 'Inquiry submitted successfully. Our technicians will contact you shortly.';
                msgDiv.classList.add('bg-tertiary-fixed', 'text-on-tertiary-fixed'); // Using Magenta tint for success as requested
                
                // Set validation success border (Magenta)
                fields.forEach(f => {
                    document.getElementById(f.id).classList.add('border-on-tertiary-container', 'border-2');
                });
                
                setTimeout(() => form.reset(), 3000);
            }
        });

        // ===================== Mobile Nav Menu =====================
        (function () {
            const menuBtn = document.getElementById('mobileMenuBtn');
            const menuIcon = document.getElementById('mobileMenuIcon');
            const navPanel = document.getElementById('mobileNavPanel');
            if (!menuBtn || !navPanel) return;

            let menuOpen = false;

            function setMenu(open) {
                menuOpen = open;
                navPanel.classList.toggle('hidden', !open);
                menuBtn.setAttribute('aria-expanded', String(open));
                if (menuIcon) menuIcon.textContent = open ? 'close' : 'menu';
            }

            menuBtn.addEventListener('click', () => setMenu(!menuOpen));

            // Close the panel once a link (or the Get a Quote button) inside it is used
            navPanel.querySelectorAll('.js-mobile-nav-link').forEach((el) => {
                el.addEventListener('click', () => setMenu(false));
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && menuOpen) setMenu(false);
            });
        })();

        // ===================== Get a Quote Modal =====================
        (function () {
            const overlay = document.getElementById('quoteModalOverlay');
            const modalBox = document.getElementById('quoteModalBox');
            const closeBtn = document.getElementById('quoteModalClose');
            const successCloseBtn = document.getElementById('quoteSuccessClose');
            const formView = document.getElementById('quoteFormView');
            const successView = document.getElementById('quoteSuccessView');
            const quoteForm = document.getElementById('quoteForm');
            const quoteMsgDiv = document.getElementById('quoteFormMessage');
            const openTriggers = document.querySelectorAll('.js-open-quote-modal');

            if (!overlay || !quoteForm) return;

            const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[+]?[0-9]{7,15}$/;

            const quoteFields = [
                { id: 'quoteName', label: 'Name', type: 'text', regex: nameRegex, errorMsg: 'Please enter a valid name (letters only, 2-50 characters).' },
                { id: 'quoteEmail', label: 'Email Address', type: 'text', regex: emailRegex, errorMsg: 'Please enter a valid email address.' },
                { id: 'quotePhone', label: 'Phone Number', type: 'text', regex: phoneRegex, errorMsg: 'Please enter a valid phone number (7-15 digits).' },
                { id: 'quoteProduct', label: 'Select Product', type: 'select', errorMsg: 'Please select a product.' },
                { id: 'quoteQuantity', label: 'Expected Order Quantity', type: 'select', errorMsg: 'Please select the expected order quantity.' },
                { id: 'quoteState', label: 'State', type: 'select', errorMsg: 'Please select your state.' }
            ];

            function resetQuoteModalView() {
                formView.classList.remove('hidden');
                successView.classList.add('hidden');
                quoteMsgDiv.classList.add('hidden');
                quoteMsgDiv.classList.remove('bg-error-container', 'text-on-error-container');
                quoteForm.reset();
                quoteFields.forEach(f => {
                    document.getElementById(f.id).classList.remove('border-error', 'border-on-tertiary-container', 'border-2');
                });
            }

            function openQuoteModal() {
                resetQuoteModalView();
                overlay.classList.remove('hidden');
                overlay.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }

            function closeQuoteModal() {
                overlay.classList.add('hidden');
                overlay.classList.remove('flex');
                document.body.style.overflow = '';
            }

            openTriggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    openQuoteModal();
                });
            });

            closeBtn.addEventListener('click', closeQuoteModal);
            successCloseBtn.addEventListener('click', closeQuoteModal);

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeQuoteModal();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeQuoteModal();
            });

            quoteForm.addEventListener('submit', (e) => {
                e.preventDefault();

                let isValid = true;
                let firstErrorMsg = '';

                quoteFields.forEach(f => document.getElementById(f.id).classList.remove('border-error', 'border-on-tertiary-container', 'border-2'));

                for (const field of quoteFields) {
                    const el = document.getElementById(field.id);
                    const value = el.value.trim();

                    if (!value) {
                        if (isValid) firstErrorMsg = `Please fill out the ${field.label} field.`;
                        isValid = false;
                        el.classList.add('border-error');
                        continue;
                    }

                    if (field.regex && !field.regex.test(value)) {
                        if (isValid) firstErrorMsg = field.errorMsg;
                        isValid = false;
                        el.classList.add('border-error');
                    }
                }

                quoteMsgDiv.classList.remove('hidden', 'bg-error-container', 'text-on-error-container');

                if (!isValid) {
                    quoteMsgDiv.textContent = firstErrorMsg;
                    quoteMsgDiv.classList.add('bg-error-container', 'text-on-error-container');
                    return;
                }

                quoteMsgDiv.classList.add('hidden');
                quoteFields.forEach(f => {
                    document.getElementById(f.id).classList.add('border-on-tertiary-container', 'border-2');
                });

                // Simulate successful submission
                formView.classList.add('hidden');
                successView.classList.remove('hidden');
            });
        })();