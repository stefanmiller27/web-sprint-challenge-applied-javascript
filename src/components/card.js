import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardNode = document.createElement("div");
  const headlineNode = document.createElement("div");
  const authorContainerNode = document.createElement("div");
  const imgContainerNode = document.createElement("div");
  const imgNode = document.createElement("img");
  const authorNode = document.createElement("span");

  cardNode.appendChild(headlineNode);
  cardNode.appendChild(authorContainerNode);
  authorContainerNode.appendChild(imgContainerNode);
  imgContainerNode.appendChild(imgNode);

  cardNode.classList.add("card");
  headlineNode.classList.add("headline");
  authorContainerNode.classList.add("author");
  imgContainerNode.classList.add("img-container");
  
  headlineNode.textContent = article.headline;
  imgNode.src = article.authorPhoto;
  authorNode.textContent = article.authorName;
  authorContainerNode.appendChild(authorNode);

  //dont understand why my test aren't passing for 8 and 9 I feel I'm returning the correct author and image accordingly.

  cardNode.addEventListener(
    "click",
    () => console.log("article.headline"),
    false
  );

  return cardNode;
};




const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const parentElement = document.querySelector(selector);

  axios.get("http://localhost:5000/api/articles")
  .then((res) => {
    const sanitized = Object.values(res.data.articles).flat();
    sanitized.forEach((a) => parentElement.appendChild(Card(a)));
  })
  .catch((err) => {
    console.error(err);
  });


}

export { Card, cardAppender }
