// dropdown
const selected= document.querySelector('.select-selected');
const items= document.querySelector('.select-items');
const arrow= document.querySelector('.select-arrow');
const arrowDown= document.querySelector('.select-arrow-down');

selected.addEventListener('click', (event)=>{
    items.classList.toggle('show');
    // arrow.innerHTML= items.classList.contains('show') ? '&#9664;' : '&#9654;';
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
        //arrowDown.innerHTML= '&#9654;';
        arrow.style.display='block'
        arrowDown.style.display='none'
    })
})

window.addEventListener('click', function(){
    if(items.classList.contains('show')) {
        items.classList.remove('show')
        //arrow.innerHTML= '&#9654;';
        arrow.style.display='block'
        arrowDown.style.display='none'
    }
})



    // const myCards= localStorage.getItem('items')
    // const JSONcards= JSON.parse(myCards);
    // console.log(JSONcards);
    // function getItems() {
    //     JSONcards.forEach(product => {
    //         const title= document.getElementById('title');
    //         const price= document.getElementById('price');
    //         title.innerHTML= product.title
    //         price.innerHTML= product.price
    //     })
    // }

    document.addEventListener('DOMContentLoaded', function() {
        const myCards = localStorage.getItem('items');
        if (myCards) {
            const JSONcards = JSON.parse(myCards);
            console.log(JSONcards);
    
            function getItems() {
                JSONcards.forEach(product => {
                    const title = document.getElementById('title');
                    const price = document.getElementById('price');
                    title.innerHTML = product.title;
                    price.innerHTML = product.price;
                });
            }
    
            getItems(); 
        } else {
            console.log("No items found in localStorage");
        }
    })

    // const itemObjects= [];
    // const myItem= {
    //     title: title.innerHTML, 
    //     price: price.innerHTML,
    //     image: popupButton.innerHTML,
    // }

