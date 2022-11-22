const air = () => {

  if (window.screen.width <= 1024) {
    new AirDatepicker('#air', {
      weekends: [0, 1],
      isMobile: true,
      autoClose: true
    });
  } else {
    new AirDatepicker('#air', {
      weekends: [0, 1],
      autoClose: true
    });
  }

}

export default air;
