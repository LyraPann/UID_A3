//dropdown menu
const selected = document.querySelector('.number-selected');
const items = document.querySelector('.select-items');
const arrow = document.querySelector('.select-arrow');
const arrowDown = document.querySelector('.select-arrow-down');

selected.addEventListener('click', (event) => {
    items.classList.toggle('show');
    if (items.classList.contains('show')) {
        arrow.style.display = 'none'
        arrowDown.style.display = 'block'
    }
    else {
        arrow.style.display = 'block'
        arrowDown.style.display = 'none'
    }
    event.stopPropagation();

})

document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function () {
        selected.textContent = this.textContent;
        items.classList.remove('show');
        arrow.style.display = 'block'
        arrowDown.style.display = 'none'
    })
})

window.addEventListener('click', function () {
    if (items.classList.contains('show')) {
        items.classList.remove('show')
        arrow.style.display = 'block'
        arrowDown.style.display = 'none'
    }
})