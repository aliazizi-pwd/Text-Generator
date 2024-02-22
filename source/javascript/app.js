let $ = document;
const btnGenerateText = $.querySelector(".btn-generate");
const btnEnglish = $.querySelector(".btn-en");
const btnPersian = $.querySelector(".btn-Pe");
const btnPlus = $.querySelector(".btn-plus");
const btnMinus = $.querySelector(".btn-minus");
const filterTag = $.querySelector(".filterTag");
const btnEraser = $.querySelector(".btn-eraser");
const showTextGenerator = $.querySelector(".show-textGenerator");



// import * data from "data.js" :)
import { generateEnglish , generatePersian } from "./data.js";
console.log(generateEnglish);
console.log(generatePersian);