// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function articleMaker(article) {
    const card = document.createElement('div');
    const headL = document.createElement('div');
    const author = document.createElement('div');
    const imgC = document.createElement('div');
    const image = document.createElement('img');
    const authorN = document.createElement('span');


card.classList.add('card');
headL.classList.add('headline');
author.classList.add('author');
imgC.classList.add('img-container')

imgC.appendChild(image);
author.append(imgC, authorN);
card.append(headL, author)

headL.textContent = article.headline;
authorN.textContent = article.authorN;
image.src = article.authorPhoto;

return card 
}


const CardC = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    let articleC = response.data.articles;
    console.log(articleC);
    Object.entries(articleC).forEach((articleloop) => {
        console.log(articleloop[1]);
        articleloop[1].forEach((articles) => 
        CardC.appendChild(articleMaker(articles))
    );
});
})

