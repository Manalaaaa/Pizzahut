const product = document.querySelector(".product");
let sags = document.querySelector(".sags");
let basketItems = ` <p
style="
  font-size: 26px;
  text-align: center;
  margin-top: 29px;
  color: rgb(66, 66, 66);
"
>
ТАНЫ САГС
</p><hr><a href=./zahialga.html class="zahialah">Захиалах</a>`;
let s = 0;

if (localStorage["price"]) s = JSON.parse(localStorage["price"]);

if (localStorage["baskets"]) {
  console.log("object");
  basketItems = JSON.parse(localStorage["baskets"]);
  console.log(basketItems);
} else localStorage["baskets"] = JSON.stringify(basketItems);

console.log(basketItems);
sags.innerHTML = basketItems;

const bagts = [
  {
    url: "./1.png",
    name: "Санта багц-2 давхар",
    price: 66000,
  },
  {
    url: "./2.png",
    name: "Санта багц-3 давхар",
    price: 88000,
  },
  {
    url: "./3.png",
    name: "Парти багц",
    price: 135000,
  },
  {
    url: "./4.png",
    name: "Triple deal",
    price: 90000,
  },
  {
    url: "./5.png",
    name: "Хос пицца",
    price: 60000,
  },
  {
    url: "./6.png",
    name: "Гурван сайхан",
    price: 88000,
  },
  {
    url: "./7.png",
    name: "Найзууд багц",
    price: 55000,
  },
  {
    url: "./8.png",
    name: "Миний багц",
    price: 15000,
  },
  {
    url: "./9.png",
    name: "Хүчирхэг багц",
    price: 46000,
  },
  {
    url: "./10.png",
    name: "Мөрөөдлийн багц",
    price: 42000,
  },
  {
    url: "./11.png",
    name: "Тахиатай Суприм багц",
    price: 40000,
  },
];

let niitBvteegdehvvn = "";
bagts.forEach((el) => {
  niitBvteegdehvvn += ` <div class="bagts1">
    <div class="bagts"><img style="width:100%" src=${el.url}>
    <div class="bagts-une">
    <div class="bagts-text">${el.name}</div>
    <button onclick="sags1('${el.name}')" class="button3">Сагсанд хийх</button>
    </div>
  </div`;
});
product.innerHTML = niitBvteegdehvvn;

function sags1(name) {
  const item = bagts.filter((el) => el.name == name);
  basketItems += `<p class="jj">${item[0].name} --- ${item[0].price}₮</p><hr class="ooo">`;
  localStorage["baskets"] = JSON.stringify(basketItems);
  sags.innerHTML = basketItems;

  s = s + item[0].price;
  localStorage["price"] = JSON.stringify(s);
  let une = document.querySelector(".zahialah");
  une.innerHTML = `<a href=./zahialga.html class="geing"">Захиалах ${s}</a>`;
}
