const topBtn = document.querySelector(".top-btn");

topBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 비즈니스 섹션 이미지 바뀌게 하기
const bizSection = document.querySelector(".biz");

if (bizSection) {
  const visual = bizSection.querySelector(".biz__visual");
  const tabs = bizSection.querySelectorAll(".biz__tab");

  // 초기 이미지
  const initImg = tabs[0]?.dataset.img;
  if (initImg) {
    visual.style.backgroundImage = `url("${initImg}")`;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      // 이미지 교체
      const img = tab.dataset.img;
      if (img) {
        visual.style.backgroundImage = `url("${img}")`;
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const prod = document.querySelector(".prod");
  if (!prod) return;

  const mainImg = prod.querySelector(".prod__main-img");
  const thumbs = Array.from(prod.querySelectorAll(".prod__thumb"));
  const prevBtn = prod.querySelector(".prod__prev");
  const nextBtn = prod.querySelector(".prod__next");

  if (!mainImg || thumbs.length === 0) return;

  // 썸네일 배경
  thumbs.forEach((btn) => {
    const img = btn.dataset.img;
    const box = btn.querySelector(".prod__thumb-img");
    if (img && box) box.style.backgroundImage = `url("${img}")`;
  });

  let current = thumbs.findIndex((b) => b.classList.contains("is-active"));
  if (current < 0) current = 0;

  const setActive = (idx) => {
    current = (idx + thumbs.length) % thumbs.length;

    thumbs.forEach((b) => b.classList.remove("is-active"));
    thumbs[current].classList.add("is-active");

    const img = thumbs[current].dataset.img;
    if (img) mainImg.src = img;
  };

  // 초기 메인 이미지
  setActive(current);

  // 썸네일 클릭
  thumbs.forEach((btn, idx) => {
    btn.addEventListener("click", () => setActive(idx));
  });

  // 화살표 클릭
  if (prevBtn) prevBtn.addEventListener("click", () => setActive(current - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => setActive(current + 1));
});
