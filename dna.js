var _ = require('lodash')

function DNA(targetLength) {

  this.targetLength = targetLength
  this.possibleCharacters = 'qwertyuiopasdfghjklzxcvbnm '
  this.genotype = ''
}

DNA.prototype.getFitness = function() {

}

DNA.prototype.createRandomGenotype = function() {
  _.times(this.targetLength, function() {
    this.genotype += this.getRandomCharacter()
  }, this)
}

DNA.prototype.getRandomCharacter = function() {
  var randomIndex = _.random(0, this.possibleCharacters.length - 1);
  return this.possibleCharacters[randomIndex]
}


module.exports = DNA
