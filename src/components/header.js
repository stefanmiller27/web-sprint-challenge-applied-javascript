const Header = (title, date, temp) => {

  const headerNode = document.createElement("div");
  const dateNode = document.createElement("span");
  const titleNode = document.createElement("h1");
  const tempNode = document.createElement("span");

  headerNode.classList.add("header");
  dateNode.classList.add("date");
  tempNode.classList.add("temp");

  dateNode.textContent = date;
  titleNode.textContent = title;
  tempNode.textContent = temp;


  headerNode.appendChild(dateNode);
  headerNode.appendChild(titleNode);
  headerNode.appendChild(tempNode);

  return headerNode
};

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {

  const parentElement = document.querySelector(selector);
  const HeaderElement = Header('Bloom Times', Date.now(), '26"');


  parentElement.appendChild(HeaderElement);

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
