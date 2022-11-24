const mapRealize = () => {
  console.log("Map");
  // CONTACT VARIABLES
  const contactAddress = document.querySelector(".contact__address");
  var placemarkSize = {
    mobile: [25, 40.75],
    tablet: [50, 81.5],
    desktop: [50, 81.5]
  }
  // Стандартно - левый верхний угол изображения -> поэтому сдвигаем его
  var placemarkOffset = {
    mobile: [-12.5, -40.75],
    tablet: [-25, -81.5],
    desktop: [-25, -81.5]
  }
  var placemarkCurrentOffset = placemarkOffset.mobile;
  var placemarkCurrentSize = placemarkSize.mobile;

  // Яндекс карта
  // https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html
  // https://developer.tech.yandex.ru/services/3
  function ready() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [45.005775, 38.931188],
        zoom: 16,
        controls: ["zoomControl"],
        behaviors: ["drag"]
      });

      var balloonHtml = contactAddress.innerHTML;

      if (window.innerWidth >= 768 && window.innerWidth < 1370) {
        placemarkCurrentSize = placemarkSize.tablet;
        placemarkCurrentOffset = placemarkOffset.tablet;

      } else if (window.innerWidth >= 1370) {
        placemarkCurrentSize = placemarkSize.desktop;
        placemarkCurrentOffset = placemarkOffset.desktop;
      }

      var placemark = new ymaps.Placemark([45.005775, 38.931188], {
        hintContent: "Выставка бань-бочек от Bochky® Вт-Сб с 10:00 до 18:00",
        balloonContent: balloonHtml
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: placemarkCurrentSize,
        iconImageOffset: placemarkCurrentOffset
      });

      myMap.geoObjects.add(placemark);
    }

    // Ищем и удаляем мусор с карты (кроме логотипа и копирайта)
    function delets() {
      let elem = document.querySelector(".ymaps-2-1-79-gototech");

      if (elem) {
        elem.parentNode.removeChild(elem);
        clearInterval(check);
      }
    }

    var check = setInterval(delets, 200);
  }

  document.addEventListener("DOMContentLoaded", ready);
}

export default mapRealize;
