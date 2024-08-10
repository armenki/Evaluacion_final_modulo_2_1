
/*const btnPopUp = document.querySelector('.btnContacto-popup');
const iconClose = document.querySelector('.icono-cerrar');


btnPopUp.addEventListener('click', ()=>{
    contacto.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    contacto.classList.remove('active-popup');
});
*/

const scrollers = document.querySelectorAll(".scroller");
console.log(scrollers);
addAnimation();
function addAnimation() {
    console.log("dentro de la funcion");
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    console.log("dentro set atribbute");
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
