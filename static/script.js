/* Abre e fecha menu lateral em modo mobile */


const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active")
});

/*Fecha o menu qunado clicar em algum item e muda o ícone para list*/

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

/* Animar todos os itens na tela que tiverem meu atributo data-anime */

const item = document.querySelectorAll("[data-anime]");

const animeScrool = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.80;
    
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScrool();

window.addEventListener("scroll", ()=>{
    animeScrool();
})