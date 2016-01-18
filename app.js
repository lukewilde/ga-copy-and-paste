var DNA = require('./dna')
var populationTools = require('./population-tools')
var matingBucket = require('./mating-bucket')

var _ = require('lodash')
var populationSize = 200
var parents = []
var partners = []
var targetString = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed viverra eros lectus, consectetur lacinia nulla tempus nec. aliquam id bibendum tellus. fusce at ante vitae mi suscipit egestas sit amet nec ex. aenean malesuada iaculis scelerisque. suspendisse vestibulum mi quis cursus pharetra. vivamus augue urna, interdum sed imperdiet in, posuere suscipit nisi. sed justo mi, maximus ac interdum eget, laoreet vitae ex. donec nec ex pellentesque, pellentesque augue at, ornare ligula. sed imperdiet enim vitae diam eleifend vehicula. proin bibendum, purus a facilisis elementum, neque tortor tempus nibh, vitae semper justo leo a justo. aliquam auctor arcu quis ante condimentum, vel varius magna feugiat.'
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
