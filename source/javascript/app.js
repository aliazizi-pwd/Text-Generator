let $ = document;
let countText = 0;
let selection = "";

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
            // selection = e.target.dataset.name;
            for (let i = 0; i < btnsLanguage.length; i++) {
                btnsLanguage[i].classList.replace("btn-warning", "btn-light");
            }   
            
            btn.classList.replace("btn-light","btn-warning");
        });
    });
}




// add event listener button element html
btnPlus.addEventListener("click",plusCountGenerate);
btnMinus.addEventListener("click",minusCountGenerate);
// selected language
SelectingLanguage();