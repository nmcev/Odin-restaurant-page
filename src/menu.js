import { switchingTabs } from "./tabs";
export function menuPage() {
    const contentDiv = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = "Menu page";
    h1.classList.add("menu-h1");

    const cards = document.createElement('div');

    contentDiv.appendChild(cards);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(switchingTabs())
}