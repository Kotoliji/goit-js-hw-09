

const form = document.querySelector(".feedback-form");

document.body.style.height = "100%";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent ="center"

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "15px";
form.style.width = "300px";
form.style.padding = "15px";
form.style.border = "1px solid #ccc";
form.style.borderRadius = "10px";
form.style.backgroundColor = "#fff";

const button = document.querySelector("button")

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
})
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#C0C0C0";
})


form.addEventListener("input", () => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const file = {
      email,
      message,
    };
    saveEmail("key1", file);
  });
  
  function saveEmail(key, value) {
    const zip = JSON.stringify(value); 
    localStorage.setItem(key, zip); 
  }
  