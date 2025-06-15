const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(ValidateData()) {
    window.location.href = "home.html";
  }
});

function ValidateData() {
  const firstName = document.querySelector("input[type='text']");
  const errorMessage = document.createElement("div"); 

  errorMessage.style.color = "Red";
  errorMessage.style.textAlign = "center";

  if (firstName.value.length < 5) {
    errorMessage.textContent = "Name must be at least 5 characters.";
    form.appendChild(errorMessage); 
    return false;
  }

  form.appendChild(errorMessage);
  return true;
}