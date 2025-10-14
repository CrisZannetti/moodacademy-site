// === ACCESSO MOOD ACADEMY (versione semplificata e compatibile GitHub Pages) ===

window.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("access-banner");
  const form = document.getElementById("accessForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorBox = document.getElementById("error");

  // se l'utente è già loggato, nascondi subito il banner
  if (localStorage.getItem("moodacademyUser")) {
    banner.style.display = "none";
    document.body.style.overflow = "auto";
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || !password) {
      errorBox.textContent = "Compila tutti i campi per entrare.";
      return;
    }
    if (password !== "Sc.cognitive") {
      errorBox.textContent = "Password errata. Riprova.";
      passwordInput.value = "";
      return;
    }

    // salva i dati localmente
    localStorage.setItem("moodacademyUser", JSON.stringify({ name, email }));

    // Rimozione banner sicura (senza eval)
setTimeout(function() {
  if (banner) {
    banner.style.display = "none";
  }
  document.body.style.overflow = "auto";
  document.body.style.opacity = "1";
  console.log(`🎉 Accesso completato.`);
}, 2500);
  });
});
