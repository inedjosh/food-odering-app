const setAddress = (address, form, err_msg) => {
  if (address.length < 5) {
    err_msg.innerHTML = "Please enter a valid address!";

    form.appendChild(err_msg);
  } else {
    err_msg.innerHTML = "";
    localStorage.setItem("address", address);
    document.getElementById("category").style.opacity = 1;
    form.delivery_address.style.display = "none";
    form.submit.style.display = "none";
  }
};

export default setAddress;
