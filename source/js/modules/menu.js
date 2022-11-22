const menu = () => {
  const button = document.querySelector(".header__burger");
  const header = document.querySelector(".header");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!header.classList.contains("header_active")) {
      header.classList.add("header_active");
      button.classList.add("open");
    } else {
      header.classList.remove("header_active");
      button.classList.remove("open");
    }
  })
}

export default menu;
