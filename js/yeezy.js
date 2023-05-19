let redBtn = document.getElementById("Red");
let greenBtn = document.getElementById("Green");
let copperBtn = document.getElementById("Copper");
let imgChange1 = document.getElementById("imgChange1");
let imgChange2 = document.getElementById("imgChange2");
let imgChange3 = document.getElementById("imgChange3");
let imgChange4 = document.getElementById("imgChange4");

redBtn.onclick = function () {
  imgChange1.src = "images/red/red1.jpeg";
  imgChange2.src = "images/red/red2.jpeg";
  imgChange3.src = "images/red/red3.jpeg";
  imgChange4.src = "images/red/red4.jpeg";
};

greenBtn.onclick = function () {
  imgChange1.src = "images/green/green1.jpeg";
  imgChange2.src = "images/green/green2.jpeg";
  imgChange3.src = "images/green/green3.jpeg";
  imgChange4.src = "images/green/green4.jpeg";
};

copperBtn.onclick = function () {
  imgChange1.src = "images/copper/copper1.jpeg";
  imgChange2.src = "images/copper/copper2.jpeg";
  imgChange3.src = "images/copper/copper3.jpeg";
  imgChange4.src = "images/copper/copper4.jpeg";
};

const colorRed = document.querySelector(".color__picker--red");
const colorGreen = document.querySelector(".color__picker--green");
const colorCopper = document.querySelector(".color__picker--copper");
const selectRed = document.querySelector(".select__color--red");
const selectGreen = document.querySelector(".select__color--green");
const selectCopper = document.querySelector(".select__color--copper");

colorRed.addEventListener("click", () => {
  colorRed.classList.add("active");
  colorGreen.classList.remove("active");
  colorCopper.classList.remove("active");
  selectRed.classList.remove("hidden");
  selectGreen.classList.add("hidden");
  selectCopper.classList.add("hidden");
});

colorGreen.addEventListener("click", () => {
  colorGreen.classList.add("active");
  colorRed.classList.remove("active");
  colorCopper.classList.remove("active");
  selectRed.classList.add("hidden");
  selectGreen.classList.remove("hidden");
  selectCopper.classList.add("hidden");
});

colorCopper.addEventListener("click", () => {
  colorCopper.classList.add("active");
  colorRed.classList.remove("active");
  colorGreen.classList.remove("active");
  selectRed.classList.add("hidden");
  selectGreen.classList.add("hidden");
  selectCopper.classList.remove("hidden");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  mouseDrag: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
