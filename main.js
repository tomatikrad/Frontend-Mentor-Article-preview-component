const btnShare = document.querySelector(".button-share"),
  sectShare = document.querySelector(".card__share-sect");

btnShare.addEventListener("click", () => {
  btnShare.classList.toggle("active");
  sectShare.classList.toggle("show");
});
