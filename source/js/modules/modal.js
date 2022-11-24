const modal = () => {

  const modals = document.querySelectorAll(".modal");
  const modalCall = document.querySelector(".modal__call");
  const btns = document.querySelectorAll(".modal-open-js");
  const buttonr = document.querySelector(".header__burger");
  const header = document.querySelector(".header");

  // При клике на одну из кнопок отображаем модальное окно
  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      header.classList.remove("header_active");
      buttonr.classList.remove("open");

      modals.forEach((modal) => {
        if (modal.classList.contains("modal_active")) {
          modal.classList.remove("modal_active");
        }
      });

      modalCall.classList.add("modal_active");
    });
  })


  modals.forEach((modal) => {
    const close = modal.querySelector(".modal__close");
    const modalInner = modal.querySelector(".modal__inner");

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

      modals.forEach((modal) => {
        if (modal.classList.contains("modal_active")) {
          modal.classList.remove("modal_active");
        }
      })
    })
  })
}


export default modal;
