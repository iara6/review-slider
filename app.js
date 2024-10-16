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

container.innerHTML = 
  people.map((person, index) => {
    const {img, name, job, review} = person;
    let position = 'next';

    if (index === 0) {
      position = 'active';
    };

    if (index === people.length - 1) {
      position = 'last';
    };

    if (peopleData.length <= 1) {
      position = 'active';
    };

    return `
      <article class="slide ${position}">
        <div class="slide-user-container"> 
          <img class="img" src=${img} alt="${name}">
          <h4>${name}</h4>
          <p class="occupation">${job}</p>
        </div>
        <div class="slide-review-container">
          <div class="review-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <p class="review-text">${review}</p>
          <div class="feather-icon">
            <i class="fa-solid fa-feather"></i>
          </div>
        </div>  
      </article>
    `
}).join('');



// console.log(container.innerHTML);

function slider(direction) {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling; 

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove('active');
  last.classList.remove('last');
  next.classList.remove('next');

  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
  
}

nextBtn.addEventListener("click", () => {
  slider();
});
/* 
< active  -  next  -   last

< next -  last   - active */