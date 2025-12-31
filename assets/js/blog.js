document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     ELEMENTS
     =============================== */
  const cards = Array.from(document.querySelectorAll(".blog-card"));
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".blog-categories button");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  /* ===============================
     STATE
     =============================== */
  let currentPage = 1;
  const perPage = 8;
  let currentFilter = "all";
  let searchQuery = "";

  /* ===============================
     HELPERS
     =============================== */

  function applyFilters() {
    cards.forEach(card => {
      const matchesCategory =
        currentFilter === "all" ||
        card.dataset.category === currentFilter;

      const matchesSearch =
        card.innerText.toLowerCase().includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove("hidden");
        card.style.order = "0"; // 👈 filtered cards go on top
      } else {
        card.classList.add("hidden");
        card.style.order = "1";
      }
    });
  }

  function getVisibleCards() {
    return cards.filter(card => !card.classList.contains("hidden"));
  }

  function render() {
    const visible = getVisibleCards();
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    visible.forEach((card, index) => {
      card.style.display =
        index >= start && index < end ? "block" : "none";
    });

    /* Pagination buttons state */
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= visible.length;

    /* Refresh AOS after DOM changes */
    if (window.AOS) {
      AOS.refreshHard();
    }
  }

  /* ===============================
     CATEGORY FILTER
     =============================== */
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      currentPage = 1;

      applyFilters();
      render();
    });
  });

  /* ===============================
     SEARCH
     =============================== */
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      currentPage = 1;

      applyFilters();
      render();
    });
  }

  /* ===============================
     PAGINATION
     =============================== */
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

  /* ===============================
     AOS INIT
     =============================== */
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic"
    });
  }

  /* ===============================
     INITIAL LOAD
     =============================== */
  applyFilters();
  render();

});