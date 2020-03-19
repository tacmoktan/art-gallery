
const header = document.querySelector('#header');
const logoImg = document.querySelector('#header-logo');
//resize logo width onscroll
window.onscroll = () => {
    if (window.pageYOffset > 130)
        logoImg.style.width = "100px";
    else
        logoImg.style.width = "150px";

}