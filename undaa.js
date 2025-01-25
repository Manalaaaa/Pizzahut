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
const undaa = [
  {
    url: "./u1.png",
    name: "CocaCola",
    price: 6000,
  },
  {
    url: "./u2.png",
    name: "Sprite",
    price: 6000,
  },
  {
    url: "./u3.png",
    name: "Fanta",
    price: 6000,
  },
  {
    url: "./u4.png",
    name: "CocaCola Zero",
    price: 6000,
  },
  {
    url: "./u5.png",
    name: "CocaCola",
    price: 6000,
  },
  {
    url: "./u7.png",
    name: "Fanta",
    price: 3000,
  },
  {
    url: "./u8.png",
    name: "CocaCola Zero",
    price: 3000,
  },
  {
    url: "./u9.png",
    name: "Fuzetea",
    price: 6000,
  },
  {
    url: "./u10.png",
    name: "Pure Water",
    price: 2000,
  },
];

let niitBvteegdehvvn = "";
undaa.forEach((el) => {
  niitBvteegdehvvn += ` <div class="undaa">
    <div class="u-zurag"><img style="width:100%" src=${el.url}>
    <div class="bagts-une4">
    <div class="bagts-text">${el.name}</div>
    <button onclick="sags1('${el.name}')" class="button4">Сагсанд хийх</button>
    </div>
  </div`;
});
product.innerHTML = niitBvteegdehvvn;

function sags1(name) {
  const item = undaa.filter((el) => el.name == name);

  basketItems += `<p class="jj">${item[0].name} ---- ${item[0].price}₮  </p><hr class="ooo">`;
  s = s + item[0].price;

  localStorage["price"] = JSON.stringify(s);
  sags.innerHTML = basketItems;

  localStorage["baskets"] = JSON.stringify(basketItems);
  let une = document.querySelector(".zahialah");
  une.innerHTML = `<a href=./zahialga.html class="geing">Захиалах ${s}<a>`;
}
