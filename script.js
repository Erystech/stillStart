document.addEventListener("DOMContentLoaded", () => {
  const focusInput = document.getElementById("focusInput");
  const quoteEl = document.getElementById("dailyQuote");
  const emojiSpans = document.querySelectorAll(".emoji-options span");

  const quotes = [
    "Stillness is not inactivity.",
    "Clarity comes from quiet.",
    "Start calm. Finish strong.",
    "Breathe in. Begin again."
  ];

  // Set quote
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Load and Save focus input
  focusInput.value = localStorage.getItem("dailyFocus") || "";
  focusInput.addEventListener("input", () => {
    localStorage.setItem("dailyFocus", focusInput.value);
  });

  // Handle mood selection
  emojiSpans.forEach(span => {
    span.addEventListener("click", () => {
      localStorage.setItem("mood", span.textContent);
      emojiSpans.forEach(s => s.style.opacity = "0.5");
      span.style.opacity = "1";
    });
  });

  const savedMood = localStorage.getItem("mood");
  if (savedMood) {
    emojiSpans.forEach(s => {
      if (s.textContent === savedMood) s.style.opacity = "1";
      else s.style.opacity = "0.5";
    });
  }
});
