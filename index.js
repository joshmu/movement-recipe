const createRecipe = require('./recipe.js')

const chalk = require('chalk')
const log = console.log

const recipe = createRecipe({ rounds: 100 })

log(`define moves:\n${recipe.defineMoves}`)
log(`# of beats: ${recipe.beats}`)
log(`# of moves: ${recipe.moves}`)
log(chalk.yellow(`\n${recipe.pattern}\n`))
