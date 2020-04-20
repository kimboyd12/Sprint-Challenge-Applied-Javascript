// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log(res.data.articles);
        
        const articles = res.data.articles;
        Object.keys(articles).forEach(key => {
            articles[key].forEach(article => {
                cardsContainer.appendChild(createCard(article))
            })
        });
    })

function createCard(data) {

    // create elements
    const newCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContain = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span');

    // class lists
    newCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContain.classList.add('img-container');

    // content
    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    authName.textContent = `By: ${data.authorName}`;

    // appending
    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imgContain);
    imgContain.appendChild(image);
    author.appendChild(authName);

    return newCard;
}


