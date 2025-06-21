let scrollContainer = document.querySelector(".column_product");
let btn_back = document.getElementById("btn_back");
let btn_next = document.getElementById("btn_next");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
})

btn_back.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
});
btn_next.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
});