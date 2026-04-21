const page = document.getElementById("page");
const spotlight = document.getElementById("spotlight");
const cards = document.querySelectorAll(".card");
const pattern = document.querySelector(".pattern");

page.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  spotlight.style.left = x + "px";
  spotlight.style.top = y + "px";

  pattern.style.opacity = "0.6";
});

page.addEventListener("mouseleave", () => {
  pattern.style.opacity = "0.3";
});

/* tilt */
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
