const textName = document.getElementById("textName");
const textTitle = document.getElementById("textTitle");
const textEmail = document.getElementById("textEmail");
const textPhone = document.getElementById("textPhone");

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", (e) => {
  textName.textContent = e.target.value;
});

const titleInput = document.getElementById("titleInput");
titleInput.addEventListener("input", (e) => {
  textTitle.textContent = e.target.value;
});

const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("input", (e) => {
  textEmail.textContent = e.target.value;
  textEmail.href = `mailto:${e.target.value}`;
});

const phoneInput = document.getElementById("phoneInput");
phoneInput.addEventListener("input", (e) => {
  textPhone.textContent = e.target.value;
  textPhone.href = `tel:${e.target.value}`;
});

function resetForm() {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll("input, select, textarea");

  // biome-ignore lint/complexity/noForEach: <explanation>
  inputs.forEach((input) => {
    input.value = "";
  });
}
function fillDummySignature() {
  textName.textContent = "Your Name";
  textTitle.textContent = "Your Job Title";
  textEmail.textContent = "your-email@westonandassociates.com";
  textPhone.textContent = "330.791.7118";
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
  resetForm();
  fillDummySignature();
});
