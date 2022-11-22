const date = () => {

  const dataElems = document.querySelectorAll(".year");
  const time = new Date();
  const year = time.getFullYear();

  dataElems.forEach((elem) => {
    elem.textContent = year;
  });
}

export default date;
