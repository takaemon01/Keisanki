const display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
  saveData();
}

function clearDisplay() {
  display.value = "";
  saveData();
}

function calculate() {
  try {
    display.value = eval(display.value);
    saveData();
  } catch {
    display.value = "Error";
  }
}

// --- データ保存 ---
function saveData() {
  localStorage.setItem("calc_data", display.value);
}

// --- 起動時に復元 ---
window.onload = function() {
  const saved = localStorage.getItem("calc_data");
  if (saved) display.value = saved;
};
