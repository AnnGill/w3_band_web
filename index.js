// Ticket buy button event

const buyBtns = document.querySelectorAll('.js-buy-tickets')
const getModal = document.querySelector('.modal-tickets')
const btnCloses = document.querySelectorAll('.js-modal-close')
const getModalContainer = document.querySelector('.js-modal-container')

function showModalTickets() {
    getModal.classList.add('open')
}

function hideModalTickets() {
    getModal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModalTickets)
}

for (const buyClose of btnCloses) {
    buyClose.addEventListener('click', hideModalTickets)
}

getModalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


// Menu btn event Open/Close
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');

var headerHeigth = header.clientHeight;
var checkheader = true

console.log(mobileMenu)
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeigth;
    if(isClose) {
        header.style.height = 'auto';
        checkheader = false;
    } else {
        header.style.height = null;
        checkheader = true;
    }

    checkHoverBtnMenu(checkheader);
}

// Auto close whrn click element in menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(var i=0; i< menuItems.length; ++i) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if(isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
            checkheader = true;
        }
        checkHoverBtnMenu(checkheader);
        
    }
}

var checkHoverBtnMenu = function(condition) {
    if(condition) {
        mobileMenu.classList.remove('mobile-menu-btn-hover');
        mobileMenu.classList.add('mobile-menu-btn');
    } else {
        mobileMenu.classList.remove('mobile-menu-btn');
        mobileMenu.classList.add('mobile-menu-btn-hover');
    }
}

var firstSlider = document.querySelector('.slider1');
var secondSlider = document.querySelector('.slider2');
var thirdSlider = document.querySelector('.slider3');
var indexSlider = 1;

setInterval(() => {
    if(indexSlider === 1) {
        thirdSlider.style.display = 'none';
        firstSlider.style.display = 'block';
        indexSlider++;
    } else if (indexSlider === 2) {
        firstSlider.style.display = 'none';
        secondSlider.style.display = 'block';
        indexSlider++;
    } else {
        secondSlider.style.display = 'none';
        thirdSlider.style.display = 'block';
        indexSlider = 1;
    }
}, 2000);