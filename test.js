// Pop ups
let popupButton = document.getElementById("popupButton");
let valPopup1 = document.getElementById("valPopup1");
let closeValpopup1 = document.getElementById("closeValpopup1");
let chooseCard1 = document.getElementById("chooseCard1");

popupButton.addEventListener('click', function() {
    console.log("about to add to " + valPopup1);
    valPopup1.classList.add('show');
});

closeValpopup1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});

chooseCard1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const dropdownDisplay = document.querySelector('.select');
    const dropdownContent = document.querySelector('.menu');
    const arrow = document.querySelector('.arrow');
    const filterOptions = document.querySelectorAll('.text-option');
    const products = document.querySelectorAll('.products-list > div');

    dropdownDisplay.addEventListener('click', () => {
        console.log('Dropdown clicked');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
        arrow.classList.toggle('arrow-down');
        arrow.classList.toggle('arrow-right');
    });

    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            console.log('Option clicked', option.textContent);
            const filterValue = option.getAttribute('data-filter');
            filterItems(filterValue);
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
            document.querySelector('.selected').textContent = option.textContent;
        });
    });

    function filterItems(filterValue) {
        console.log('Filtering items with filter:', filterValue);
        products.forEach(product => {
            product.style.display = (filterValue === 'all' || product.getAttribute('data-category') === filterValue) ? 'block' : 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (!event.target.closest('.filter')) {
            console.log('Clicked outside the dropdown');
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
        }
    });
});
