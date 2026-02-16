document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const className = document.getElementById("class").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value.trim();

    if (!name || !className || !email || !interest) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for signing up! Redirecting you to the homepage...");
    window.location.href = "index.html"; 
  });
});
