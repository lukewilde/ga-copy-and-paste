var DNA = require('./dna')
var populationTools = require('./population-tools')
var matingBucket = require('./mating-bucket')

var _ = require('lodash')
var populationSize = 10
var parents = []
var children = []
var partners = []
var maxGenerations = 100
var targetString = 'dingus amongus'

createInitialPopulation()

console.log('=== inital population ===')
populationTools.setNormalisedFitness(parents)

_.each(parents, function(parent) {
  console.log(parent.fitness, parent.normalisedFitness)
})

matingBucket.populate(parents)

children = []
partners = []

_.times(populationSize, function() {
  var a = matingBucket.getMate();
  var b = matingBucket.getMate(a);

  partners.push([a, b])
})

children = _.map(partners, function(couple) {
  return couple[0].coinFlipMate(couple[1])
})

console.log('=== second generation ===')

populationTools.setNormalisedFitness(children)

_.each(children, function(child) {
  console.log(child.fitness, child.normalisedFitness)
})

_.times(maxGenerations, function() {

})

function createInitialPopulation() {
 _.times(populationSize, function() {
  var parent = new DNA(targetString)
  parent.createRandomGenotype()
  parents.push(parent)
 })
}
