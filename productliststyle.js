// Pop ups
let popupButton= document.getElementById("popupButton");
let valPopup1= document.getElementById("valPopup1");
let closeValpopup1= document.getElementById("closeValpopup1");
let chooseCard1= document.getElementById("chooseCard1");

popupButton.addEventListener('click', function() {
    console.log("about to add to "+valPopup1)
    valPopup1.classList.add('show');
});

closeValpopup1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});

chooseCard1.addEventListener('click', function() {
    valPopup1.classList.remove('show');
});

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






//filter
document.addEventListener("DOMContentLoaded", () => {
    const dropdownDisplay= document.querySelector('.select');
    const dropdownContent= document.querySelector('.menu');
    const arrow= document.querySelector('.arrow');
    const filterOptions= document.querySelectorAll('.text-option');
    const products= document.getElementById('.products-list > div');


dropdownDisplay.addEventListener('click', () => {
    dropdownContent.style.display= dropdownContent.style.display=== "block" ? "none": "block";
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-right');
    });

function filterItems(filterValue) {
    products.forEach(product => {
        product.style.display= (filterValue=== "all" || product.getAttribute("data-category")=== filterValue) ? block: none
    })
}


window.addEventListener('click', (event) => {
    if (!event.target.closest('.filter')) {
            dropdownContent.style.display= 'none';
            arrow.classList.remove('arrow-down');
            arrow.classList.add('arrow-right');
        }
    });
});


