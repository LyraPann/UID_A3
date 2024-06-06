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
let modal1= document.getElementById("popup1");
let btn1= document.getElementById("btn1");
let span1= document.getElementById("close1");

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

// Popup 3
let modal3= document.getElementById("popup3");
let btn3= document.getElementById("btn3");
let span3= document.getElementById("close3");

btn3.onclick= function () {
    modal3.style.display= "block";
}

span3.onclick= function () {
    modal3.style.display= "none";
}

window.onclick = function (event) {
    if (event.target== modal3) {
        modal3.style.display = "none";
    }
}

// Popup 4
let modal4= document.getElementById("popup4");
let btn4= document.getElementById("btn4");
let span4= document.getElementById("close4");

btn4.onclick = function () {
    modal4.style.display = "block";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

// Popup 5
let modal5= document.getElementById("popup5");
let btn5= document.getElementById("btn5");
let span5= document.getElementById("close5");

btn5.onclick = function () {
    modal5.style.display = "block";
}

span5.onclick = function () {
    modal5.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}

// Popup 6
let modal6= document.getElementById("popup6");
let btn6= document.getElementById("btn6");
let span6= document.getElementById("close6");

btn6.onclick = function () {
    modal6.style.display = "block";
}

span6.onclick = function () {
    modal6.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}


// Popup 7
let modal7= document.getElementById("popup7");
let btn7= document.getElementById("btn7");
let span7= document.getElementById("close7");

btn7.onclick = function () {
    modal7.style.display = "block";
}

span7.onclick = function () {
    modal7.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}

// Popup 8
let modal8= document.getElementById("popup8");
let btn8= document.getElementById("btn8");
let span8= document.getElementById("close8");

btn8.onclick = function () {
    modal8.style.display = "block";
}

span8.onclick = function () {
    modal8.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
}


// Popup 9
let modal9= document.getElementById("popup9");
let btn9= document.getElementById("btn9");
let span9= document.getElementById("close9");

btn9.onclick = function () {
    modal9.style.display = "block";
}

span9.onclick = function () {
    modal9.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
}

// Popup 10
let modal10= document.getElementById("popup10");
let btn10= document.getElementById("btn10");
let span10= document.getElementById("close10");

btn10.onclick = function () {
    modal10.style.display = "block";
}

span10.onclick = function () {
    modal10.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
}


// Popup 11
let modal11= document.getElementById("popup11");
let btn11= document.getElementById("btn11");
let span11= document.getElementById("close11");

btn11.onclick= function () {
    modal11.style.display = "block";
}

span11.onclick= function () {
    modal11.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal11) {
        modal11.style.display = "none";
    }
}


// Popup 12
let modal12= document.getElementById("popup12");
let btn12= document.getElementById("btn12");
let span12= document.getElementById("close12");

btn12.onclick= function () {
    modal2.style.display = "block";
}

span12.onclick= function () {
    modal12.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal12) {
        modal12.style.display = "none";
    }
}

// Popup 13
let modal13= document.getElementById("popup13");
let btn13= document.getElementById("btn13");
let span13= document.getElementById("close13");

btn13.onclick= function () {
    modal13.style.display= "block";
}

span13.onclick= function () {
    modal13.style.display= "none";
}

window.onclick = function (event) {
    if (event.target== modal13) {
        modal13.style.display = "none";
    }
}

// Popup 14
let modal14= document.getElementById("popup14");
let btn14= document.getElementById("btn14");
let span14= document.getElementById("close14");

btn14.onclick = function () {
    modal14.style.display = "block";
}

span14.onclick = function () {
    modal14.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal14) {
        modal14.style.display = "none";
    }
}

// Popup 15
let modal15= document.getElementById("popup15");
let btn15= document.getElementById("btn15");
let span15= document.getElementById("close15");

btn15.onclick = function () {
    modal15.style.display = "block";
}

span15.onclick = function () {
    modal15.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal15) {
        modal15.style.display = "none";
    }
}

// Popup 16
let modal16= document.getElementById("popup16");
let btn16= document.getElementById("btn16");
let span16= document.getElementById("close16");

btn16.onclick = function () {
    modal16.style.display = "block";
}

span16.onclick = function () {
    modal16.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal16) {
        modal16.style.display = "none";
    }
}


// Popup 17
let modal17= document.getElementById("popup17");
let btn17= document.getElementById("btn17");
let span17= document.getElementById("close17");

btn17.onclick = function () {
    modal17.style.display = "block";
}

span17.onclick = function () {
    modal17.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal17) {
        modal17.style.display = "none";
    }
}

// Popup 18
let modal18= document.getElementById("popup18");
let btn18= document.getElementById("btn18");
let span18= document.getElementById("close18");

btn18.onclick = function () {
    modal18.style.display = "block";
}

span18.onclick = function () {
    modal18.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal18) {
        modal18.style.display = "none";
    }
}


// Popup 19
let modal19= document.getElementById("popup19");
let btn19= document.getElementById("btn19");
let span19= document.getElementById("close19");

btn19.onclick = function () {
    modal9.style.display = "block";
}

span19.onclick = function () {
    modal9.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal19) {
        modal19.style.display = "none";
    }
}

// Popup 20
let modal20= document.getElementById("popup20");
let btn20= document.getElementById("btn20");
let span20= document.getElementById("close20");

btn20.onclick = function () {
    modal20.style.display = "block";
}

span20.onclick = function () {
    modal20.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal20) {
        modal20.style.display = "none";
    }
}


// Popup 21
let modal21= document.getElementById("popup21");
let btn21= document.getElementById("btn21");
let span21= document.getElementById("close21");

