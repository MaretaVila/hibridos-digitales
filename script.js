document.querySelectorAll('.fd-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


// ============================
// FILTRO DE OBRAS
// ============================

document.addEventListener("DOMContentLoaded", () => {
  const filterCards = document.querySelectorAll(".practice-card");
  const works = document.querySelectorAll(".fd-work-card");
  const showAllBtn = document.getElementById("show-all-works");
  const gallery = document.querySelector(".fd-works-grid");

  if (!works.length || !filterCards.length) return;

  function setActiveFilter(activeCard = null) {
    filterCards.forEach(card => {
      card.classList.remove("is-selected");
    });

    if (activeCard) {
      activeCard.classList.add("is-selected");
    }

    if (showAllBtn) {
      if (activeCard) {
        showAllBtn.classList.remove("is-active");
      } else {
        showAllBtn.classList.add("is-active");
      }
    }
  }

  function showAllWorks() {
    works.forEach(work => {
      work.style.display = "block";
    });

    setActiveFilter(null);

    if (gallery) {
      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  function filterWorks(category, clickedCard) {
    works.forEach(work => {
      const workCategory = work.dataset.category;

      if (workCategory === category) {
        work.style.display = "block";
      } else {
        work.style.display = "none";
      }
    });

    setActiveFilter(clickedCard);

    if (gallery) {
      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  filterCards.forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.filter;
      if (!category) return;
      filterWorks(category, card);
    });
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAllWorks);
  }
});
