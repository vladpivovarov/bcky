const photos = () => {

  const btnOpen = document.querySelector(".photos__btn1");
  const btnClose = document.querySelector(".photos__btn2");
  const listImages = document.querySelector(".photos__list_2");

  btnOpen.addEventListener("click", () => {
    listImages.classList.add("photos__list_open");
  });

  btnClose.addEventListener("click", () => {
    listImages.classList.remove("photos__list_open");
  });

}

export default photos;
