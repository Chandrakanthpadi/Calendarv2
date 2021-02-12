var lock = true;

function change(day) {
  if (day == "Sunday") return "Monday";
  if (day == "Monday") return "Tuesday";
  if (day == "Tuesday") return "Wednesday";
  if (day == "Wednesday") return "Thursday";
  if (day == "Thursday") return "Friday";
  if (day == "Friday") return "Satuarday";
  if (day == "Satuarday") return "Sunday";
}

function changedown(day) {
  if (day == "Sunday") return "Satuarday";
  if (day == "Monday") return "Sunday";
  if (day == "Tuesday") return "Monday";
  if (day == "Wednesday") return "Tuesday";
  if (day == "Thursday") return "Wednesday";
  if (day == "Friday") return "Thursday";
  if (day == "Satuarday") return "Friday";
}

window.addEventListener("keyup", (e) => {
  if (e.key == "l" || e.key == "L") {
    var but = document.getElementById("lock");
    lock = !lock;
    but.innerHTML = lock ? "Locked" : "Unlocked";
  }
  if (e.key == "ArrowUp" && lock == false) {
    for (var i = 0; i < 7; i++) {
      var div = document.getElementById(i.toString(10));
      div.innerHTML = change(div.innerHTML);
    }
  } else if (e.key == "ArrowDown" && lock == false) {
    for (var i = 0; i < 7; i++) {
      var div = document.getElementById(i.toString(10));
      div.innerHTML = changedown(div.innerHTML);
    }
  }
});

var first = document.getElementById("31");
first.addEventListener("click", () => {
  if (first.style.textDecoration == "")
    first.style = "text-decoration:line-through";
  else first.style.textDecoration = "";

  // first.innerHTML = first.innerHTML == "x" ? "31" : "x";
});

var second = document.getElementById("29");
second.addEventListener("click", () => {
  // second.innerHTML = second.innerHTML == "x" ? "29" : "x";

  second.style.textDecoration =
    second.style.textDecoration == "" ? "line-through" : "";
});

var third = document.getElementById("30");
third.addEventListener("click", () => {
  // third.innerHTML = third.innerHTML == "x" ? "30" : "x";
  third.style.textDecoration =
    third.style.textDecoration == "" ? "line-through" : "";
});
