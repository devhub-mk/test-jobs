document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const date1 = document.querySelector("#date-1").value;
    const date2 = document.querySelector("#date-2").value;
    const display = document.querySelector(".display");

    const getDate1 = new Date(date1);
    const getDate2 = new Date(date2);
    
    const getTimeDiff = Math.abs(getDate2.getTime() - getDate1.getTime());
    days = getTimeDiff / (1000 * 60 * 60 * 24);
    months = getTimeDiff / (1000 * 60 * 60 * 24 * 30);
    years = getTimeDiff / (1000 * 60 * 60 * 24 * 365);

    if (days < 31) {
      display.textContent = `${days} days`;
    } else if (days > 30 && months < 12) {
      display.textContent = `${Math.floor(months)} months, ${Math.floor(
        days % 30
      )} days`;
    } else if (days > 30 && months > 12) {
      display.textContent = `${Math.floor(years)} years, ${Math.floor(
        months % 12
      )} months, ${Math.floor(days % 30)} days`;
    } else {
      display.textContent = "OOPs something went wrong";
    }
  });