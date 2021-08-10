/*
const player = {
    name : "hazzun",
    points : 10,
    handsome : true,
}

console.log(player);

player.points = player.points + 100;

console.log(player);
console.log(player.name);

player.newName = "King of hazzun";
console.log(player);
*/

/*
function sayHello(name, age){
    console.log("Hello my name is " + name + " and I'm " +age);
}
sayHello("핮운", 24);
sayHello("hazzun", 24);
sayHello("@_hazzun", 24);
*/

/*
function plus(a, b){
    console.log(a + b);
}
function devide(a, b){
    console.log(a / b);
}
plus(10, 90); 
devide(91, 9);
*/

/*
const player = {
    name : "hazzun",
    sayHello : function(othersName){
        console.log("Hi " + othersName + ", Welcome!");
    },
};
console.log(player.name);
player.sayHello("Jimmy");
*/

/*
const calculator = {
    add : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    },
    devide : function(a, b){
        return a / b;
    },
    power : function(a, b){
        return a**b;
    }
}

const addResult = calculator.add(10, 5);
const minusResult = calculator.minus(20, addResult);
const mulResult = calculator.mul(minusResult , 12);
const devideResult = calculator.devide(20, mulResult);
const powerResult = calculator.power(devideResult, 2);

// console.log(addResult);
// console.log(minusResult);
// console.log(mulResult);
// console.log(devideResult);
// console.log(powerResult);
*/

/*
const age = 22;
function calculateKORage(foreignAge) {
    return foreignAge + 2;
}

const krAge = calculateKORage(age);
console.log(krAge);         */

/*
const age = parseInt(prompt("How old are you"));
if(isNaN(age) || age < 0) {
    prompt("제대로 된 나이를 입력하시옷");
} else if(0 <= age && age <= 19) { 
    console.log("미성년자 벤");
} else if(20 <= age && age <= 50){
    console.log("첫잔은 원샷!");
} else {
    console.log("술보단 운동을 하는게..");
}
*/

// const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    // console.log("mouse is here!");
    h1.innerText = "Mouse is here!";
    // title.style.color = "yello";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Copier!");
}

function handleWindowOffline(){
    alert("SOS ! no Wi-fi");
}

function handleWindowOnline(){
    alert("Oooooooh yeah lets get it!")
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("onlone", handleWindowOnline);
*/

/*
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/
/*
function handleTitleClick(){
    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } 
    // h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);
*/


//진짜 만들기 App
const loginForm = document.querySelector("#login-form");  
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}