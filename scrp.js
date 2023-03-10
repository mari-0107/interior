


const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function() {
  const selectedLanguage = languageSelect.value;

  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
        if (element.classList.contains("en") || element.classList.contains("it") ||  element.classList.contains("uk") ||  element.classList.contains("ru") )
        {
            if (element.classList.contains(selectedLanguage)){
                element.style.display = "block";
            } else {
                element.style.display = "none"
            }}}

  const activeElements = document.getElementsByClassName("active");
  while (activeElements.length) {
    activeElements[0].classList.remove("active");
  }

  const activeLanguageElements = document.getElementsByClassName(selectedLanguage);
  for (let i = 0; i < activeLanguageElements.length; i++) {
    activeLanguageElements[i].classList.add("active");
  }
});

const BlockAbout = document.querySelector(".block-about");
const BlockPortfolio = document.querySelector(".block-portfolio");

const menuButtonAbout = document.querySelectorAll(".button-about-me");
menuButtonAbout.forEach(el => {el.addEventListener('click', function(){
BlockAbout.scrollIntoView({block: "center", behavior: "smooth"});})
})

const menuButtonPortfolio = document.querySelectorAll(".button-portfolio");
menuButtonPortfolio.forEach(el => {el.addEventListener('click', function(){
 BlockPortfolio.scrollIntoView({block: "center", behavior: "smooth"});})})





 window.addEventListener ('load', function() {
    setInterval(changeTitle, 5000);
  })

let titles = [["Disegno dell'autore", "Interni unici","Approccio individuale"], 
["Авторский дизайн","Унікальний інтерєр","Індивідуальний підхід"], 
["Author's design", "Unique interior","Individual approach"], 
["Авторский дизайн", "Уникальный интерьер", "Индивидуальный подход"]]

  var currentTitle = 0;
  function changeTitle() {
    const selectedLanguage1 = languageSelect.value;
    const slideTitlePar = document.querySelector(".block-slider-text");
const slideTitle = slideTitlePar.querySelector(`.${selectedLanguage1}`);

function blur(){
    slideTitle.style.opacity = "0.7"
}

function blurOf(){
    slideTitle.style.opacity = "1"
}

switch(selectedLanguage1){
    case "it": slideTitle.textContent = titles[0][currentTitle];
    setTimeout(blur, 4000);
    setTimeout(blurOf, 400);
    break;
    case "uk": slideTitle.textContent = titles[1][currentTitle];
    setTimeout(blur, 4000);
    setTimeout(blurOf, 400);
    break;
    case "en": slideTitle.textContent = titles[2][currentTitle];
    setTimeout(blur, 4000);
    setTimeout(blurOf, 400);
    break;
    case "ru": slideTitle.textContent = titles[3][currentTitle];
    setTimeout(blur, 4000);
    setTimeout(blurOf, 400);
    break;
}

    currentTitle++;
    if (currentTitle >= titles.length-1) {
      currentTitle = 0;
    }
  }

 window.addEventListener('load', function(){
    setInterval(changeImgMain, 8000)
 })

const MainImages = ["./main-slide/Bedroom-for-princess.jpg", "./main-slide/kitchen-silver-patina.JPG", "./main-slide/office.bmp"]


curImage = 0;

 function changeImgMain(){
    const mainImageP = document.querySelector(".slider-canvas");
    const mainImage = mainImageP.querySelector("img");
  
    curImage ++;
    if (curImage >= MainImages.length){
        curImage = 0
    }

    mainImage.src = MainImages[curImage];
 }


 const portimg = document.querySelectorAll(".portfolio-row-img");
 const mainPort = document.querySelector(".portfolio-main-photo");
 const mainPortImg = mainPort.querySelector("img");
const titlePort = document.querySelector(".main-photo-title").querySelector("h4");




 
let titlesPortfolio = [
["Soggiorno", "Mobiletto","Cucina", "Camera da letto", "Ladder", "Porta"], 
["Вітальня","Кабінет","Кухня", "Спальня", "Сходи", "Двері"], 
["Living room", "Office", "Kitchen", "Bedroom", "Stairs", "Doors"], 
["Гостинная","Кабинет","Кухня", "Спальня", "Лестница", "Двери"]]

languageSelect.addEventListener("change",   function changeTitlePort() {
    const selectedLanguage = languageSelect.value;
    const title1 = document.querySelector("h3#livingRoom");
    const title2 = document.querySelector("h3#Office");
    const title3 = document.querySelector("h3#Kitchen");
    const title4 = document.querySelector("h3#bedroom");
    const title5 = document.querySelector("h3#Ladder");
    const title6 = document.querySelector("h3#door");
    
    mainPort.querySelector(".main-photo-title").querySelector("h4").textContent = "";

    switch(selectedLanguage){
    case "it": 
    title1.textContent = titlesPortfolio[0][0];
    title2.textContent = titlesPortfolio[0][1];
    title3.textContent = titlesPortfolio[0][2];
    title4.textContent = titlesPortfolio[0][3];
    title5.textContent = titlesPortfolio[0][4];
    title6.textContent = titlesPortfolio[0][5];
    break;
    case "uk":
    title1.textContent = titlesPortfolio[1][0];
    title2.textContent = titlesPortfolio[1][1];
    title3.textContent = titlesPortfolio[1][2];
    title4.textContent = titlesPortfolio[1][3];
    title5.textContent = titlesPortfolio[1][4];
    title6.textContent = titlesPortfolio[1][5];
    break;
    case "en": 
    title1.textContent = titlesPortfolio[2][0];
    title2.textContent = titlesPortfolio[2][1];
    title3.textContent = titlesPortfolio[2][2];
    title4.textContent = titlesPortfolio[2][3];
    title5.textContent = titlesPortfolio[2][4];
    title6.textContent = titlesPortfolio[2][5];
    break;
    case "ru": 
    title1.textContent = titlesPortfolio[3][0];
    title2.textContent = titlesPortfolio[3][1];
    title3.textContent = titlesPortfolio[3][2];
    title4.textContent = titlesPortfolio[3][3];
    title5.textContent = titlesPortfolio[3][4];
    title6.textContent = titlesPortfolio[3][5];
    break;
}
})


portimg.forEach(el => {
    el.addEventListener('click', function(){
            mainPortImg.src = el.src;
            const par1 = el.parentNode;
            const par2 = par1.parentNode.querySelector(".portfolio-row-header");
            const par3 = par2.querySelector('h3').textContent;
            mainPort.querySelector(".main-photo-title").querySelector("h4").textContent = par3;
            mainPortImg.scrollIntoView({block: "center", behavior: "smooth"});
    })
 })
 

