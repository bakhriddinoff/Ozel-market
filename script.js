const langBtns = document.querySelectorAll('.current-lang');
const dropdowns = document.querySelectorAll('.language-dropdown');
const items = document.querySelectorAll('.language-dropdown li');

// Har bir langBtn uchun event qo‘shamiz
langBtns.forEach((langBtn, index) => {
    langBtn.addEventListener('click', () => {
        dropdowns[index].classList.toggle('hidden');
    });
});

items.forEach(item => {
    item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        const flagImage = item.querySelector('.imgL'); // Get the flag image element

        // Faqat birinchi langBtn'ni yangilayapti, agar sizga kerak bo‘lsa barchasiga yangilasa, forEach qilib yozamiz
        langBtns.forEach(langBtn => {
            // Clear previous content
            langBtn.innerHTML = '';

            // Create a new image element for the button
            const buttonFlag = document.createElement('img');
            buttonFlag.classList.add('imgL'); // Apply the same styling
            buttonFlag.src = flagImage.src;
            buttonFlag.alt = flagImage.alt;
            buttonFlag.style.marginRight = '5px'; // Add some spacing

            // Append the flag and the text to the button
            langBtn.appendChild(buttonFlag);
            langBtn.appendChild(document.createTextNode(item.textContent + " ⌄"));
        });

        dropdowns.forEach(dropdown => {
            dropdown.classList.add('hidden');
        });

        updateLanguage(selectedLang);
    });
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
/* LANGUAGE SELECTOR */

    const translations = {
        uz: { 

        }
    }
