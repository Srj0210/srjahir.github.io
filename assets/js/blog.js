document.addEventListener("DOMContentLoaded", () => {

  const cards = Array.from(document.querySelectorAll(".blog-card"));
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".blog-categories button");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentPage = 1;
  const perPage = 8;
  let currentFilter = "all";

  function getVisibleCards() {
    return cards.filter(card => !card.classList.contains("hidden"));
  }

  function render() {
    const visible = getVisibleCards();
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    visible.forEach((card, i) => {
      card.style.display = (i >= start && i < end) ? "block" : "none";
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= visible.length;

    AOS.refresh();
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      currentPage = 1;

      cards.forEach(card => {
        card.classList.toggle(
          "hidden",
          currentFilter !== "all" && card.dataset.category !== currentFilter
        );
      });

      render();
    });
  });

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    currentPage = 1;

    cards.forEach(card => {
      const match = card.innerText.toLowerCase().includes(q);
      card.classList.toggle("hidden", !match);
    });

    render();
  });

  nextBtn.addEventListener("click", () => {
    currentPage++;
    render();
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });

  AOS.init({
    once: true,
    duration: 700,
    easing: "ease-out-cubic"
  });

  render();
});