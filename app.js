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

  partners.push([a.genotype, b.genotype])
})

console.log(partners)

_.times(maxGenerations, function() {

})

function createInitialPopulation() {
 _.times(populationSize, function() {
  var parent = new DNA(targetString)
  parent.createRandomGenotype()
  parents.push(parent)
 })
}
