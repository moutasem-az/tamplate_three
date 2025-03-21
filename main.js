
// start events
let countDownDate = new Date("dec 31, 2025 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date();
    let dateDeff = countDownDate - dateNow;
    let days = Math.floor(dateDeff / (1000 * 60 * 60 *24));
    let hours = Math.floor(dateDeff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDeff % (1000 * 60 * 60) / (1000 * 60 )); 
    let seconds = Math.floor(dateDeff % (1000 * 60) / 1000); 
    document.querySelector(".events .time .unit .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .time .unit .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .time .unit .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .time .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
},1000);
// end events
// start our-skills
let sectionOurSkills = document.querySelector(".our-skills");
let lastspans = document.querySelectorAll(".our-skills .the-progress span");
let firstSpans = document.querySelectorAll(".our-skills .skill > h3 > span");
window.onscroll = function() {
    if (window.scrollY >= sectionOurSkills.offsetTop - 400) {
        lastspans.forEach((ele) => {
            ele.style.width = ele.dataset.width; 
        })
    }
}
// end our-skills
// start stats
let sectionStats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number");
let started = false;
window.onscroll = function () {
    if (window.scrollY >= sectionStats.offsetTop - 500) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// end stats