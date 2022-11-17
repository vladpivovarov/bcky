const question = () => {

  const questionList = document.querySelector(".questions__list");
  const questions = questionList.querySelectorAll(".questions__item");

  if (questionList && questions) {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const questionTitle = question.querySelector(".questions__subtitle");

      questionTitle.addEventListener("click", (e) => {
        for (let index = 0; index < questions.length; index++) {
          const element = questions[index];
          if (index === i) {
            continue;
          }
          if (element.classList.contains("questions__item_open")) {
            element.classList.remove("questions__item_open");
          }
        }

        question.classList.toggle("questions__item_open");
      })
    }
  }
}

export default question;
