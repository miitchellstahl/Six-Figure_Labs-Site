const accordionItemHeaders = document.querySelectorAll('.accordion__item__header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle('active');
    })
})