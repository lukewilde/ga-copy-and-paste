var DNA = require('./dna')
var matingPool = require('./mating-pool')

var _ = require('lodash')
var populationSize = 10
var parents = []
var children = []
var maxGenerations = 100
var targetString = 'dingus amongus'

createInitialPopulation()

console.log('=== inital population ===')
matingPool.setNormalisedFitness(parents)

console.log(_.pluck(parents, 'fitness'))
console.log(_.pluck(parents, 'normalisedFitness'))

_.times(maxGenerations, function() {

})

function createInitialPopulation() {
 _.times(populationSize, function() {
  var parent = new DNA(targetString)
  parent.createRandomGenotype()
  parents.push(parent)
 })
}
