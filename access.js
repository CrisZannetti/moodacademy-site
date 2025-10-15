// === ACCESSO MOOD ACADEMY (CSP-SAFE FINAL) ===

window.addEventListener("load", function () {
  console.log("✅ access.js avviato dopo caricamento pagina");

  const banner = document.getElementById("access-banner");
  const form = document.getElementById("accessForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorBox = document.getElementById("error");

  // Se il banner non esiste (già rimosso o utente loggato)
  if (!banner) {
    console.log("ℹ️ access-banner non presente (già rimosso o utente loggato).");
    document.body.style.overflow = "auto";
    document.body.style.opacity = "1";
    return;
  }

  // Utente già autenticato
  const storedUser = localStorage.getItem("moodacademyUser");
  if (storedUser) {
    banner.remove();
    document.body.style.overflow = "auto";
    document.body.style.opacity = "1";
    console.log("👋 Bentornato su Mood Academy!");
    return;
  }

  // Gestione form
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

    const userData = { name, email, time: new Date().toISOString() };
    localStorage.setItem("moodacademyUser", JSON.stringify(userData));

    errorBox.textContent = "";
    banner.classList.add("fadeOut");

    setTimeout(function () {
      if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
      document.body.style.overflow = "auto";
      document.body.style.opacity = "1";
      console.log(`🎉 Benvenuto, ${name}! Accesso completato.`);
    }, 2500);
  });
});

