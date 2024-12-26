const containerEle = document.querySelector(".container");
const genColorBtn = document.querySelector(".genColorBtn");
const numCard = 12;

for (let index = 0; index < numCard; index++) {
    const colorContainerEle = document.createElement("div");

    colorContainerEle.classList.add("color-container");
    containerEle.appendChild(colorContainerEle);
}
const selectColorContainer = document.querySelectorAll(".color-container");


function generateColors() {
    selectColorContainer.forEach((e) => {
        const newColorCode = radomColor();
        e.style.backgroundColor = "#" + newColorCode;
        e.innerText = "#" + newColorCode;
    })
}


function radomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum, randomNum + 1);

    }
    return colorCode;
}


genColorBtn.addEventListener("click", generateColors);

radomColor();
generateColors();

