document.getElementById("saveBtn").onclick = function () {
  // 1. get selected mood
  let selected = document.querySelector('input[name="mood"]:checked');

  if (selected == null) {
    alert("Please select a mood!");
    return;
  }

  let mood = selected.value;

  // 2. get note (why user feels this way)
  let note = document.getElementById("note").value;

  let dateInput = document.getElementById("date").value;

  let date;

  if (dateInput == "") {
    date = new Date().toLocaleDateString();
  } else {
    date = dateInput;
  }

  let moods = JSON.parse(localStorage.getItem("moods"));

  if (moods == null) {
    moods = [];
  }

  let entry = {
    mood: mood,
    note: note,
    date: date,
  };

  moods.push(entry);

  // 7. store in browser
  localStorage.setItem("moods", JSON.stringify(moods));

  // 8. encouraging messages
  let message = "";

  switch (mood) {
    case "Happy":
      message = "Make sure to spread your joy!✨";
      break;

    case "Sad":
      message = "Be gentle with yourself today, this feeling will pass 💙";
      break;

    case "Angry":
      message = "Anger is valid... give yourself space and take deep breaths🌿";
      break;

    case "Anxious":
      message = "Let your thoughts settle. Inhale for 4s, Hold for 4s, Exhale for 4s and Hold for 4s 💛";
      break;

    case "Stressed":
      message = "Focus on the next small step. You're doing enough 🌱";
      break;

    case "Tired":
      message = "Rest is productive too 😴";
      break;

    case "Calm":
      message = "Love this energy — stay grounded 🌊";
      break;

    case "Overwhelmed":
      message = "Do what you can, not everything.🤍";
      break;

    default:
      message = "You're doing okay 💛";
  }

  document.getElementById("message").innerText = message;

  // 10. reset form (optional but nice UX)
  selected.checked = false;
  document.getElementById("note").value = "";
  document.getElementById("date").value = "";
};
