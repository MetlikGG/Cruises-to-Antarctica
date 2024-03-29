import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {Burger} from './modules/header/burger';
import './modules/map/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const control = document.querySelector('[data-validate="control"]');
  const submit = document.querySelector('[data-validate="submit"]');
  const data = document.querySelector('[data-validate="data"]');
  const checkbox = document.querySelector('input[type="checkbox"]');

  control.addEventListener('click', function () {
    if (data.checked) {
      submit.disabled = '';
    } else {
      submit.disabled = 'disabled';
    }
  });

  checkbox.addEventListener('click', function () {
    checkbox.blur();
  });
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const burger = new Burger();
    window.burger = burger;
    burger.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
