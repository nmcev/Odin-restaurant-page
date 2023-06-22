import { createHomePage } from './pageLoad.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

export function switchingTabs() {
    const contentDiv = document.querySelector('#content');
    const ulDiv = document.createElement('div');

    const ulElement = document.createElement('ul');
    ulElement.className = 'ul-list-home'

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
}