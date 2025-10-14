document.getElementById("accessForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const pass = document.getElementById("passwordInput").value.trim();
  const error = document.getElementById("error");

  if (pass !== "Sc.cognitive") {
    error.textContent = "Password errata.";
    return;
  }

  // ✅ 1. Genera contenuto CSV
  const csvContent = `Nome,Email\n${name},${email}\n`;

  // ✅ 2. Crea file scaricabile automaticamente
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "moodacademy_users.csv";
  a.click();
  URL.revokeObjectURL(url);

  // ✅ 3. Fade-out per sbloccare il sito
  document.getElementById("access-banner").classList.add("fadeOut");
  setTimeout(() => {
    document.getElementById("access-banner").remove();
    document.body.style.overflow = "auto";
  }, 3000);
});
/* Contrasto campi e placeholder */
input {
  background: rgba(255,255,255,0.25);
  color: #fff;                 /* testo bianco */
  border: 1px solid rgba(255,255,255,0.55);
  box-shadow: 0 6px 24px rgba(0,0,0,0.25);
  font-weight: 600;
}

input::placeholder {
  color: rgba(255,255,255,0.95); /* placeholder quasi bianco */
  opacity: 1;                    /* Safari/iOS */
}

input:focus {
  outline: none;
  border-color: #fff;
  background: rgba(255,255,255,0.35);
}

/* Scatola “vetro” un po’ più leggibile */
.glass {
  backdrop-filter: blur(14px);
  background: rgba(30,30,35,0.22);
  border: 1px solid rgba(255,255,255,0.12);
}

/* Overlay leggermente più scura per aumentare contrasto globale */
.overlay {
  background: linear-gradient(
    120deg,
    rgba(35,35,35,0.75),
    rgba(70,80,95,0.65)
  );
}
