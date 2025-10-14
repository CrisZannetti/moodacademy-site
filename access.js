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
/* 💡 Migliore leggibilità campi input */
input {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  padding: 0.8rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  transition: all 0.25s ease;
}

input:focus {
  background: rgba(255, 255, 255, 0.25);
  border-color: #fff;
  outline: none;
  box-shadow: 0 0 12px rgba(255,255,255,0.4);
}

/* Placeholder visibili e luminosi */
input::placeholder {
  color: rgba(255,255,255,0.95);
  font-weight: 500;
}

/* Bottone più evidente */
button {
  background: linear-gradient(135deg, #ffffff, #d7d7d7);
  color: #111;
  font-weight: 700;
  letter-spacing: 0.4px;
  border: none;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(255,255,255,0.4);
}

/* Box vetroso più definito */
.glass {
  backdrop-filter: blur(16px);
  background: rgba(30, 30, 35, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}
