import contries from "/js/contries.js";
const selectCounty = document.getElementById("country");

contries.forEach((country) => {
  let optionElement = document.createElement("option");
  optionElement.value = country.value;
  optionElement.text = country.text;
  selectCounty.appendChild(optionElement);
});

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.getElementById("userForm");
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .then((data) => {
      alert(data.message);
      form.reset();
    })
    .catch((error) => console.error("Error:", error));
});
