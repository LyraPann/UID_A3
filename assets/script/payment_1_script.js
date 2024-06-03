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
const selected= document.querySelector('.select-selected');
const items= document.querySelector('.select-items');
const arrow= document.querySelector('.select-arrow');
const arrowDown= document.querySelector('.select-arrow-down');

selected.addEventListener('click', (event)=>{
    items.classList.toggle('show');
    if (items.classList.contains('show')){
        arrow.style.display= 'none'
        arrowDown.style.display= 'block'
    }
    else {
        arrow.style.display='block'
        arrowDown.style.display='none'
    }
    event.stopPropagation();

})

document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function(){
        selected.textContent= this.textContent;
        items.classList.remove('show');
        arrow.style.display='block'
        arrowDown.style.display='none'
    })
})

window.addEventListener('click', function(){
    if(items.classList.contains('show')) {
        items.classList.remove('show')
        arrow.style.display='block'
        arrowDown.style.display='none'
    }
})