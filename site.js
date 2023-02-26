//Header
const header = document.querySelector('.header');

const navbar = `<div class="navbar__container">
            <a href="index.html" id="navbar__logo"><img src="imagens/logo.png" alt="logo"></a>
            <div class="navbar__toggle" id="mobile-menu">
              <span class="bar"></span> 
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
              <li class="navbar__item">
                <a href="index.html" class="navbar__links" id="home-page">Home</a>
              </li>
              <li class="navbar__item">
                <a href="aboutme.html" class="navbar__links" id="about-page">Sobre Mim</a>
              </li>
              <li class="navbar__item">
                <a href="services.html" class="navbar__links" id="services-page">Serviços</a>
              </li>
              <li class="navbar__item">
                <a href="linhadotempo.html" class="navbar__links" id="services-page">Minha Jornada</a>
              </li>
              <li class="navbar__btn">
                <a href="https://wa.me/5598984666133" class="button" id="signup"> <i class="fab fa-whatsapp"></i>Entre em contato</a>
              </li>
            </ul>
          </div>`;

header.innerHTML += navbar;

// Display Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Footer
const footer = document.querySelector('.footer');

const footerContent = `<div class="footer_container">
                        
                          <p class="footer-title">Andressa Vandri</p>
                          <p>Todos os direitos reservados &copy</p>
                       
                        <div class="footer_icons_container">
                          <a href="https://wa.me/5598984666133"><i class="fab fa-whatsapp"></i></a>
                          <a href="https://www.instagram.com/andressavandri/"><i class="fab fa-instagram"></i></a>
                        </div>
                      </div>`;

footer.innerHTML += footerContent;

//Services card
const cards = [
  {
    id:1,
    title: 'Psicoterapia',
    img: 'imagens/card1.webp',
    text: 'Atendimentos On-line (+18).',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdVNWBLrGqoaL_1-42-lzwSKcRmZZlCtCcv2gx36_QGfsCNmg/viewform',
    linkText: 'Preencha o formulário'
  }
];

const serviceCard = document.getElementById('services');

const addCards = () => {
  const insertServicesCards = cards.map((item) => {
    return `<div class="card">
                <h3>${item.title}</h3>
                <div class="card_container">
                    <img src=${item.img} alt="${item.title}">
                    <p>${item.text}</p>
                    <a href="${item.link}" target="_blank">${item.linkText}</a>
                </div>
            </div>`
  }).join('')
  console.log(insertServicesCards)
  serviceCard.innerHTML = insertServicesCards
}

window.addEventListener('DOMContentLoaded', addCards)

