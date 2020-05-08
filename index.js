//////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////
const shortid = require('shortid')
const chalk = require('chalk')

//////////////////////////////////////////
// SETUP
//////////////////////////////////////////

// todo: refer to chrysalis and grab vocabulary and instructional data
// list of movement objects with criteria
const dictionary = [
  {
    move: 'move',
    count: 3,
    popularity: 25,
    symbol: 'M',
    id: shortid.generate(),
  },
  {
    move: 'shift',
    count: 1,
    popularity: 25,
    symbol: '>',
    id: shortid.generate(),
  },
  {
    move: 'slowmo',
    count: 5,
    popularity: 25,
    symbol: 'S',
    id: shortid.generate(),
  },
  {
    move: 'hold',
    count: 1,
    popularity: 25,
    symbol: '#',
    id: shortid.generate(),
  },
]

//////////////////////////////////////////
// CONFIG
//////////////////////////////////////////
const config = {
  length: 32, // divisible by 8 in terms relative to music
}

//////////////////////////////////////////
// INIT
//////////////////////////////////////////
let recipe = [...Array(config.length)].map((x) => {
  // generate a list of moves to pick from
  let list = dictionary
    .map((move) => [...Array(move.popularity).fill(move.id)])
    .flat()

  // pick one
  const id = list[rand(0, list.length - 1)]

  // reduce popularity
  dictionary[dictionary.findIndex((move) => move.id === id)].popularity--
  console.log(dictionary)

  const move = dictionary.find((move) => move.id === id)
  return move
})

const pattern = recipe
  .map((move) => `${move.symbol}${'_'.repeat(move.count)}`)
  .join('')

//////////////////////////////////////////
// OUTPUT
//////////////////////////////////////////

console.log()
console.log(recipe)
console.log()
console.log(chalk.blue(JSON.stringify(dictionary, null, 4)))
console.log()
console.log(chalk.bold.keyword('orange')(pattern))

//////////////////////////////////////////
// HELPERS
//////////////////////////////////////////

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
