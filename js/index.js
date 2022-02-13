let currentActiveSection = 0;
const ACTIVE_SECTION_CLASS = "main__section_active";
const SECTIONS_CLASS = ".main__section";

function changeActiveSection(event, nextCount) {
    let sections = document.querySelectorAll(SECTIONS_CLASS);
    let sectionsCount = sections.length;

    sections[currentActiveSection].classList.remove(ACTIVE_SECTION_CLASS);

    if (currentActiveSection + nextCount >= sectionsCount) {
        currentActiveSection = 0;
    } else if (currentActiveSection + nextCount < 0) {
        currentActiveSection = sectionsCount - 1;
    } else {
        currentActiveSection += nextCount;
    }

    sections[currentActiveSection].classList.add(ACTIVE_SECTION_CLASS);
}

function onBurgerClick(event) {
    document.querySelector("#header").classList.toggle("active");
    document.querySelector("body").classList.toggle("block-scroll");
}

document.querySelector("#nextButton").addEventListener("click", (event) => changeActiveSection(event, 1));
document.querySelector("#previousButton").addEventListener("click", (event) => changeActiveSection(event, -1));
document.querySelector("#burgerMenu").addEventListener("click", onBurgerClick);