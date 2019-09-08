const btn = document.querySelector(".btn");
const input = document.querySelector('.content__input-container');
const inputEmail = document.getElementById("input-email");
const msg = document.getElementById("error-msg");

const checkEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputEmail.value).toLowerCase());
};

btn.addEventListener("click", event => {
  event.preventDefault();

  if (inputEmail.value === "" || !checkEmail) {
    input.classList.add("input-error");
    msg.style.display = "block";
  } else {
    input.classList.remove("input-error");
    msg.style.display = "none";
    inputEmail.value = "";
  }
});
