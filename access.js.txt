document.getElementById("accessForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const pass = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (pass === "Sc.cognitive") {
    // invio dati a Formspree
    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: { "Accept": "application/json" }
    });

    // fade-out e sblocco sito
    document.getElementById("access-banner").classList.add("fadeOut");
    setTimeout(()=>{
      document.getElementById("access-banner").remove();
      document.body.style.overflow = "auto";
    },3000);
  } else {
    error.textContent = "Password errata.";
  }
});
