let $ = document;
let countText = 0;
let selection = "English";

const btnGenerateText = $.querySelector(".btn-generate");
const btnEnglish = $.querySelector(".btn-en");
const btnPersian = $.querySelector(".btn-Pe");
const btnPlus = $.querySelector(".btn-plus");
const btnMinus = $.querySelector(".btn-minus");
const filterTag = $.querySelector(".filterTag");
const btnEraser = $.querySelector(".btn-eraser");
const inputCountText = $.querySelector(".input-count");
const showTextGenerator = $.querySelector(".show-textGenerator");
const btnsLanguage = $.querySelectorAll("#btn");
const btnCopy = $.querySelector(".btn-copy");


// import * data from "data.js" :)
import { generateEnglish , generatePersian } from "./data.js";


// plus count text generate 
function plusCountGenerate () {
    countText++;
    inputCountText.value = countText;
}

// Miuns count text generate 
function minusCountGenerate () {
    countText--;
    if (countText < 0) {
        countText = 0;
    }
    inputCountText.value = countText;
}

// Selecting Language, language selection
function SelectingLanguage () {
    btnsLanguage.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            selection = e.target.dataset.name;
            for (let i = 0; i < btnsLanguage.length; i++) {
                btnsLanguage[i].classList.replace("btn-warning", "btn-light");
            }   

            btn.classList.replace("btn-light","btn-warning");
        });
    });
}


// text Generator Handler
function textGeneratorHandler () {
    let countTextValue = inputCountText.value;
    let randomTextGenerate , newTextData , resultGenerateFinal;
    
    
    if (selection === "English") {
        if (countTextValue === "" || countTextValue > 7) {
            randomTextGenerate = generateEnglish[Math.floor(Math.random() * generateEnglish.length)];
            showTextGenerator.innerHTML = `<p class="p-3 text-start set-font">${randomTextGenerate}</p>`;
        } else {
            newTextData = generateEnglish.slice(0 , countTextValue);
            
            resultGenerateFinal = newTextData.map(function (text) {
                return `<p class="p-3 text-start set-font">${text}</p>`;
            }).join(" ");

            
            showTextGenerator.innerHTML = resultGenerateFinal;
        }
    } else { //Persian = ?
        if (countTextValue === "" || countTextValue > 7) {
            randomTextGenerate = generatePersian[Math.floor(Math.random() * generatePersian.length)];
            showTextGenerator.innerHTML = `<p class="p-3 text-end set-font">${randomTextGenerate}</p>`;
        } else {
            newTextData = generatePersian.slice(0 , countTextValue);

            resultGenerateFinal = newTextData.map(function (text) {
                return `<p class="p-3 text-end set-font">${text}</p>`;
            }).join(" ");

            showTextGenerator.innerHTML = resultGenerateFinal;
        }
    }   
}

// copy text :)
function copyTextGenerator (e) {

    e.preventDefault();

    let textData = showTextGenerator.querySelectorAll("p");
    let copyTextData = "";
    textData.forEach(function (text) {
        copyTextData += text.innerHTML;
    });
    
    navigator.clipboard.writeText(copyTextData);
    
    
    Swal.fire({
        title:"It was successful",
        text:"Text copied successfully",
        icon:"success",
        showClass : {
            popup:
            `animate__animated
            animate__fadeInUp
            animate__faster`,
        },
        hideClass : {
            popup : 
            `animate__animated
            animate__fadeOutDown
            animate__faster`
        }
    })
}


// filter Tag Text Generator
function filterTagTextGenerator (e) {
    let targetValue = e.target.value;
    let textData = showTextGenerator.querySelectorAll("p");


    textData.forEach(function (text) {
        switch (targetValue) {
            case "p":
                text.className = "p-3 set-font p";
                break;
            case "h1":
                text.className = "p-3 set-font h1";
                break;
            case "h2":
                text.className = "p-3 set-font h2";
                break;
            case "h3":
                text.className = "p-3 set-font h3";
                break; 
            case "h4":
                text.className = "p-3 set-font h4";
                break;
            case "h5":
                text.className = "p-3 set-font h5";
                break;
            case "h6":
                text.className = "p-3 set-font h6";
                break;
        }
    });
}




// add event listener button element html
btnPlus.addEventListener("click",plusCountGenerate);
btnMinus.addEventListener("click",minusCountGenerate);
btnGenerateText.addEventListener("click",textGeneratorHandler);
btnCopy.addEventListener("click",copyTextGenerator);
// selected language
SelectingLanguage();
// change select
filterTag.addEventListener("change",filterTagTextGenerator);