import { menuPage } from './menu.js';
import { createHomePage } from './pageLoad.js';
export const contactPage = () => {
    const contentDiv = document.querySelector('#content');
    const formDiv = document.createElement('div');
    formDiv.classList.add("form-container");

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Page';
    h1.classList.add("contact-h1");
    contentDiv.appendChild(h1);
    createTabs()

    contentDiv.appendChild(formDiv);
}

function createTabs() {
    const contentDiv = document.querySelector('#content');
    const ulDiv = document.createElement('div');

    const ulElement = document.createElement('ul');
    ulElement.className = 'ul-list'

    const homeLi = document.createElement('li');
    const menuLi = document.createElement('li');
    const contactLi = document.createElement('li');

    homeLi.id = 'home';
    menuLi.id = 'menu';
    contactLi.id = 'contact';

    const liElements = [homeLi, menuLi, contactLi];

    liElements.forEach(li => {
        li.style.cursor = 'pointer';
        li.className = "li hover-underline-animation"
    });

    homeLi.textContent = 'Home';
    menuLi.textContent = 'Menu';
    contactLi.textContent = 'Contact';



    menuLi.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(menuPage());
    });
    contactLi.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(contactPage());
    });
    homeLi.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        const homepageContent = createHomePage();
        contentDiv.appendChild(homepageContent);
    });

    ulElement.appendChild(homeLi);
    ulElement.appendChild(menuLi);
    ulElement.appendChild(contactLi);

    ulDiv.appendChild(ulElement);
    contentDiv.appendChild(ulDiv);
};