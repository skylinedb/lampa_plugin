(function () {
    'use strict';
    Lampa.Platform.tv();
   
var styleElem = document.createElement("style");
styleElem.type = "text/css";

// Добавляем CSS-правила
styleElem.style.cssText = `
  .full-descr__text {
    font-size: 18px;
  }
  .new-interface-info__description {
    font-size: 18px;
  }
`;

// Добавляем элемент <style> в DOM
document.head.appendChild(styleElem);

    

})();
