//THE VARIABLES
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var noModalButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// THE FUNCTIONS
function openModal() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    }, 700);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    }, 700);
}

function openMobileNav() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
    setTimeout(function () {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    }, 600);
}

function closeMobileNav() {
    // mobileNav.style.display = 'none';
    // backdrop.style.display = 'none';
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = 'none';
        mobileNav.style.display = 'none';
    }, 600);
}

// MODAL EVENT LISTENERS
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', openModal);
    backdrop.addEventListener('click', closeModal);
    noModalButton.addEventListener('click', closeModal);
}

// MOBILE NAV EVENT LISTENERS
toggleButton.addEventListener('click', openMobileNav);
backdrop.addEventListener('click', closeMobileNav);