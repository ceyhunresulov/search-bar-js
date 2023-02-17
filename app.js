let data = [
  {
    id: 1,
    title: "Notbuk Apple MacBook Pro 13 MNEP3RU/A Silver",
    img: "apple2.jpg",
    price: 3500,
  },
  {
    id: 2,
    title: "Notbuk HP Pavilion Aero 13-BE0020UR (5R2Z9EA)",
    img: "hp2.jpg",
    price: 1900,
  },
  {
    id: 3,
    title: "Notbuk HUAWEI MateBook D 16 Space Gray (53013JHP)",
    img: "huawei.jpg",
    price: 2070,
  },
  {
    id: 4,
    title: "Notbuk Asus VivoBook S15 OLED M3205QA-MA117 (90NB0XX2-M00510)",
    img: "asus.jpg",
    price: 1900,
  },
  {
    id: 5,
    title: "Noutbuk Acer Aspire 3 A315-35-C95V (NX.A6LER.00H)",
    img: "acer.jpg",
    price: 750,
  },
  {
    id: 6,
    title: "Notbuk Asus TUF Dash F15 2022 FX517Z-AS73 (90NR09Q3-M004E0)",
    img: "asus2.jpg",
    price: 3330,
  },
  {
    id: 7,
    title: "Notbuk HP Pavilion 14-DV0023UR (4C9W6EA)",
    img: "hp.jpg",
    price: 1400,
  },
  {
    id: 8,
    title: "Notbuk Lenovo IdeaPad 3 15ITL6 (82H801R1RK)",
    img: "lenovo.jpg",
    price: 2000,
  },
  {
    id: 9,
    title: "Notbuk Dell Vostro 3510 P112F (3510273851879)",
    img: "dell.jpg",
    price: 1800,
  },
  {
    id: 10,
    title: "Notbuk Lenovo IdeaPad Gaming 3 15IHU6 (82K100H3RK)",
    img: "lenovo2.jpg",
    price: 1650,
  },
  {
    id: 11,
    title: "Notbuk Apple MacBook Pro 16 MNWD3RU/A Silver",
    img: "apple.jpg",
    price: 6530,
  },
  {
    id: 12,
    title: "Notbuk Acer Aspire A515-44G-R2JQ (NX.HW2ER.005)",
    img: "acer2.jpg",
    price: 1330,
  },
];

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
