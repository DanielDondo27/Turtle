(() => {
   const LINE = document.querySelector(".line");
   const SECTION = document.querySelector(".map__list");
   const CIRCLES = document.querySelectorAll(".circle");
   const LAST_ITEM = [...document.querySelectorAll(".map__item")].slice(-1)[0];
   LINE.style.maxHeight = `${SECTION.offsetHeight - LAST_ITEM.offsetHeight}px`;
   window.onscroll = () => {
      LINE.style.height = "0px";
      const LINE_POS_Y = LINE.getBoundingClientRect().top;
      const SCREEN_CENTER = screen.height / 2;
      CIRCLES.forEach((x) => {
         if (SCREEN_CENTER >= x.getBoundingClientRect().top) {
            x.style.backgroundColor = "white";
         } else {
            x.style.backgroundColor = "#6c6e26";
         }
      });
      if (SCREEN_CENTER > LINE_POS_Y) {
         LINE.style.height = `${parseInt(LINE.style.height) + SCREEN_CENTER - LINE_POS_Y
            }px`;
      }
   };
})();