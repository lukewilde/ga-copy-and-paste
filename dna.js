var _ = require('lodash')

function DNA(targetString) {

  this.targetString = targetString
  this.possibleCharacters = 'qwertyuiopasdfghjklzxcvbnm '
  this.genotype = ''
}

DNA.prototype.getFitness = function() {

  var score = 0

  _.each(this.genotype, function(character, index) {
    if (character === this.targetString[index]) {
      score ++
    }
  }, this)

  return score * 100 / this.targetString.length;
}

DNA.prototype.createRandomGenotype = function() {
  _.times(this.targetString.length, function() {
    this.genotype += this.getRandomCharacter()
  }, this)
}

DNA.prototype.getRandomCharacter = function() {
  var randomIndex = _.random(0, this.possibleCharacters.length - 1)
  return this.possibleCharacters[randomIndex]
}


module.exports = DNA
