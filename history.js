let historyList = document.getElementById("history-list");

let moods = JSON.parse(localStorage.getItem("moods"));

if (!moods || moods.length === 0) {
  historyList.innerHTML = "<p>No moods recorded yet.</p>";
} else {
  for (let i = 0; i < moods.length; i++) {
    let entry = moods[i];

    let card = document.createElement("div");

    card.innerHTML =
      "<h3>" +
      entry.mood +
      "</h3>" +
      "<p>" +
      (entry.note || "") +
      "</p>" +
      "<small>" +
      entry.date +
      "</small>";

    historyList.appendChild(card);
  }
}

let clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = function () {
  let confirmClear = confirm("Are you sure you want to clear all mood history?");

  if (confirmClear) {
    localStorage.removeItem("moods");

    document.getElementById("history-list").innerHTML =
      "<p>No moods recorded yet.</p>";
  }
};
