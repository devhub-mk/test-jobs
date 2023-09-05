let counter = 0;
const items = document.querySelectorAll(".carousel-item");

(function() {
  const counterDiv = document.querySelector(".counter");
  counter = Math.ceil(items.length / 2);
  items[counter - 1].classList.add("active-item");
  for (let i = 0; i < items.length; i++) {
    let counterChild = document.createElement("div");
    counterChild.classList.add("counter-value");
    counterChild.innerText = i + 1;
    counterDiv.appendChild(counterChild);
  }
  const counterChild = document.querySelectorAll(".counter-value");
  counterChild[counter - 1].classList.add("active-value");
})();

// function to set active element and remove active classes
const setActive = () => {
  counterValues = document.querySelectorAll(".counter-value");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active-item");
    counterValues[i].classList.remove("active-value");
    items[counter - 1].classList.add("active-item");
    counterValues[counter - 1].classList.add("active-value");
    if (counter == items.length) {
      document.getElementById("nav-next").classList.add("disable");
      document.getElementById("nav-prev").classList.remove("disable");
    } else if (counter == 1) {
      document.getElementById("nav-prev").classList.add("disable");
      document.getElementById("nav-next").classList.remove("disable");
    } else {
      document.getElementById("nav-prev").classList.remove("disable");
      document.getElementById("nav-next").classList.remove("disable");
    }
  }
};

// Previous button 
document.getElementById("nav-prev").addEventListener("click", () => {
  if (counter > 1) {
    counter -= 1;
    setActive();
  }
});

// Next button
document.getElementById("nav-next").addEventListener("click", () => {
  if (counter < items.length) {
    counter += 1;
    setActive();
  }
});

// counter values
const valueArray = document.querySelectorAll(".counter-value");
Array.from(valueArray).forEach((element) => {
  element.addEventListener("click", (e) => {
    counter = parseInt(e.target.innerText);
    setActive();
  });
});

//
//
