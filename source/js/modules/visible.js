const visible = () => {

  function count() {
    $('.counting').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'easeOutCirc',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        count();
      }
    });
  }




  let options = {
    rootMargin: '-50px',
    threshold: [0.5]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.dreams__list');
  for (let elm of elements) {
    observer.observe(elm);
  }

}

export default visible;
