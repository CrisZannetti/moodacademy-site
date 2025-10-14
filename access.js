// === ACCESSO MOOD ACADEMY ===
// Gestisce login, salvataggio utente e transizione

window.addEventListener("load", () => {
  console.log("✅ access.js caricato correttamente");

  const banner = document.getElementById("access-banner");
  const form = document.getElementById("accessForm");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorBox = document.getElementById("error");

  console.log("Banner trovato:", !!banner);
  console.log("Form trovato:", !!form);

  // Se l'utente ha già effettuato l'accesso → salta banner
  const storedUser = localStorage.getItem("moodacademyUser");
  if (storedUser) {
    banner.classList.add("fadeOut");
    setTimeout(() => banner.remove(), 2000);
    return;
  }

  // Quando invia il form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Controllo campi
    if (!name || !email || !password) {
      errorBox.textContent = "Compila tutti i campi per entrare.";
      return;
    }

    if (password !== "Sc.cognitive") {
      errorBox.textContent = "Password errata. Riprova.";
      passwordInput.value = "";
      return;
    }

    // Salva utente localmente
    const userData = { name, email, time: new Date().toISOString() };
    localStorage.setItem("moodacademyUser", JSON.stringify(userData));

    // Rimuove errori
    errorBox.textContent = "";

    // Fade out + rimozione banner
    banner.classList.add("fadeOut");
    setTimeout(() => {
      banner.remove();
      console.log(`🎉 Benvenuto, ${name}! Accesso completato.`);
    }, 2500);
  });
});
