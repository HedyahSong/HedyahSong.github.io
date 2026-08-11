const menuButton = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector(".menu-panel");

if (menuButton && menuPanel) {
  const setMenu = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuPanel.setAttribute("aria-hidden", String(!isOpen));
    menuPanel.toggleAttribute("inert", !isOpen);
    menuPanel.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
      menuPanel.querySelector("a")?.focus();
    } else {
      menuButton.focus();
    }
  };

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
    }
  });
}
