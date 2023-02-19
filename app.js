import { data } from "./database/data.js";

const cards = document.querySelector(".cards");
const input = document.querySelector(".search-input");

input.addEventListener("keyup", (e) => {
  let newData = data.filter((item) =>
    item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  fillCards(newData);
});

function fillCards(newData) {
  cards.innerHTML = "";
  newData.map((item) => {
    createCard(item.img, item.title, item.price);
  });
}
fillCards(data);

function createCard(imgName, productName, priceValue) {
  // create elements
  const card = document.createElement("div");
  const imgBox = document.createElement("div");
  const img = document.createElement("img");
  const infoBox = document.createElement("div");
  const name = document.createElement("h1");
  const cardFooter = document.createElement("div");
  const price = document.createElement("span");
  const btn = document.createElement("button");

  // add class
  card.classList.add("card");
  imgBox.classList.add("img-box");
  infoBox.classList.add("info-box");
  name.classList.add("name");
  cardFooter.classList.add("card-footer");
  price.classList.add("price");
  btn.classList.add("btn");

  // add value in elements
  img.setAttribute("src", `./images/${imgName}`);
  name.innerHTML = productName;
  price.innerHTML = priceValue + "$";
  btn.innerHTML = "Buy";

  // add child elements
  imgBox.appendChild(img);
  infoBox.appendChild(name);
  cardFooter.appendChild(price);
  cardFooter.appendChild(btn);
  infoBox.appendChild(cardFooter);
  card.appendChild(imgBox);
  card.appendChild(infoBox);
  cards.appendChild(card);
}
