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
}

const hideSlide = (index) => {
    slides[index].classList.add("hide");
    slides[index].classList.remove("show");
}

buttonNext.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
        hideSlide(currentIndex);
        currentIndex++;
        currentTab.textContent = `0${getCurrentIndex() + 1}`;
        showSlide(currentIndex);
    }
});

buttonPrev.addEventListener("click", function () {
    if (currentIndex > 0) {
        hideSlide(currentIndex);
        currentIndex--;
        currentTab.textContent = `0${getCurrentIndex() + 1}`;
        showSlide(currentIndex)
    }
})

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    hideSlide(i)
}

function getCurrentIndex() {
    return currentIndex;
}

showSlide(currentIndex);
currentTab.textContent = `0${currentIndex + 1}`;


// ================== GENDERS ================== //

const genders = [...document.getElementById("gender").children];
let activeGender = null;

function setActiveGender(gender) {
    if (gender.classList.contains("calculating__choose-item_active")) return;

    genders.forEach(el => el.classList.remove("calculating__choose-item_active"));
    gender.classList.add("calculating__choose-item_active");
    activeGender = gender.dataset.gender;
}

genders.forEach(gender => {
    gender.addEventListener("click", () => setActiveGender(gender));
})