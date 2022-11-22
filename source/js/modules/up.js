const up = () => {

  const up = document.querySelector(".up");

  up.addEventListener("click", (e) => {
    e.preventDefault();
    const href = up.getAttribute("href");
    const header = document.querySelector(href);

    seamless.scrollIntoView(header, {
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  })

}

export default up;
