var DNA = require('./dna')
var populationTools = require('./population-tools')
var matingBucket = require('./mating-bucket')

var _ = require('lodash')
var populationSize = 500
var parents = []
var partners = []
var targetString = 'this should take a bit longer'
var populationCount = 0;
var masterRace = false;

createInitialPopulation()

while(!masterRace) {

  populationCount ++

  populationTools.setNormalisedFitness(parents)

  var fittest = populationTools.sortByFitness(parents).pop();

  console.log('highest fitness for generation %s: %s (%s)', populationCount, fittest.fitness, fittest.genotype)

  if (fittest.genotype === targetString) {
    console.log('')
    console.log('we bleddy done it!')
    console.log(fittest)
    masterRace = true
  }

  matingBucket.populate(parents)

  partners = []

  _.times(populationSize, function() {
    var a = matingBucket.getMate();
    var b = matingBucket.getMate(a);

    if (!a || !b) {
      console.log(a, b)
    }

    partners.push([a, b])
  })

  // console.log(partners)

  parents = _.map(partners, function(couple) {
    return couple[0].coinFlipMate(couple[1])
  })
}

function createInitialPopulation() {
 _.times(populationSize, function() {
  var parent = new DNA(targetString)
  parent.createRandomGenotype()
  parents.push(parent)
 }, this)
}
