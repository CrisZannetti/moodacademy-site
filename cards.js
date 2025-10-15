// === ZOOM FULLSCREEN CARTA ===
(function () {
  console.log("🃏 cards popup init");
  window.__cardsPopupReady = true; // debug flag

  const cards = document.querySelectorAll(".carta-svg");
  const popup = document.getElementById("cardPopup");
  const popupImg = document.getElementById("popupImg");
  const caption = document.getElementById("popupCaption");
  const closeBtn = document.getElementById("closePopup");

  if (!popup || !popupImg || !caption || !closeBtn) {
    console.warn("⚠️ Popup DOM mancante: controlla #cardPopup nel tuo HTML.");
    return;
  }

// Eventi click su ogni carta
cards.forEach(card => {
  card.addEventListener("click", () => {
    popupFront.src = card.src; // fronte = carta cliccata
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
    caption.textContent = card.alt || "";

    let isFlipped = false;
    const card3d = document.querySelector(".card3d");

    // Reset ogni volta che apri
    card3d.style.transform = "rotateY(0deg)";

    // Rotazione con movimento mouse (3D effetto)
    let rotateY = 0;
    card3d.onmousemove = (e) => {
      const rect = card3d.getBoundingClientRect();
      const x = e.clientX - rect.left;
      rotateY = ((x / rect.width) - 0.5) * 30;
      card3d.style.transform = `rotateY(${rotateY}deg)`;
    };

    // Click per girare la carta
    card3d.onclick = () => {
      isFlipped = !isFlipped;
      card3d.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    };
  });
});


  // Chiudi con X
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
})();
