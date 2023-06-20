import { switchingTabs } from "./tabs";

export function createHomePage() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''

    const homepageContainer = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';
    heading.className = "welcome"
    homepageContainer.appendChild(heading);

   


    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the finest flavors and culinary delights at our restaurant. Our talented chefs create mouthwatering dishes using the freshest ingredients sourced locally.';
    paragraph.className = "paragraph"
    homepageContainer.appendChild(paragraph);

    contentDiv.appendChild(homepageContainer);
    contentDiv.appendChild(switchingTabs());
}