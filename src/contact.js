import { switchingTabs } from "./tabs";
export const contactPage = () => {
    const contentDiv = document.querySelector('#content');
    const formDiv = document.createElement('div');
    formDiv.classList.add("form-container");

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Page';
    h1.classList.add("contact-h1");
    contentDiv.appendChild(h1);


    contentDiv.appendChild(formDiv);
    contentDiv.appendChild(switchingTabs());
}