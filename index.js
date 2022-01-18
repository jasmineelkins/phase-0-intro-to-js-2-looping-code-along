// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//

const messages = [];

function writeCards(namesArray, event) {
  for (let n = 0; n < namesArray.length; n++) {
    // create thank you message for each name
    let message = `Thank you, ${namesArray[n]}, for the wonderful ${event} gift!`;
    debugger;

    // add message to array
    console.log(message);
    messages.push(message);
  }
  return messages;
}

function countDown(integer) {
  let count = integer;
  while (count >= 0) {
    console.log(count);
    count--;
    debugger;
  }
}

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts2(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`Wrapped ${array[i]} and added a bow!`);
//     debugger;
//   }

//   return array;
// }

// wrapGifts2(gifts);
