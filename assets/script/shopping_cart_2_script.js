document.addEventListener('DOMContentLoaded', function () {
    // Handle hamburger menu click
    const hamburger = document.querySelector('.hamburger');
    const navlist = document.querySelector('.navlist');

    hamburger.addEventListener('click', function () {
        navlist.classList.toggle('show');
    });

    // Handle remove button click event
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.target.closest('.item').remove();
            // Update the total price
            updateTotal();
        });
    });

    // Update the total price function
    function updateTotal() {
        let total = 0;
        const items = document.querySelectorAll('.cart-items .item');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-info p:nth-child(3)').textContent.replace('$', ''));
            total += price;
        });
        document.querySelector('.total p').textContent = `Total: $${total.toFixed(2)}`;
    }
});
