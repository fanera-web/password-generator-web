const strengthEl = document.querySelector("#strength");
const generateBtn = document.querySelector("#generateBtn");
const outputEl = document.querySelector("#password");
const themeBtn = document.querySelector("#themeBtn");
const body = document.querySelector("body");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light";
  } else {
    themeBtn.textContent = "Dark";
  }
});

function generatePassword(strength) {
  let length;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  switch (strength) {
    case "simple":
      length = 8;
      break;
    case "medium":
      length = 12;
      break;
    case "hard":
      length = 16;
      break;
    default:
      length = 8;
  }
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
}
generateBtn.addEventListener("click", () => {
  const strength = strengthEl.value;
  outputEl.textContent = generatePassword(strength);
});