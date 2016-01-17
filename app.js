var DNA = require('./dna')
var _ = require('lodash')

var populationSize = 10
var parents = []
var children = []
var maxGenerations = 100
var targetString = 'dingus amongus'

createInitialPopulation()

console.log('=== inital population ===')
_.each(parents, function(parent) {
  console.log(parent.genotype)
})

_.times(maxGenerations, function() {

})

function createInitialPopulation() {
 _.times(populationSize, function() {
  var parent = new DNA(targetString.length)
  parent.createRandomGenotype()
  parents.push(parent)
 })
}
