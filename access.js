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
    banner.classList.add("fadeOut");
    setTimeout(() => {
      banner.remove(); // rimuove completamente il banner
      console.log("✅ Utente già loggato, banner nascosto.");
    }, 2500);
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
      errorBox.textContent = "❌ Password errata. Riprova.";
      errorBox.style.display = "block";
      passwordInput.value = "";
      return;
    }

    // Controlla campi vuoti
    if (!name || !email) {
      errorBox.textContent = "⚠️ Compila tutti i campi per entrare.";
      errorBox.style.display = "block";
      return;
    }

    // Salva utente localmente
    const userData = { name, email, time: new Date().toISOString() };
    localStorage.setItem("moodacademyUser", JSON.stringify(userData));

    // Animazione di uscita e rimozione banner
    errorBox.style.display = "none";
    banner.classList.add("fadeOut");

    // 🔥 Dopo 2.5 secondi, il banner scompare completamente
    setTimeout(() => {
      banner.style.display = "none";
      console.log(`🎉 Benvenuto, ${name}! Accesso completato.`);
      showWelcomeMessage(name); // chiamiamo la funzione di saluto
    }, 2500);
  });

  // === Messaggio di benvenuto personalizzato ===
  function showWelcomeMessage(name) {
    const message = document.createElement("div");
    message.textContent = `Ciao ${name}, bentornato nella Mood Academy!`;
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.left = "50%";
    message.style.transform = "translateX(-50%)";
    message.style.background = "rgba(0,0,0,0.6)";
    message.style.color = "#fff";
    message.style.padding = "0.8rem 1.2rem";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    message.style.fontWeight = "600";
    message.style.zIndex = "10000";
    message.style.opacity = "0";
    message.style.transition = "opacity 1s ease";
    document.body.appendChild(message);

    // fade-in
    setTimeout(() => (message.style.opacity = "1"), 100);
    // fade-out dopo 4 secondi
    setTimeout(() => {
      message.style.opacity = "0";
      setTimeout(() => message.remove(), 1000);
    }, 4000);
  }
});

