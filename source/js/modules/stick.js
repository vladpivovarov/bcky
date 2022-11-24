const stick = () => {

  const header = document.querySelector(".header__top")

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 70 && window.innerWidth <= 1280) {
      header.classList.add("header__top_sticky");
    }
    if (window.scrollY < 70 || window.innerWidth > 1280) {
      header.classList.remove("header__top_sticky");
    }
  })

  window.addEventListener("resize", () => {
    if (window.scrollY >= 70 && window.innerWidth <= 1280) {
      header.classList.add("header__top_sticky");
    }
    if (window.scrollY < 70 || window.innerWidth > 1280) {
      header.classList.remove("header__top_sticky");
    }
  })
}

export default stick;
