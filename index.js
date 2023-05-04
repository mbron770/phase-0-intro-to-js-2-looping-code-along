// Code your solutions in this file



/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

//const names = []; 

function writeCards(names, event) {
    const newNames = []; 
    for(let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
        newNames.push(message);
    }

    return newNames;   
}

function countDown() {
    let count = 10;
    while(0 <= count) {
        console.log(count--); 
    }
}