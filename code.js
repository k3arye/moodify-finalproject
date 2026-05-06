// TRACKER PAGE LOGIC

let saveBtn = document.getElementById("saveBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", function () {
    // 1. get selected mood
    let selected = document.querySelector('input[name="mood"]:checked');

    if (!selected) {
      alert("Please select a mood!");
      return;
    }

    let mood = selected.value;

    // 2. get note
    let note = document.getElementById("note").value;

    // 3. get date (or fallback)
    let dateInput = document.getElementById("date").value;
    let date = dateInput || new Date().toLocaleDateString();

    // 4. get existing moods
    let moods = JSON.parse(localStorage.getItem("moods")) || [];

    // 5. add new entry
    let entry = {
      mood: mood,
      note: note,
      date: date,
    };

    moods.push(entry);

    // 6. save
    localStorage.setItem("moods", JSON.stringify(moods));

    // 7. encouraging message
    let message = "";

    switch (mood) {
      case "Happy":
        message = "Make sure to spread your joy!✨";
        break;

      case "Sad":
        message = "Be gentle with yourself today, this feeling will pass 💙";
        break;

      case "Angry":
        message =
          "Anger is valid... give yourself space and take deep breaths🌿";
        break;

      case "Anxious":
        message =
          "Let your thoughts settle. Inhale for 4s, Hold for 4s, Exhale for 4s and Hold for 4s 💛";
        break;

      case "Stressed":
        message = "Focus on the next small step. You're doing enough 🌱";
        break;

      case "Tired":
        message = "It's okay to take a break. Rest is productive too 😴";
        break;

      case "Calm":
        message = "Maintain your peace, by all means!💆🏽‍♀️";
        break;

      case "Overwhelmed":
        message = "Do what you can, not everything.🤍";
        break;

      default:
        message = "You're doing okay 💛";
    }

    // 8. display message
    let msgBox = document.getElementById("message");
    if (msgBox) {
      msgBox.innerText = message;
    }

    // 9. reset form
    selected.checked = false;
    document.getElementById("note").value = "";
    document.getElementById("date").value = "";
  });
}

// HISTORY PAGE LOGIC

let historyList = document.getElementById("history-list");

if (historyList) {
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
}

// =======================
// CLEAR HISTORY BUTTON
// =======================

let clearBtn = document.getElementById("clearBtn");

if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    let confirmClear = confirm("Are you sure you want to clear all history?");

    if (confirmClear) {
      localStorage.removeItem("moods");

      let historyList = document.getElementById("history-list");

      if (historyList) {
        historyList.innerHTML = "<p>No moods recorded yet.</p>";
      }
    }
  });
}
