// === ACCESSO MOOD ACADEMY (CSP-SAFE VERSION) ===

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("access-banner");
  const form = document.getElementById("accessForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorBox = document.getElementById("error");

  // --- Verifica presenza elementi ---
  if (!banner || !form) {
    console.warn("⚠️ access.js: elementi non trovati, controlla gli ID in index.html");
    return;
  }

  // --- Utente già autenticato ---
  const storedUser = localStorage.getItem("moodacademyUser");
  if (storedUser) {
    banner.remove(); // rimuove del tutto il banner
    document.body.style.overflow = "auto";
    document.body.style.opacity = "1";
    console.log("👋 Bentornato su Mood Academy!");
    return;
  }

  // --- Gestione del form ---
  form.addEventListener("submit", function (event) {
    event.preventDefault();

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

    // --- Salvataggio utente ---
    const userData = { name, email, time: new Date().toISOString() };
    localStorage.setItem("moodacademyUser", JSON.stringify(userData));

    // --- Rimozione banner ---
    errorBox.textContent = "";
    banner.classList.add("fadeOut");

    // Rimuove il banner dopo 2.5 s (senza usare stringhe in setTimeout)
    setTimeout(function () {
      if (banner && banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
      document.body.style.overflow = "auto";
      document.body.style.opacity = "1";
      console.log(`🎉 Benvenuto, ${name}! Accesso completato.`);
    }, 2500);
  });
});
