document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updateTotal();
        });
    });

    const updateTotal = () => {
        const items = document.querySelectorAll('.item');
        let total = 0;
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            total += price;
        });
        document.querySelector('.total span:last-child').textContent = `$${total.toFixed(2)}`;
    };

    document.getElementById('billing-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Payment processed!');
    });
});
