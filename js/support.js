document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".customer-tabs__tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach((t) => t.classList.remove("is-active"));
      // 인증 탭 활성화하기
      if (tabs[1]) tabs[1].classList.add("is-active");

      const target = document.querySelector("#cert");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
