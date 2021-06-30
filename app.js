let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    // console.log("BUTTON CLICKED");
    count += 1;
    countEl.innerText = count;
    // console.log(count)
}
