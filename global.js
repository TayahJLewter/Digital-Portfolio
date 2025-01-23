// Toggle menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
//Form submission message event listener
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const form = event.target;

  // Send form data to Netlify
  fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
  })
      .then(() => {
          alert("Thank you! Your submission has been received.");
          form.reset(); // Clear the form fields
      })
      .catch((error) => {
          console.error("Error:", error);
          alert("Oops! There was a problem submitting your form. Please try again.");
      });
});


