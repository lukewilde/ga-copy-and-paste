var _ = require('lodash')

function DNA(targetString) {

  this.targetString = targetString
  this.possibleCharacters = 'qwertyuiopasdfghjklzxcvbnm '
  this.genotype = ''
  this.fitness = 0
}

DNA.prototype.getFitness = function() {

  var score = 0

  _.each(this.genotype, function(character, index) {
    if (character === this.targetString[index]) {
      score ++
    }
  }, this)

  return Math.round(score * 100 / this.targetString.length)
}

DNA.prototype.createRandomGenotype = function() {
  _.times(this.targetString.length, function() {
    this.genotype += this.getRandomCharacter()
  }, this)

  this.fitness = this.getFitness()
}

DNA.prototype.getRandomCharacter = function() {
  var randomIndex = _.random(0, this.possibleCharacters.length - 1)
  return this.possibleCharacters[randomIndex]
}

DNA.prototype.coinFlipMate = function(mate) {

  var child = new DNA(this.targetString)

  _.each(this.genotype, function(gene, index) {

    var takeGeneFromMate = Math.random() > (0.5 - this.mutationRate / 2)
    var shouldMutateGene = Math.random() > 1 - this.mutationRate

    if (shouldMutateGene) {
      gene = this.getRandomCharacter()
    } else if (takeGeneFromMate) {
      gene = mate.genotype[index]
    }

    child.genotype += gene
  }, this)

  child.fitness = child.getFitness()

  return child
}


module.exports = DNA
