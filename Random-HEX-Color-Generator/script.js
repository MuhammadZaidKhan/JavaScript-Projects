const containerEl = document.querySelector('.container');

for(let index = 0; index < 30; index++){

    const createElementEl = document.createElement("div");
    createElementEl.classList.add("color-container");

    const colorcodeEl = document.createElement("span");
    colorcodeEl.classList.add("color-code");
    createElementEl.appendChild(colorcodeEl);

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "Copy";

    createElementEl.appendChild(buttonEl);

    containerEl.appendChild(createElementEl);
}

function randomColor(){

    const random = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for(let index = 0; index < colorCodeLength; index++){

        const randomNumber = Math.floor(Math.random() * random.length);
        colorCode += random.substring(randomNumber, randomNumber+1); 
    }
    return colorCode;
}

const mainContainerEls = document.querySelectorAll(".color-container");

generateColor();

function generateColor(){

    for(let i = 0; i<mainContainerEls.length; i++){

        const colorContainerEl = mainContainerEls[i];
        const newColorCode = randomColor();
        const colorCode1 = colorContainerEl.querySelector(".color-code");

        colorContainerEl.style.backgroundColor = "#" + newColorCode;

        colorCode1.innerText = "#" + newColorCode;

    }

}

mainContainerEls.forEach((createElementEl)=>{

    const copyButton = createElementEl.querySelector("button");
    const colorcodeEl = createElementEl.querySelector(".color-code");

    copyButton.addEventListener("click",()=>{
        const colorCode = colorcodeEl.innerText;
        copyClipBoard(colorCode);
    });

});

function copyClipBoard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to ClipBoard : " + text)
    })
    .catch((error) =>{
        console.log("Failed to copy to clipboard", error);
    })
}