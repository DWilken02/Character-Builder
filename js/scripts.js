function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("gender").value;
  document.querySelector("#output").innerText = "Gender: " + selection;

};

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  document.getElementById("date-of-birth").addEventListener("submit", datechange);
  document.getElementById("color-form").addEventListener("submit", favoritecolor);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='trait']:checked").value;
  document.querySelector("#output").innerText += "\nTrait: " + radioSelection;
}

function datechange(event) {
  event.preventDefault();
  const dob = document.querySelector("input[type='date']").value;
  document.querySelector("#output").innerText += "\nBorn: " + dob;
}

function favoritecolor(event) {
  event.preventDefault();
  const color = document.querySelector("#color").value;
  document.querySelector("#output").innerText += "\nColor: " + color;
  if (color == "#4254f5") {
    document.body.style.backgroundColor=color;
  }
}