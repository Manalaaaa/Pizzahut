const product = document.querySelector(".product");
let sags = document.querySelector(".sags");

let basketItems = `<p
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

const pizza = [
  {
    url: "./p1.png",
    name: "Махан Бөмбөлөгт пицца",
    price: 11000,
  },
  {
    url: "./p2.png",
    name: "Хүчирхэг",
    price: 34000,
  },
  {
    url: "./p3.png",
    name: "Маханд дурлагсад",
    price: 34000,
  },
  {
    url: "./p4.png",
    name: "Супер суприм",
    price: 34000,
  },
  {
    url: "./p5.png",
    name: "Пепперони",
    price: 34000,
  },
  {
    url: "./p6.png",
    name: "BBQ тахиа",
    price: 32000,
  },
  {
    url: "./p7.png",
    name: "Хавайн",
    price: 32000,
  },
  {
    url: "./p8.png",
    name: "Бяслагт",
    price: 32000,
  },
  {
    url: "./p9.png",
    name: "Ногоонд дурлагсад",
    price: 32000,
  },
  {
    url: "./p10.png",
    name: "Пепперони & Бяслагт",
    price: 32000,
  },
  {
    url: "./p11.png",
    name: "Супер Суприм & Бяслагт",
    price: 34000,
  },
  {
    url: "./p12.png",
    name: "Маханд Дурлагсад & Бяслагт", 
    price: 34000,
  },
];
let niitBvteegdehvvn = "";
pizza.forEach((el) => {
  niitBvteegdehvvn += ` <div class="pizza">
      <div class="zurag"><img style="width:100%" src=${el.url}>
      <div class="bagts-une2">
      <div class = "text2">${el.name}</div>
      <button onclick="sags1('${el.name}')" class="button2">Сагсанд хийх</button>
      </div>
    </div`;
});

product.innerHTML = niitBvteegdehvvn;

function sags1(name) {
  const item = pizza.filter((el) => el.name == name);

  basketItems += `<p class="jj">${item[0].name} --- ${item[0].price}₮</p><hr class="ooo">`;
  s = s + item[0].price;

  localStorage["price"] = JSON.stringify(s);
  sags.innerHTML = basketItems;

  localStorage["baskets"] = JSON.stringify(basketItems);
  let une = document.querySelector(".zahialah");
  une.innerHTML = `<a href=./zahialga.html class="geing"">Захиалах ${s}</a>`;
}
