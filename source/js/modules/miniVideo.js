const videol = () => {

  const options = {
    fluid: true,
    responsive: true
  };

  const link = document.querySelector(".reviews__link_1");

  const video1 = () => {
    const modal = document.querySelector(".modal-video-mini_1");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_1");

    // Подключаем видео плагин
    const player1 = videojs('my-video1', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }


  const video2 = () => {
    const modal = document.querySelector(".modal-video-mini_2");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_2");

    // Подключаем видео плагин
    const player2 = videojs('my-video2', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }


  const video3 = () => {
    const modal = document.querySelector(".modal-video-mini_3");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_3");

    // Подключаем видео плагин
    const player3 = videojs('my-video3', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }


  const video4 = () => {
    const modal = document.querySelector(".modal-video-mini_4");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_4");

    // Подключаем видео плагин
    const player4 = videojs('my-video4', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }


  const video5 = () => {
    const modal = document.querySelector(".modal-video-mini_5");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_5");

    // Подключаем видео плагин
    const player5 = videojs('my-video5', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }


  const video6 = () => {
    const modal = document.querySelector(".modal-video-mini_6");
    const close = modal.querySelector(".close");
    const modalInner = modal.querySelector(".modal-video__inner");
    const btn = document.querySelector(".reviews__link_6");

    // Подключаем видео плагин
    const player6 = videojs('my-video6', options, function onPlayerReady() {
      const video = this;

      //Подмена src на кнопках
      let srcImg = video.poster_;
      let parentBtn = btn.parentNode;
      let img = parentBtn.querySelector("img");
      img.setAttribute("src", srcImg);

      // При клике на одну из кнопок отображаем модальное окно
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-video_active");
        video.play();
      });

      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if (clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal-video_active");
          video.pause();
        }
      })

      close.addEventListener("click", (e) => {
        e.preventDefault();

        if (modal.classList.contains("modal-video_active")) {
          modal.classList.remove("modal-video_active");
        }

        video.pause();
      })
    });
  }

  video1();
  video2();
  video3();
  video4();
  video5();
  video6();
}

export default videol;
