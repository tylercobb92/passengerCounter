//1. Grab save-el paragraph and store it in variable saveEl
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    // console.log("BUTTON CLICKED");
    count += 1;
    countEl.textContent = count;
    // console.log(count)
}

//create save() which logs out the count when called
//2. Create variable that contains both the count and dash separatoer ie "12 - "
//3. Render variable in saveEl using innerText
//Note: make sure to not delete previous saves

function save() {
    // console.log(count);
    let currentCount = count + " - ";
    saveEl.textContent += currentCount;
    count = 0;
    countEl.textContent = count;
}
//random practice below

// let username = "per"
// let message = "You have three new notifications"
// // console.log(message + ", " + username)
// let messageToUser = (message + ", " + username + "!")
// console.log(messageToUser)

// let name = "Tyler"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = "4"
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints //410, string always wins

// let name = "Tyler Cobb"
// let greeting = "Welcome back, "
// let welcomeEl = document.getElementById("welcome-el")
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"