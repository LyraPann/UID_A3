// Dropdown menu
const selected = document.querySelector('.number-selected');
const items = document.querySelector('.select-items');
const arrow = document.querySelector('.select-arrow');
const arrowDown = document.querySelector('.select-arrow-down');

// Toggle dropdown menu on click
selected.addEventListener('click', (event) => {
    items.classList.toggle('show');
    if (items.classList.contains('show')) {
        arrow.style.display = 'none';
        arrowDown.style.display = 'block';
    } else {
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    }
    event.stopPropagation();
});

// Update selected item on click
document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function () {
        selected.textContent = this.textContent;
        items.classList.remove('show');
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    });
});

// Close dropdown menu when clicking outside
window.addEventListener('click', function () {
    if (items.classList.contains('show')) {
        items.classList.remove('show');
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    }
});

// Go Back to Last Page
document.getElementById('gobackButton').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('gobackButton2').addEventListener('click', function() {
    window.history.back();
});
