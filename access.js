// === ACCESSO MOOD ACADEMY ===
// Gestisce login, salvataggio utente e transizione

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("access-banner");
  const form = document.querySelector("form");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const passwordInput = document.querySelector("input[name='password']");
  const errorBox = document.createElement("div");
  errorBox.className = "error";
  form.appendChild(errorBox);

  // Controlla se l'utente ha già effettuato l'accesso
  const storedUser = localStorage.getItem("moodacademyUser");
  if (storedUser) {
    // Utente già registrato → salta banner
    banner.classList.add("fadeOut");
    setTimeout(() => banner.remove(), 2500);
    return;
  }

  // Quando invia il form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Controlla la password
    if (password !== "Sc.cognitive") {
      errorBox.textContent = "Password errata. Riprova.";
      errorBox.style.display = "block";
      passwordInput.value = "";
      return;
    }

    // Controlla campi vuoti
    if (!name || !email) {
      errorBox.textContent = "Compila tutti i campi per entrare.";
      errorBox.style.display = "block";
      return;
    }

    // Salva utente localmente
    const userData = { name, email, time: new Date().toISOString() };
    localStorage.setItem("moodacademyUser", JSON.stringify(userData));

    // Animazione di uscita e rimozione banner
    errorBox.style.display = "none";
    banner.classList.add("fadeOut");

    setTimeout(() => {
      banner.remove();
      console.log(`Benvenuto, ${name}! Accesso completato.`);
    }, 2500);
  });
});
banner.classList.add("fadeOut");

setTimeout(() => {
  banner.style.display = "none"; // 🔥 forza la scomparsa totale
  console.log(`Benvenuto, ${name}! Accesso completato.`);
}, 2500);

