/**
 * Challenge: method chaining!
 *
 * 1. Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
 *    - I realize this might feel like busywork, but my intent will make sense soon
 *
 * 2. Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console
 */

// document.getElementById("new-deck").addEventListener("click", function() {
//     console.log("Clicked!")
// })

const voters = [
  { name: "Joe", email: "joe@joe.com", voted: true },
  { name: "Jane", email: "jane@jane.com", voted: true },
  { name: "Bo", email: "bo@bo.com", voted: false },
  { name: "Bane", email: "bane@bane.com", voted: false },
];

// Write your code below
const emailForVotes = voters
  .filter((voter) => voter.voted)
  .map((voter) => voter.email);

document
  .getElementById("new-deck")
  .addEventListener("click", () => console.log(emailForVotes));

// Final result: ["joe@joe.com", "jane@jane.com"]

// // const newDeck = document.querySelector("#new-deck");

// // const handleClick = () =>
// //   fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// //     .then((response) => response.json())
// //     .then((result) => console.log(result));

// // const callback = () => {
// //   console.log("I finally ran!");
// // };

// // setTimeout(callback, 2000);

// // newDeck.addEventListener("click", () => handleClick());

// const people = [
//   { name: "Jack", hasPet: true },
//   { name: "Jill", hasPet: false },
//   { name: "Alice", hasPet: true },
//   { name: "Bob", hasPet: false },
// ];

// function filterArray(array, callback) {
//   const resultingArray = [];

//   for (let item of array) {
//     const shouldBeIncluded = callback(item);
//     if (shouldBeIncluded) {
//       resultingArray.push(item);
//     }
//   }
//   return resultingArray;
// }

// // function gimmeThePets(person) {
// //   return person.hasPet;
// // }

// // const peopleWithPets = people.filter(gimmeThePets);

// // console.log(peopleWithPets);

// const peopleWithPets = filterArray(people, (person) => person.hasPet);
// console.log(peopleWithPets)
