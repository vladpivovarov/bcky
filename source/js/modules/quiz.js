const quiz = () => {
  const quizBlock = document.querySelector(".quiz");
  const questionsArray = quizBlock.querySelectorAll(".quiz__question-block");
  const nextBtn = quizBlock.querySelector(".quiz__next");
  const prevBtn = quizBlock.querySelector(".quiz__prev");
  const personal = quizBlock.querySelector(".personal");
  const progressLine = quizBlock.querySelector(".progressbar__line");
  const progressNum = quizBlock.querySelector(".progressbar__actually-question");
  const quizAuthorText = quizBlock.querySelector(".quiz__author-desc");
  const status = quizBlock.querySelector(".quiz__status");
  const statusGift1 = quizBlock.querySelector(".quiz__gift-status_1");
  const statusGift2 = quizBlock.querySelector(".quiz__gift-status_2");
  const statusGift3 = quizBlock.querySelector(".quiz__gift-status_3");

  const textMain = "Пройдите этот тест и я лично для Вас рассчитаю стоимость";
  const textFinish = "Отлично! Я приступаю к расчету стоимости!";
  const textStatusMain = "Пока-что:";
  const textStatusFinish = "Теперь:";
  const textGift1Start = "не известна"
  const textGift1Finish = "известна";
  const textGift2Start = "закрыт"
  const textGift2Finish = "открыт";
  const textGift3Start = "не выбран"
  const textGift3Finish = "выбран";

  let current = 0;


  // Первоначальная настройка
  questionsArray.forEach((question) => {
    question.classList.remove("quiz__question-block_open");
  });

  questionsArray[current].classList.add("quiz__question-block_open");
  progressLine.style.width = ((current + 1) * 100) / 6 + "%";
  progressNum.textContent = 1;
  quizAuthorText.textContent = textMain;
  status.textContent = textStatusMain;
  statusGift1.textContent = textGift1Start;
  statusGift2.textContent = textGift2Start;
  statusGift3.textContent = textGift3Start;

  // Управление кнопками

  // Вперед
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (current >= (questionsArray.length - 1)) {
      return;
    }

    // Проверка на заполненность формы
    let currentQuestion = questionsArray[current];
    let currentStatus = false;
    let currentInputArray = currentQuestion.querySelectorAll("input");

    currentInputArray.forEach((input) => {
      if (input.checked) {
        currentStatus = true;
      }
    });

    if (currentStatus === false) {
      return;
    }

    current++;

    questionsArray.forEach((question) => {
      question.classList.remove("quiz__question-block_open");
    });

    questionsArray[current].classList.add("quiz__question-block_open");

    if (current != questionsArray.length - 1) {
      personal.classList.add("visually-hidden");

      quizBlock.classList.remove("quiz_finish");
      quizAuthorText.textContent = textMain;
      status.textContent = textStatusMain;
      statusGift1.textContent = textGift1Start;
      statusGift2.textContent = textGift2Start;
      statusGift3.textContent = textGift3Start;
    }

    if (current === questionsArray.length - 1) {
      personal.classList.remove("visually-hidden");
      nextBtn.textContent = "Получить расчет";

      quizBlock.classList.add("quiz_finish");
      quizAuthorText.textContent = textFinish;
      status.textContent = textStatusFinish;
      statusGift1.textContent = textGift1Finish;
      statusGift2.textContent = textGift2Finish;
      statusGift3.textContent = textGift3Finish;
    }

    progressLine.style.width = ((current + 1) * 100) / 6 + "%";

    progressNum.textContent = current + 1;

    if (progressNum.textContent > questionsArray.length - 1) {
      progressNum.textContent = 6;
    }
  })



  // Назад
  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (current <= 0) {
      return;
    }
    current--;

    questionsArray.forEach((question) => {
      question.classList.remove("quiz__question-block_open");
    });

    questionsArray[current].classList.add("quiz__question-block_open");

    if (current != questionsArray.length - 1) {
      personal.classList.add("visually-hidden");
      nextBtn.textContent = "Следующий вопрос";
      quizBlock.classList.remove("quiz_finish");
      quizAuthorText.textContent = textMain;
      status.textContent = textStatusMain;
      statusGift1.textContent = textGift1Start;
      statusGift2.textContent = textGift2Start;
      statusGift3.textContent = textGift3Start;
    }

    progressLine.style.width = ((current + 1) * 100) / 6 + "%";
    progressNum.textContent = current + 1;
  })

}

export default quiz;
