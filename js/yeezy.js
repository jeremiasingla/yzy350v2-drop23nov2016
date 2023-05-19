function changeImages(imgUrls) {
  imgChange1.src = imgUrls[0];
  imgChange2.src = imgUrls[1];
  imgChange3.src = imgUrls[2];
  imgChange4.src = imgUrls[3];
}

function setActiveColor(activeElement, inactiveElements) {
  activeElement.classList.add("active");

  for (const element of inactiveElements) {
    element.classList.remove("active");
  }
}

const imgChange1 = document.getElementById("imgChange1");
const imgChange2 = document.getElementById("imgChange2");
const imgChange3 = document.getElementById("imgChange3");
const imgChange4 = document.getElementById("imgChange4");

const redBtn = document.getElementById("Red");
const greenBtn = document.getElementById("Green");
const copperBtn = document.getElementById("Copper");

redBtn.onclick = function () {
  const redUrls = [
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/red/red1.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/red/red2.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/red/red3.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/red/red4.jpeg",
  ];
  changeImages(redUrls);
};

greenBtn.onclick = function () {
  const greenUrls = [
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/green/green1.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/green/green2.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/green/green3.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/green/green4.jpeg",
  ];
  changeImages(greenUrls);
};

copperBtn.onclick = function () {
  const copperUrls = [
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/copper/copper1.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/copper/copper2.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/copper/copper3.jpeg",
    "https://jeremiasingla.github.io/yzy350v2-drop23nov2016/images/copper/copper4.jpeg",
  ];
  changeImages(copperUrls);
};

const colorRed = document.querySelector(".color__picker--red");
const colorGreen = document.querySelector(".color__picker--green");
const colorCopper = document.querySelector(".color__picker--copper");
const selectRed = document.querySelector(".select__color--red");
const selectGreen = document.querySelector(".select__color--green");
const selectCopper = document.querySelector(".select__color--copper");

colorRed.addEventListener("click", () => {
  setActiveColor(colorRed, [colorGreen, colorCopper]);
  setHidden(selectRed, selectGreen, selectCopper);
});

colorGreen.addEventListener("click", () => {
  setActiveColor(colorGreen, [colorRed, colorCopper]);
  setHidden(selectGreen, selectRed, selectCopper);
});

colorCopper.addEventListener("click", () => {
  setActiveColor(colorCopper, [colorRed, colorGreen]);
  setHidden(selectCopper, selectRed, selectGreen);
});

function setHidden(activeElement, ...elements) {
  activeElement.classList.remove("hidden");

  for (const element of elements) {
    element.classList.add("hidden");
  }
}

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
