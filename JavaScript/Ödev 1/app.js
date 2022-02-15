const nameInput = document.querySelector("#myName");
let userName = prompt("Please input your name");

nameInput.innerHTML = userName;

(function () {
  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function startTime() {
    var dateObj = new Date();
    var weekday = dateObj.toLocaleString("tr", { weekday: "long" }),
      h = checkTime(dateObj.getHours()),
      m = checkTime(dateObj.getMinutes()),
      s = checkTime(dateObj.getSeconds());
    document.querySelector(".clock").innerHTML =
      h + ":" + m + ":" + s + " " + weekday;
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  startTime();
})();
