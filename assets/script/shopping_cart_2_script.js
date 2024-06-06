// Dropdown functionality
const selected = document.querySelectorAll('.select-selected');
const items = document.querySelectorAll('.select-items');
const arrow = document.querySelectorAll('.select-arrow');
const arrowDown = document.querySelectorAll('.select-arrow-down');

selected.forEach((select, index) => {
    select.addEventListener('click', (event) => {
        items[index].classList.toggle('show');
        if (items[index].classList.contains('show')) {
            arrow[index].style.display = 'none';
            arrowDown[index].style.display = 'block';
        } else {
            arrow[index].style.display = 'block';
            arrowDown[index].style.display = 'none';
        }
        event.stopPropagation();
    });

    document.querySelectorAll('.select-items div').forEach(item => {
        item.addEventListener('click', function () {
            select.textContent = this.textContent;
            items[index].classList.remove('show');
            arrow[index].style.display = 'block';
            arrowDown[index].style.display = 'none';
        });
    });
});

window.addEventListener('click', function () {
    items.forEach((item, index) => {
        if (item.classList.contains('show')) {
            item.classList.remove('show');
            arrow[index].style.display = 'block';
            arrowDown[index].style.display = 'none';
        }
    });
});

// Handle remove button click event
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function () {
        const item = button.closest('.cart-item');
        item.remove();
        updateTotal();
    });
});
