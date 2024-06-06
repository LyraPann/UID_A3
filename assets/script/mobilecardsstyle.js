// Dropdown menu
const selected = document.querySelector('.number-selected');
const items = document.querySelector('.select-items');
const arrow = document.querySelector('.select-arrow');
const arrowDown = document.querySelector('.select-arrow-down');

// Toggle dropdown menu on click
selected.addEventListener('click', (event) => {
    items.classList.toggle('show');
    if (items.classList.contains('show')) {
        arrow.style.display = 'none';
        arrowDown.style.display = 'block';
    } else {
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    }
    event.stopPropagation();
});

// Update selected item on click
document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function () {
        selected.textContent = this.textContent;
        items.classList.remove('show');
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    });
});

// Close dropdown menu when clicking outside
window.addEventListener('click', function () {
    if (items.classList.contains('show')) {
        items.classList.remove('show');
        arrow.style.display = 'block';
        arrowDown.style.display = 'none';
    }
});


// Popup 1
let modal1= document.getElementById("popup1");
let btn1= document.getElementById("btn1");
let span1= document.getElementById("close1");
let chose1= document.getElementById("choose1")

chose1.onclick= function () {
    modal1.style.display= "none";
}

btn1.onclick= function () {
    modal1.style.display = "block";
}

span1.onclick= function () {
    modal1.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal1) {
        modal1.style.display = "none";
    }
}

let slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides= document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex= 1 }
    if (n < 1) { slideIndex= slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Popup 2
let modal2= document.getElementById("popup2");
let btn2= document.getElementById("btn2");
let span2= document.getElementById("close2");
let chose2= document.getElementById("choose2")

chose2.onclick= function () {
    modal2.style.display= "none";
}

btn2.onclick= function () {
    modal2.style.display = "block";
}

span2.onclick= function () {
    modal2.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal2) {
        modal2.style.display = "none";
    }
}

// Go Back to Last Page
document.getElementById('gobackButton').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('gobackButton2').addEventListener('click', function() {
    window.history.back();
});
