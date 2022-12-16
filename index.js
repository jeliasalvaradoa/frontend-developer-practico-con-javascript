const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() { 
    // quita o pone la clase inactive para que aparezca el desktop-menu
    desktopMenu.classList.toggle('inactive');
}