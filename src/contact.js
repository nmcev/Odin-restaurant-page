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

    const container = document.createElement('div');
    container.className = 'contact-container';

    const email = document.createElement('p')
    email.textContent = 'Email: fakeRestaurant@odin.com';
    email.className = 'email-form';
    container.appendChild(email)

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: +1xxx59995955';
    phoneNumber.className = 'email-form';
    container.appendChild(phoneNumber);

    const map = document.createElement('iframe')
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4997.579300620176!2d43.97669886969362!3d36.205280562213424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072382050033a5%3A0x50a0eec3fdb84e69!2z2q_Ysdin2YHbjNiq24wg2Kjbldix2q_bldixIC0gR3JhZmZpdGkgQnVyZ2Vy!5e0!3m2!1sen!2siq!4v1687373598428!5m2!1sen!2siq"; 
    // allowfullscreen = "" referrerpolicy = "no-referrer-when-downgrade'"
    map.width = "600";
    map.height = "450";
    map.style.border = 0;
    map.loading = "lazy";
    map.className = "map-frame"
    container.appendChild(map);
    contentDiv.appendChild(container);
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
        menuPage();
    });
    contactLi.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        contactPage();
    });
    homeLi.addEventListener('click', () => {
        contentDiv.innerHTML = '';
        createHomePage();
    });

    ulElement.appendChild(homeLi);
    ulElement.appendChild(menuLi);
    ulElement.appendChild(contactLi);

    ulDiv.appendChild(ulElement);
    contentDiv.appendChild(ulDiv);
};