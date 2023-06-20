import { createHomePage } from './pageLoad.js'
import { switchingTabs } from './tabs.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';
import './styles/homePage.css';
import './styles/contactPage.css';
import './styles/menuPage.css';


document.addEventListener('DOMContentLoaded', () => {
    switchingTabs();
    createHomePage();
    menuPage();
    contactPage();
});