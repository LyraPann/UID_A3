document.addEventListener('DOMContentLoaded', function () {
    // Handle remove button click event
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.target.closest('div').remove();
            // Update the total price
            updateTotal();
        });
    });

    // Update the total price function
    function updateTotal() {
        let total = 0;
        const items = document.querySelectorAll('.cart-preview li');
        items.forEach(item => {
            const price = parseFloat(item.textContent.match(/\$(\d+\.\d+)/)[1]);
            total += price;
        });
        document.querySelector('.cart-preview h3').textContent = `Total: $${total.toFixed(2)}`;
    }
});


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


//charity filter
document.addEventListener('DOMContentLoaded', () => {
    const dropdownDisplay = document.querySelector('.select');
    const dropdownContent = document.querySelector('.menu');
    const arrow = document.querySelector('.arrow');
    const filterOptions = document.querySelectorAll('.text-option');
    const products = document.querySelectorAll('.charity-container > div');


    dropdownDisplay.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    });

    filterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            filterItems(filterValue);
            // filterClass= document.getElementsByClassName('filter');
            // filterClass.classList.add('filter-class');
            // filterClass.style.display='none';
            const filterClass = document.getElementsByClassName('filter');
            Array.from(filterClass).forEach(element => {
                element.classList.add('filter-class');
            });
            document.querySelector('.selected').textContent = option.textContent;
            dropdownContent.style.display = 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
        })
    })

    function filterItems(category) {
        products.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    product.style.display = 'block'
                }
                else {
                    product.style.display = 'none'
                }
        })
    }

    window.addEventListener('click', (event) => {
        if (!event.target.closest('.filter')) {
            if (dropdownDisplay.style.display === 'block') {
                dropdownContent.style.display = 'none';
                arrow.classList.remove('arrow-down');
                arrow.classList.add('arrow-right');
            }
        }
    });
});