document.addEventListener('DOMContentLoaded', function () {
    // Handle remove button click event
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.target.closest('li').remove();
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
