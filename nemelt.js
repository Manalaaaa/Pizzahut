const product = document.querySelector(".product");
let sags = document.querySelector(".sags");
let basketItems = `  <p
  style="
    font-size: 26px;
    text-align: center;
    margin-top: 29px;
    color: rgb(66, 66, 66);
    
  "
  >
  ТАНЫ САГС
  </p><hr> 
   <a href=./zahialga.html class="zahialah">Захиалах</a>`;
let s = 0;

if (localStorage["price"]) s = JSON.parse(localStorage["price"]);

if (localStorage["baskets"]) {
  console.log("object");
  basketItems = JSON.parse(localStorage["baskets"]);
  console.log(basketItems);
} else localStorage["baskets"] = JSON.stringify(basketItems);

console.log(basketItems);
sags.innerHTML = basketItems;

const nemelt = [
  {
    url: "./n1.png",
    name: "Попкорн тахиа",
    price: 8000,
  },
  {
    url: "./n2.png",
    name: "Саран төмс",
    price: 6000,
  },
  {
    url: "./n3.png",
    name: "Мелтс ",
    price: 11000,
  },
  {
    url: "./n4.png",
    name: "Тахианы бугалга",
    price: 15000,
  },
  {
    url: "./n5.png",
    name: "Бяслагтай ороомог",
    price: 9000,
  },
  {
    url: "./n6.png",
    name: "Тахианы мөч",
    price: 8000,
  },
  {
    url: "./n7.png",
    name: "Попкорн тахиа",
    price: 13000,
  },
  {
    url: "./n8.png",
    name: "Наггет",
    price: 8000,
  },
  {
    url: "./n9.png",
    name: "Калзоне",
    price: 10000,
  },
  {
    url: "./n10.png",
    name: "Калзоне тахиа",
    price: 10000,
  },
  {
    url: "./n11.png",
    name: "Шорлог",
    price: 13000,
  },
  {
    url: "./n12.png",
    name: "Баялаг төмс",
    price: 8000,
  },
  {
    url: "./n13.png",
    name: "Шарсан төмс",
    price: 6000,
  },
  {
    url: "./n14.png",
    name: "Дессерт пицца",
    price: 7000,
  },
  {
    url: "./n15.png",
    name: "Чоко попс",
    price: 5000,
  },
  {
    url: "./n16.png",
    name: "Зайдастай ороомог",
    price: 6000,
  },
];

let niitBvteegdehvvn = "";
nemelt.forEach((el) => {
  niitBvteegdehvvn += ` <div class="nemelt">
    <div class="image"><img style="width:100%" src=${el.url}>
    <div class="bagts-une3">
    <div class="bagts-text">${el.name}</div>
    <button onclick="sags1('${el.name}')" class="button3">Сагсанд хийх</button>
    </div>
  </div`;
});
product.innerHTML = niitBvteegdehvvn;

function sags1(name) {
  const item = nemelt.filter((el) => el.name == name);
  basketItems += `<p class="jj">${item[0].name} --- ${item[0].price}₮</p><hr class="ooo">`;

  sags.innerHTML = basketItems;
  s = s + item[0].price;

  localStorage["price"] = JSON.stringify(s);

  localStorage["baskets"] = JSON.stringify(basketItems);
  let une = document.querySelector(".zahialah");
  une.innerHTML = `<a href=./zahialga.html class="geing"">Захиалах ${s}</a>`;
}
