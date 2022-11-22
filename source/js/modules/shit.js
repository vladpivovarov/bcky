const shit = () => {

  // функция возвращает cookie с именем name, если есть, если нет, то undefined
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
  var alertwin = getCookie("alertwin");
  if (alertwin != "no") {
    $(document).mouseleave(function (e) {
      if (e.clientY < 10) {
        alertwin = getCookie("alertwin");
        if (alertwin == "no") {
          return
        }
        modalGo();
        console.log(alertwin);

        // записываем cookie на 1 день, с которой мы не показываем окно
        var date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "alertwin=no; max-age=86400; path=/;";
      }
    });

    // Обычный функционал модалки
    function modalGo() {
      const modal = document.querySelector(".modal_shit");
      const modalInner = modal.querySelector(".modal__inner");
      const close = modal.querySelector(".modal__close");

      modal.classList.add("modal_active");

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
  }
}

export default shit;
