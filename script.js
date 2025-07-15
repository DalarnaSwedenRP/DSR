document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("response").innerText = "Tack! Ditt meddelande har skickats. Vi återkommer så snart vi kan.";
  this.reset();
});
