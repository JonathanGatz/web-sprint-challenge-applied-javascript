// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const d1 = document.createElement('div');
    const sp1 = document.createElement('span');
    const mainH = document.createElement('h1');
    const sp2 = document.createElement('span')

d1.classList.add('header');
sp1.classList.add('date');
sp2.classList.add('temp');

sp1.textContent = "MARCH 28, 2020"
mainH.textContent = "Lambda Times"
sp2.textContent = "98°"


d1.appendChild(sp1);
d1.appendChild(mainH);
d1.appendChild(sp2);

return d1;
}


const headerC = document.querySelector('div.header-container');
headerC.appendChild(Header())