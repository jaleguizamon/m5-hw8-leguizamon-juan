// Create an Array of at least 3 losing messages
const lossMessages = [
    "Not correct... try again!",
    "Close, but not quite... try again!",
    "Incorrect answer... try again!",
];
// Create variables to count wins and losses
var winCount = 0;
var lossCount = 0;
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
const messageObj = document.getElementById("message");
const winsObj = document.getElementById("wins");
const lossesObj = document.getElementById("losses");
var selectedNum = 0;
var rand = 0;

// target all .box elements and attach a click event listener to each one using a loop
const boxObjects = document.querySelectorAll(".box");
for(var i=0; i<boxObjects.length; i++){
    boxObjects[i].onclick = function(event) {
        selectedNum = parseInt(this.textContent);
        winningNum = getRandomNumber();
        verifyWin(selectedNum,winningNum);
        displayTotals();
      }
}
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
function getRandomNumber() {
    return Math.floor(Math.random() * (3) + 1);
}

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
function verifyWin(selectedNum, winningNum){
    if(selectedNum == winningNum){
        messageObj.textContent = "Hooray! You're a winner!";
        winCount++;
    }else{
        messageObj.textContent = lossMessages[winningNum-1];
        lossCount++;
    }
}

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
function displayTotals(){
    winsObj.innerHTML = "<p>wins: "+winCount+"</p>";
    lossesObj.innerHTML = "<p>losses: "+lossCount+"</p>";
}