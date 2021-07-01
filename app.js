let count = 0
let countEl = document.getElementById("count-el")



function increment() {
    // console.log("BUTTON CLICKED");
    count += 1;
    countEl.innerText = count;
    // console.log(count)
}

//create save() which logs out the count when called
function save() {
    console.log(count);
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

let name = "Tyler Cobb"
let greeting = "Welcome back, "
let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"