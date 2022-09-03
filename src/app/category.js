import bread from "./../assets/bread.png";
import snacks from "./../assets/snacks.png";
import drinks from "./../assets/drinks.png";
import food from "./../assets/food.png";
import fruits from "./../assets/fruits.png";
import pastry from "./../assets/pastry.png";
import meat from "./../assets/meat.png";

export const category = [
  {
    name: "bread",
    img: bread,
    desc: "Hot bakes bread that you love",
  },
  {
    name: "snacks",
    img: snacks,
    desc: "Amazinf and tasty snacks",
  },
  {
    name: "drinks",
    img: drinks,
    desc: "Get your throats wet with good tasty drinks",
  },
  {
    name: "food",
    img: food,
    desc: "Food from restaurant you love",
  },
  {
    name: "fruits",
    img: fruits,
    desc: "Enjoy natures goodies to you and stay healthy",
  },
  {
    name: "pastry",
    img: pastry,
    desc: "enjoy variety of tasty pastries ",
  },
  {
    name: "meat",
    img: meat,
    desc: "Eat and enjoy good protein for your health",
  },
];

export const categoryNode = (data) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const h3 = document.createElement("h3");

  img.src = data.img;
  p.innerHTML = data.desc;
  h3.innerHTML = data.name;

  div.classList.add("category_card");

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
};
