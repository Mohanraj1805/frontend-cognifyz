document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const address = document.getElementById("inputAddress").value;
    const city = document.getElementById("inputCity").value;
    const state = document.getElementById("inputState").value;
    const zip = document.getElementById("inputZip").value;
    const terms = document.getElementById("gridCheck").checked;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

 
    if (name.trim().length < 3) {
      errorMessage.textContent = "Name must be at least 3 characters.";
      return;
    }

    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email.";
      return;
    }

    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }

    if (address.trim() === "" || city.trim() === "" || state === "Choose...") {
      errorMessage.textContent = "Please fill out all required fields.";
      return;
    }

    if (!terms) {
      errorMessage.textContent = "You must agree to the terms and conditions.";
      return;
    }

    
    alert("Form submitted successfully!");
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
