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