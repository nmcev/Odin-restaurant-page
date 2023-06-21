import { switchingTabs } from "./tabs.js"
export function menuPage() {
    const contentDiv = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = "Menu page";
    h1.classList.add("menu-h1");
    // appending the card in the menu page ,
    contentDiv.appendChild(h1);
    contentDiv.appendChild(switchingTabs())
};
function createCard() {
    const contentDiv = document.querySelector('#content');
    // card
    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cards');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('card-img');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    cardImgDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardImgDiv);
    const cardTitleDiv = document.createElement('div');
    cardTitleDiv.classList.add('card-title');
    cardTitleDiv.textContent = ` cheese Burger`;
    cardDiv.appendChild(cardTitleDiv);

    const cardSubtitleDiv = document.createElement('div');
    cardSubtitleDiv.classList.add('card-subtitle');
    cardSubtitleDiv.textContent = "lorem akjfhafdh kalsjdflkj  sthis this ";
    cardDiv.appendChild(cardSubtitleDiv);

    const hr = document.createElement('hr');
    hr.classList.add('card-divider');
    cardDiv.appendChild(hr);

    const cardFooterDiv = document.createElement('div');
    cardFooterDiv.classList.add('card-footer');
    cardDiv.appendChild(cardFooterDiv);
    const cardPriceDiv = document.createElement('div');
    cardPriceDiv.classList.add('card-price');
    const dollarSpan = document.createElement('span');
    dollarSpan.textContent = '$';
    cardPriceDiv.appendChild(dollarSpan);
    cardPriceDiv.innerHTML += `5.99`;
    cardFooterDiv.appendChild(cardPriceDiv);
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('card-btn');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 512 512');
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'm397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'm222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z');
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'm368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z');
    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'm158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z');
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(path4);
    cardBtn.appendChild(svg);
    cardFooterDiv.appendChild(cardBtn);
    cardsDiv.appendChild(cardDiv);
    contentDiv.appendChild(cardsDiv);
    // /card ends 
}