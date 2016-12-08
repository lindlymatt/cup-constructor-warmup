'use strict';

// Creates a cup, and allows different environments in which the users can drink; change the beverage, and do various other things.

var Cup = function (contents, temp, alcoholic, isFull) {
  this.contents = contents;
  this.temp = temp;
  this.alcoholic = alcoholic;
  this.isFull = isFull;
}

Cup.prototype.fillUp = function () {
  if (this.isFull === true) {
    return console.log(`You cannot fill this up anymore...`);
  }
  console.log(`*pours more ${this.contents} silently*`);
  this.isFull = true;
}

Cup.prototype.chugChugChug = function () {
  if (this.temp !== 'cold') {
    console.log('Woah, that is toasty. I do not think I will chug it!');
    return;
  }
  console.log(`*drinks ${this.contents} to the last drop*`);
  this.isFull = false;
}

Cup.prototype.changeBeverage = function (newContent, temp, alcoholic) {
  let oldContents = this.contents;
  this.contents = newContents;
  this.temp = temp;
  this.alcoholic = alcoholic;
  this.isFull = true;
  console.log(`Your cup's beverage has been changed from ${oldContents} to ${this.contents}, and it's a ${this.temp} drink!`)
}

Cup.prototype.minorTriesToDrink = function (age) {
  if (this.alcoholic === true) {
    return console.log(`Step away from the ${this.contents}, you're still many years away from being legal!`);
  }

  console.log(`Woah man, you stole my ${this.contents} but it's non alcoholic, so feel free to drink it!`);
  this.chugChugChug();
}

Cup.prototype.whatAmIDrinking = function () {
  console.log(`I'm currently drinking ${this.contents}, it is a  ${this.temp} drink!`);
}

var beer = new Cup('beer', 'cold', true, true);
var tea = new Cup('tea', 'hot', true, true);
var soda = new Cup('soda', 'cold', false, true);

console.log('Should return unable to fill: ');
beer.fillUp();
console.log('Should return it has been drank: ');
beer.chugChugChug();
console.log('Should not allow the minor to drink: ');
beer.minorTriesToDrink();
console.log('Should allow the minor to drink: ');
soda.minorTriesToDrink();
