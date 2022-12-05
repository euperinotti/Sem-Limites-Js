let filter = document.querySelector('#filter-button');
let aside = document.querySelector('#aside-menu');

filter.addEventListener('click', () => {
    if(aside.style.display === 'block'){
        aside.style.display = 'none';
    } else {
        aside.style.display = 'block';
    }
})