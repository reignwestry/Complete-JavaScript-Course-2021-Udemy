'use strict';

console.log('//# FUNCTIONS CALLING OTHER FUNCTIONS ')
console.log('//################################### ')

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor( apples, oranges ) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
     return juice;
}
fruitProcessor(2, 3);