btn21.onclick= function () {
    modal21.style.display = "block";
}

span21.onclick= function () {
    modal21.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal21) {
        modal21.style.display = "none";
    }
}


// Popup 22
let modal22= document.getElementById("popup22");
let btn22= document.getElementById("btn22");
let span22= document.getElementById("close22");

btn22.onclick= function () {
    modal22.style.display = "block";
}

span22.onclick= function () {
    modal22.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal22) {
        modal22.style.display = "none";
    }
}

// Popup 23
let modal23= document.getElementById("popup23");
let btn23= document.getElementById("btn23");
let span23= document.getElementById("close23");

btn23.onclick= function () {
    modal23.style.display= "block";
}

span23.onclick= function () {
    modal23.style.display= "none";
}

window.onclick = function (event) {
    if (event.target== modal23) {
        modal23.style.display = "none";
    }
}

// Popup 24
let modal24= document.getElementById("popup24");
let bt24= document.getElementById("btn24");
let span24= document.getElementById("close24");

btn24.onclick = function () {
    modal24.style.display = "block";
}

span24.onclick = function () {
    modal24.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal24) {
        modal24.style.display = "none";
    }
}

// Popup 25
let modal25= document.getElementById("popup25");
let btn25= document.getElementById("btn25");
let span25= document.getElementById("close25");

btn25.onclick = function () {
    modal25.style.display = "block";
}

span25.onclick = function () {
    modal25.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal25) {
        modal25.style.display = "none";
    }
}

// Popup 26
let modal26= document.getElementById("popup26");
let btn26= document.getElementById("btn26");
let span26= document.getElementById("close26");

btn26.onclick = function () {
    modal26.style.display = "block";
}

span26.onclick = function () {
    modal26.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal26) {
        modal26.style.display = "none";
    }
}


// Popup 27
let modal27= document.getElementById("popup27");
let btn27= document.getElementById("btn27");
let span27= document.getElementById("close27");

btn27.onclick = function () {
    modal27.style.display = "block";
}

span27.onclick = function () {
    modal27.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal27) {
        modal27.style.display = "none";
    }
}

// Popup 28
let modal28= document.getElementById("popup28");
let btn28= document.getElementById("btn28");
let span28= document.getElementById("close28");

btn28.onclick = function () {
    modal28.style.display = "block";
}

span28.onclick = function () {
    modal28.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal28) {
        modal28.style.display = "none";
    }
}


// Popup 29
let modal29= document.getElementById("popup29");
let btn29= document.getElementById("btn29");
let span29= document.getElementById("close29");

btn29.onclick = function () {
    modal29.style.display = "block";
}

span29.onclick = function () {
    modal29.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal29) {
        modal29.style.display = "none";
    }
}

// Popup 30
let modal30= document.getElementById("popup30");
let btn30= document.getElementById("btn30");
let span30= document.getElementById("close30");

btn30.onclick = function () {
    modal30.style.display = "block";
}

span30.onclick = function () {
    modal30.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal30) {
        modal30.style.display = "none";
    }
}

// Popup 31
let modal31= document.getElementById("popup31");
let btn31= document.getElementById("btn31");
let span31= document.getElementById("close31");

btn31.onclick= function () {
    modal31.style.display = "block";
}

span31.onclick= function () {
    modal31.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal31) {
        modal31.style.display = "none";
    }
}


// Popup 32
let modal32= document.getElementById("popup32");
let btn32= document.getElementById("btn32");
let span32= document.getElementById("close32");

btn32.onclick= function () {
    modal32.style.display = "block";
}

span32.onclick= function () {
    modal32.style.display = "none";
}

window.onclick= function (event) {
    if (event.target== modal32) {
        modal32.style.display = "none";
    }
}

// Popup 33
let modal33= document.getElementById("popup33");
let btn33= document.getElementById("btn33");
let span33= document.getElementById("close33");

btn33.onclick= function () {
    modal33.style.display= "block";
}

span33.onclick= function () {
    modal33.style.display= "none";
}

window.onclick = function (event) {
    if (event.target== modal33) {
        modal33.style.display = "none";
    }
}

// Popup 34
let modal34= document.getElementById("popup34");
let btn34= document.getElementById("btn34");
let span34= document.getElementById("close34");

btn34.onclick = function () {
    modal34.style.display = "block";
}

span34.onclick = function () {
    modal34.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal34) {
        modal34.style.display = "none";
    }
}

// Popup 35
let modal35= document.getElementById("popup35");
let btn35= document.getElementById("btn35");
let span35= document.getElementById("close35");

btn35.onclick = function () {
    modal35.style.display = "block";
}

span35.onclick = function () {
    modal35.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal35) {
        modal35.style.display = "none";
    }
}

// Popup 36
let modal36= document.getElementById("popup36");
let btn36= document.getElementById("btn36");
let span36= document.getElementById("close36");

btn36.onclick = function () {
    modal36.style.display = "block";
}

span36.onclick = function () {
    modal36.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal36) {
        modal36.style.display = "none";
    }
}


// Popup 37
let modal37= document.getElementById("popup37");
let btn37= document.getElementById("btn37");
let span37= document.getElementById("close37");

btn37.onclick = function () {
    modal37.style.display = "block";
}

span37.onclick = function () {
    modal37.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal37) {
        modal37.style.display = "none";
    }
}

// Popup 38
let modal38= document.getElementById("popup38");
let btn38= document.getElementById("btn38");
let span38= document.getElementById("close38");

btn38.onclick = function () {
    modal38.style.display = "block";
}

span38.onclick = function () {
    modal38.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal38) {
        modal38.style.display = "none";
    }
}




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
