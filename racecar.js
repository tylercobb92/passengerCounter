//Using functions to write less code
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
// //setting up the race
// countdown()
// // console.log(5)
// // console.log(4)
// // console.log(3)
// // console.log(2)
// // console.log(1)

// //GO!
// //Players running race
// //race is finished

// //start new race
// countdown()
// // console.log(5)
// // console.log(4)
// // console.log(3)
// // console.log(2)
// // console.log(1)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalTime() {
//     let sum = 0;
//     sum = lap1 + lap2 + lap3;
//     console.log(sum);
// }

// totalTime()

let lapsCompleted = 0
//create function that increments the lapsCompleted variable with one
//run it three times

function lapFinished() {
    lapsCompleted += 1
}
lapFinished()
lapFinished()
lapFinished()

console.log(lapsCompleted)
