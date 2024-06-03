// Pop ups
let popupButton= document.getElementById("popupButton");
let valPopup1= document.getElementById("valPopup1");
let closeValpopup1= document.getElementById("closeValpopup1");
let chooseCard1= document.getElementById("chooseCard1");
let helloDisplay= document.getElementById("hello");

const cardDetails= ()=> {
//popupButton.addEventListener('click', function() {
    console.log("about to add to "+valPopup1)
    // valPopup1.classList.add('show');
    // helloDisplay.style.display= 'block';
    valPopup1.classList.toggle('show');

    if (valPopup1.classList.contains('show')) {
        helloDisplay.style.display= 'block';        
    } 
    else {
        helloDisplay.style.display= 'none';
    }       
// });
}


// document.getElementById("open-modal").addEventListener('click', function(){
//     document.body.classList.add('modal-open');
//     console.log('clicked')
// })

// document.getElementById('close-modal').addEventListener('click', function(){
//     document.body.classList.remove('modal-open');
// })

// document.querySelector('.modal-overlay').addEventListener('click', function(){
//     document.body.classList.remove('modal-open');
// })


closeValpopup1.addEventListener('click', function() {
    //valPopup1.classList.remove('show');

    if (valPopup1.classList.contains('show')) {
        helloDisplay.style.display= 'none';          
    } 
    else {
        helloDisplay.style.display= 'block';
    } 
});

// chooseCard1.addEventListener('click', function() {
//     valPopup1.classList.remove('show');
// });



function addCards() {
    let cardDetails= chooseCard1.innerHTML;
    console.log(cardDetails);
}

//pop up image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function scrollOut(){
    let left= document.querySelector('.scroll-imgs');
    left.scrollBy(350, 0);
}

function scrollIn(){
    let right= document.querySelector('.scroll-imgs');
    right.scrollBy(-350, 0);
}



//filter
document.addEventListener('DOMContentLoaded', () => {
    const dropdownDisplay= document.querySelector('.select');
    const dropdownContent= document.querySelector('.menu');
    const arrow= document.querySelector('.arrow');
    const filterOptions= document.querySelectorAll('.text-option');
    const products= document.getElementById('.products-list > div');


dropdownDisplay.addEventListener('click', () => {
    dropdownContent.style.display= dropdownContent.style.display=== 'block' ? 'none': 'block';
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    });

function filterItems(filterValue) {
    products.forEach(product => {
        product.style.display= (filterValue=== 'all' || product.getAttribute("data-category")=== filterValue) ? 'block': 'none';
    })
}

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        const filterValue= option.getAttribute('data-filter');
        filterItems(filterValue);
        let filterClass=document.getElementsByClassName('filter');
        // filterClass.classList.add('filter-class')
        filterClass.style.display='none';
        dropdownContent.style.display = 'none';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-right');
        document.querySelector('.selected').textContent= option.textContent;
    });
});

window.addEventListener('click', (event) => {
    if (!event.target.closest('.filter')) {
            dropdownContent.style.display= 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
        }
    });
});


const openMenu = () => { 
    console.log('click');
        const myElement= document.getElementById('myElement');
        const myButton= document.getElementById('myButton');
        const closeButton= document.getElementById('closeButton');

        myButton.addEventListener('click', () => {
            myButton.classList.toggle('activebtn');

            if (myButton.classList.contains('activebtn')) {
                myElement.style.display= 'block';          
            } 
            else {
                myElement.style.display= 'none';
            }       
        })
}
