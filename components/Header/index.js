// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContent = document.querySelector(".header-container");

function Header(date, title, temp,) {

    const mainHeader = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    mainHeader.appendChild(date);
    mainHeader.appendChild(title);
    mainHeader.appendChild(temp);

    mainHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'March 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return mainHeader;
}

mainHeader.appendChild(Header());