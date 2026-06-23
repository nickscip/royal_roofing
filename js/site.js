document.addEventListener("DOMContentLoaded", () => {
  const success = document.querySelector("[data-form-success]");

  if (success && new URLSearchParams(window.location.search).get("sent") === "true") {
    success.setAttribute("data-visible", "");
    success.focus({ preventScroll: true });
  }
});

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-nav-toggle]");

  if (toggle) {
    const menuId = toggle.getAttribute("aria-controls");
    const menu = menuId ? document.getElementById(menuId) : document.querySelector("[data-nav-menu]");

    if (!menu) return;

    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    menu.toggleAttribute("data-open", !isOpen);
    return;
  }

  const button = event.target.closest("[data-carousel-prev], [data-carousel-next]");

  if (!button) return;

  const name = button.getAttribute("data-carousel-prev") || button.getAttribute("data-carousel-next");
  const track = document.querySelector(`[data-carousel="${name}"]`);

  if (!track) return;

  const card = track.firstElementChild;
  const gap = Number.parseFloat(getComputedStyle(track).columnGap || "50");
  const distance = card ? card.getBoundingClientRect().width + gap : 442;
  const direction = button.hasAttribute("data-carousel-prev") ? -1 : 1;
  const maxLeft = track.scrollWidth - track.clientWidth;
  const currentLeft = track.scrollLeft;
  const targetLeft = currentLeft + distance * direction;
  const atStart = currentLeft <= 4;
  const atEnd = currentLeft >= maxLeft - 4;
  let nextLeft = targetLeft;

  if (direction > 0 && atEnd) {
    nextLeft = 0;
  } else if (direction < 0 && atStart) {
    nextLeft = maxLeft;
  } else {
    nextLeft = Math.max(0, Math.min(maxLeft, targetLeft));
  }

  track.scrollLeft = nextLeft;
});
