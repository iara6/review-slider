import peopleData from "./data.js";

const container = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (peopleData.length === 1) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
};


let people = [...peopleData];

if (peopleData.length === 2) {
  people = [...peopleData, ...peopleData];
};
