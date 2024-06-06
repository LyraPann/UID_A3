
// function addCards() {
//     const itemObjects = [];
//     const myItem = {
//         title: title.innerHTML,
//         price: price.innerHTML,
//         image: popupButton.innerHTML,
//     }
//     itemObjects.push(myItem);
//     const itemObjectsJSON = JSON.stringify(itemObjects);
//     localStorage.setItem('items', itemObjectsJSON);
//     console.log(itemObjects);

// }

// //pop up image slider
// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider() {
//     if (slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//     }
// }

// function showSlide(index) {
//     if (index >= slides.length) {
//         slideIndex = 0;
//     }
//     else if (index < 0) {
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     slideIndex++;
//     showSlide(slideIndex);
// }

// function scrollOut() {
//     let left = document.querySelector('.scroll-imgs');
//     left.scrollBy(350, 0);
// }

// function scrollIn() {
//     let right = document.querySelector('.scroll-imgs');
//     right.scrollBy(-350, 0);
// }



//filter
document.addEventListener('DOMContentLoaded', () => {
    const dropdownDisplay = document.querySelector('.select');
    const dropdownContent = document.querySelector('.menu');
    const arrow = document.querySelector('.arrow');
    const filterOptions = document.querySelectorAll('.text-option');
    const products = document.querySelectorAll('.products-list > div');


    dropdownDisplay.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-right');
    });

    filterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            filterItems(filterValue);
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
            if (category === 'allcard') {
                product.style.display = 'block'
            }
            else {
                if (product.getAttribute('data-category') === category) {
                    product.style.display = 'block'
                }
                else {
                    product.style.display = 'none'
                }
            }
        })
    }

    const cards = [];
    const addtocartButtons = document.querySelectorAll('.add-to-cart');
    const cardModal = document.getElementById('card-modal');
    // const cardSpan= cardModal.getElementsByClassName('close')[0];
    const cardsItems = document.getElementById('cards-items');
    const viewcardsButton = document.getElementById('view-cards')

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


const openMenu = () => {
    console.log('click');
    const myElement = document.getElementById('myElement');
    const myButton = document.getElementById('myButton');
    const closeButton = document.getElementById('closeButton');

    myButton.addEventListener('click', () => {
        myButton.classList.toggle('activebtn');

        if (myButton.classList.contains('activebtn')) {
            myElement.style.display = 'block';
        }
        else {
            myElement.style.display = 'none';
        }
    })
}



// popups

// Popup 1
let modal1 = document.getElementById("popup1");
let btn1 = document.getElementById("btn1");
let span1 = document.getElementById("close1");

btn1.onclick = function () {
    modal1.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Popup 2
let modal2 = document.getElementById("popup2");
let btn2 = document.getElementById("btn2");
let span2 = document.getElementById("close2");

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block";
}

// Popup 3

//dropdown
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
