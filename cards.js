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
      popupImg.src = card.src;
      caption.textContent = card.alt || "";
      popup.classList.add("show");
      document.body.style.overflow = "hidden";
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
