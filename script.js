const words = "Alice Är Bäst";

const ANIMATON_DURATION = 4000;

const character = words.split("").forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${i * (ANIMATON_DURATION / 16) - offset}ms`;
    return div;
  }

  document.getElementById("spiral").append(createElement(0));
  document
    .getElementById("spiral2")
    .append(createElement(-1 * (ANIMATON_DURATION / 2)));
});
