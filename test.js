//log original
var original = [['o', 'o', 'o'],['o', 'o', 'o'],['o', 'o', 'o']];
console.log(original, 'original');

//log stringified
var  stringified = JSON.stringify(original);
console.log(stringified, 'stringified');

//log formatted into json
var myJson = JSON.parse(stringified);
console.log(myJson, 'json');

//The given function
var moves = (board1, board2) =>
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length

//test differences between similar formats, expected result = 0
console.log(moves(original,myJson), 'moves of original vs json');

//introducing changes
var variation =[['x', 'x', 'o'],['o', 'o', 'o'],['o', 'o', 'o']];

//test differences between different inputs, expected result = 2
console.log(moves(variation,myJson), 'moves of variation array vs json');

//testing how the validation would be implemented in the controller
if (variation !== undefined && moves(variation,myJson)>1){ console.log('There\'s more than one item that is different!')}
