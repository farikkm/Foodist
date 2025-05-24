const totalTab = document.getElementById("total");
const currentTab = document.getElementById("current");
const slides = document.querySelectorAll(".offer__slide");
const buttonPrev = document.querySelector(".offer__slider-prev");
const buttonNext = document.querySelector(".offer__slider-next");

let currentIndex = 0;

const showSlide = (index) => {
  slides[index].classList.remove("hide");
  slides[index].classList.add("show");
  slides[index].classList.add("fade");
};

const hideSlide = (index) => {
  slides[index].classList.add("hide");
  slides[index].classList.remove("show");
  slides[index].classList.remove("fade");
};

const setNewCurrentTab = (index) => {
  currentTab.textContent = `0${index + 1}`;
}

const increaseSlideIndex = () => {
  currentIndex++;
}

const decreaseSlideIndex = () => {
  currentIndex--;
}

buttonNext.addEventListener("click", function () {
  if (currentIndex < slides.length - 1) {
    hideSlide(currentIndex);
    increaseSlideIndex();
    setNewCurrentTab(currentIndex);
    showSlide(currentIndex);
  }
});

buttonPrev.addEventListener("click", function () {
  if (currentIndex > 0) {
    hideSlide(currentIndex);
    decreaseSlideIndex();
    setNewCurrentTab(currentIndex);
    showSlide(currentIndex);
  }
});

slides.forEach((_, index) => hideSlide(index));

showSlide(currentIndex);
setNewCurrentTab(currentIndex);

// ================== GENDERS ================== //

const genders = [...document.getElementById("gender").children];
let activeGender = null;

function setActiveGender(gender) {
  if (gender.classList.contains("calculating__choose-item_active")) return;

  genders.forEach((el) =>
    el.classList.remove("calculating__choose-item_active")
  );
  gender.classList.add("calculating__choose-item_active");
  activeGender = gender.dataset.gender;
}

genders.forEach((gender) => {
  gender.addEventListener("click", () => setActiveGender(gender));
});

// ================== CALCULATING FORM ================== //

const calculatingInputs = document.getElementById("calculating-form").children;

let measurements = { height: 0, weight: 0, age: 0 };

for (const input of calculatingInputs) {
  input.addEventListener("input", (e) => {
    const { id, value } = e.target; // { target: { value: "asdf" } }

    if (id in measurements) {
      console.log(id);

      measurements[id] = parseInt(value);
    }

    console.log(measurements);
    
  });
}

// for (let index = 0; index < calculatingInputs.length; index++) {
//   const input = calculatingInputs[index];

//   input.addEventListener("input", (e) => {
//     if (input.matches("#height")) {
//       height = Number(e.target.value);
//     }
//     if (input.matches("#weight")) {
//       weight = Number(e.target.value);
//     }
//     if (input.matches("#age")) {
//       age = Number(e.target.value);
//     }

//     console.log("Height: ", height);
//     console.log("Weight: ", weight);
//     console.log("Age: ", age);
//   });
// }
