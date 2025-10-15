// === ZOOM + FLIP 3D FULLSCREEN CARTA ===
(function () {
  console.log("🃏 cards popup init");
  window.__cardsPopupReady = true; // debug flag

  // Elementi principali
  const cards = document.querySelectorAll(".carta-svg");
  const popup = document.getElementById("cardPopup");
  const popupFront = document.getElementById("popupFront");
  const popupBack = document.getElementById("popupBack");
  const caption = document.getElementById("popupCaption");
  const closeBtn = document.getElementById("closePopup");

  // Controllo elementi DOM
  if (!popup || !popupFront || !popupBack || !caption || !closeBtn) {
    console.warn("⚠️ Popup DOM mancante: controlla #cardPopup e gli ID nel tuo HTML.");
    return;
  }

  // --- GESTIONE CLICK SU OGNI CARTA ---
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Imposta il fronte della carta
      popupFront.src = card.src;
      caption.textContent = card.alt || "";

      // Mostra popup
      popup.classList.add("show");
      document.body.style.overflow = "hidden";

      // Reset stato
      const card3d = popup.querySelector(".card3d");
      let isFlipped = false;
      card3d.style.transform = "rotateY(0deg)";

      // Rotazione 3D interattiva con mouse
      card3d.onmousemove = (e) => {
        const rect = card3d.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const rotateY = ((x / rect.width) - 0.5) * 30;
        card3d.style.transform = isFlipped
          ? `rotateY(${180 + rotateY}deg)`
          : `rotateY(${rotateY}deg)`;
      };

      // Click per girare la carta (fronte ↔ retro)
      card3d.onclick = () => {
        isFlipped = !isFlipped;
        card3d.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
      };
    });
  });

  // --- CHIUSURA POPUP ---
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // Chiudi cliccando lo sfondo
  popup.addEventListener("click", e => {
    if (e.target === popup) {
      popup.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  // Chiudi con ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && popup.classList.contains("show")) {
      popup.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  console.log("✅ cards.js attivo e pronto.");
})();

