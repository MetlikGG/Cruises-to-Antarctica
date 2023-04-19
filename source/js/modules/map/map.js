const map = document.querySelector(['#map']);
const ymaps = window.ymaps;

if (map) {
  ymaps.ready(init);
}

function init() {
  let myMap = new ymaps.Map('map', {
    center: [59.937927, 30.322219],
    zoom: 16,
    controls: ['zoomControl'],
  });

  let myPlacemark = new ymaps.Placemark([59.937468, 30.322623], {
    balloonContent: '',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/sprite/Map.svg',
    iconImageSize: [22, 22],
    iconImageOffset: [-10, -20],
  });

  myMap.geoObjects.add(myPlacemark);
}
