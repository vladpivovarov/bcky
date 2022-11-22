const modal = () => {

  const modal = document.querySelector(".modal");
  const modalInner = modal.querySelector(".modal__inner");
  const btns = document.querySelectorAll(".modal-open-js");
  const close = modal.querySelector(".modal__close");

  // При клике на одну из кнопок отображаем модальное окно
  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("modal_active");
    });
  })


  modal.addEventListener("click", (event) => {
    const clickedElementsTree = event.composedPath();

    if (clickedElementsTree.includes(modalInner)) {
      return;
    } else {
      modal.classList.remove("modal_active");
    }
  })

  close.addEventListener("click", (e) => {
    e.preventDefault();

    if (modal.classList.contains("modal_active")) {
      modal.classList.remove("modal_active");
    }
  })
}


export default modal;
