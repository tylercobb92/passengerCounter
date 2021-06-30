//document.getElementById("count-el").innerText = 5

//let count = 5

//console.log(count)

//initialize count as 0
//listen for clicks on increment button
//add to count when button is clicked
//change count-el in html 

let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    // console.log("BUTTON CLICKED");
    count += 1;
    countEl.innerText = count;
    // console.log(count)
}

//Random practice below here
// function fourtyTwo() {
//     console.log(42);
// }
// fourtyTwo()