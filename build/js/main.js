!function(){"use strict";document.documentElement.classList.remove("no-js"),new Swiper(".slider-portfolio",{init:!0,wrapperClass:"slider-portfolio__wrapper",slideClass:"slider-portfolio__screen",direction:"horizontal",slidesPerView:"auto",loop:!0,autoplay:{delay:2e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},speed:600,navigation:{nextEl:".slider-portfolio__button-next",prevEl:".slider-portfolio__button-prev",disabledClass:"slider-portfolio__button-disabled"},pagination:{el:".slider-portfolio__pagination",type:"bullets",bulletClass:"slider-portfolio__pagination-bullet",bulletActiveClass:"slider-portfolio__pagination-bullet_active",clickable:!0},on:{init:function(){}}}),$("a.colorbox").colorbox({maxWidth:"90%",maxHeight:"90%",opacity:"0.9",current:"",transition:"fade"}),$(".counting").each((function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:3e3,easing:"easeOutCirc",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),(()=>{const e=document.querySelector(".questions__list"),t=e.querySelectorAll(".questions__item");if(e&&t)for(let e=0;e<t.length;e++){const o=t[e];o.querySelector(".questions__subtitle").addEventListener("click",(n=>{for(let o=0;o<t.length;o++){const n=t[o];o!==e&&n.classList.contains("questions__item_open")&&n.classList.remove("questions__item_open")}o.classList.toggle("questions__item_open")}))}})(),(()=>{console.log("Map");const e=document.querySelector(".contact__address");var t=[50,81.5],o=[50,81.5],n=[-25,-81.5],i=[-25,-81.5],a=[-12.5,-40.75],l=[25,40.75];document.addEventListener("DOMContentLoaded",(function(){ymaps.ready((function(){var s=new ymaps.Map("map",{center:[59.938635,30.323118],zoom:18,controls:["zoomControl"],behaviors:["drag"]}),r=e.innerHTML;window.innerWidth>=768&&window.innerWidth<1370?(l=t,a=n):window.innerWidth>=1370&&(l=o,a=i);var c=new ymaps.Placemark([59.938635,30.323118],{hintContent:"Выставка бань-бочек от Bochky® Вт-Сб с 10:00 до 18:00",balloonContent:r},{iconLayout:"default#image",iconImageHref:"img/map-pin.png",iconImageSize:l,iconImageOffset:a});s.geoObjects.add(c)}));var s=setInterval((function(){let e=document.querySelector(".ymaps-2-1-79-gototech");e&&(e.parentNode.removeChild(e),clearInterval(s))}),200)}))})(),(()=>{const e=document.querySelector(".year"),t=(new Date).getFullYear();e.textContent=t})()}();
//# sourceMappingURL=main.js.map