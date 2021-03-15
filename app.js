// playGame(userPlay(), computerPlay());

// function userPlay() {
//     let userChoice = prompt(`Select Rock, Paper, or Scissors`);
//     userChoice = userChoice.toLowerCase();
//     userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
//     return userChoice;
// }

// function computerPlay() {
//     let computerChoice = Math.floor(Math.random() * 3) + 1;

//     if (computerChoice === 1) {
//         computerChoice = 'Rock';
//     } else if (computerChoice === 2) {
//         computerChoice = 'Paper';
//     } else {
//         computerChoice = 'Scissors';
//     }

//     return computerChoice;
// }

// function playGame(user, computer) {
//     if (user === 'Rock' && computer === 'Paper') {
//         console.log(`User lost! ${user} doesn't beat ${computer}`);
//     } else if (user === 'Rock' && computer === 'Scissors') {
//         console.log(`User wins! ${user} beats ${computer}`);
//     } else if (user === 'Paper' && computer === 'Rock') {
//         console.log(`User wins! ${user} beats ${computer}`);
//     } else if (user === 'Paper' && computer === 'Scissors') {
//         console.log(`User lost! ${user} doesn't beat ${computer}`);
//     } else if (user === 'Scissors' && computer === 'Rock') {
//         console.log(`User lost! ${user} does not beat ${computer}`);
//     } else if (user === 'Scissors' && computer === 'Paper') {
//         console.log(`User wins! ${user} beats ${computer}`);
//     } else {
//         console.log(`It's a tie! ${user} and ${computer} are equal!`);
//     }
// }

const array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

console.log(array[2][0]);