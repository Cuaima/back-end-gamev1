//Selects a random color (took the hangman game function as example)
export const colorList = ["red", "blue", "green", "yellow", "magenta"]
export const changeColor = () => colorList[Math.floor(Math.random() * colorList.length)]

//Turns board into a string and then to a json file (so it can be stored in the database)
const defaultBoard = [['o', 'o', 'o'],['o', 'o', 'o'],['o', 'o', 'o']]
const stringifiedBoard = JSON.stringify(defaultBoard)
export const jsonBoard = JSON.parse(stringifiedBoard)

//Count the difference of moves from one board to another
export const moves = (board1, board2) => 
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length