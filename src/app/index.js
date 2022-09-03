import "../styles/input.scss";
import imgLeft from "../assets/jumiafood-left.png";
import imgRight from "../assets/jumiafood-right.jpeg";
import product from "../assets/product.svg";
import location from "../assets/location.svg";
import deliver from "../assets/deliver.svg";
import ads from "../assets/food-ads.jpeg";
import ios from "../assets/ios.svg";
import android from "../assets/android.svg";
import phone from "../assets/food-phone.png";
import { categoryNode, category } from "./category";
import setAddress from "./form";

document.getElementById("img_left").src = imgLeft;
document.getElementById("img_right").src = imgRight;
document.getElementById("product").src = product;
document.getElementById("location").src = location;
document.getElementById("deliver").src = deliver;
document.getElementById("ios").src = ios;
document.getElementById("android").src = android;
document.getElementById("ads").src = ads;
document.getElementById("phone").src = phone;
const form = document.getElementById("form");
const err_msg = document.createElement("p");

// get address from local storage
const delivery_address = localStorage.getItem("address");

if (delivery_address === "" || delivery_address === null) {
  // form

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const address = form.delivery_address.value;

    setAddress(address, form, err_msg);
    document.getElementById("delivery_address_set").innerHTML = " " + address;
  });
} else {
  document.getElementById("delivery_address_set").innerHTML =
    " " + delivery_address;
  form.delivery_address.style.display = "none";
  form.submit.style.display = "none";
  document.getElementById("category").style.opacity = 1;

  document.getElementById("change").addEventListener("click", () => {
    form.delivery_address.style.display = "block";
    form.submit.style.display = "block";
    document.getElementById("category").style.opacity = 0.1;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const address = form.delivery_address.value;

      setAddress(address, form, err_msg);
      document.getElementById("delivery_address_set").innerHTML = " " + address;
    });
  });
}

// category
for (let i = 0; i < category.length; i++) {
  const categoryTemplate = categoryNode(category[i]);

  document.getElementById("category").appendChild(categoryTemplate);
}
