var _ = require('lodash')

module.exports = {

  sortByFitness: function(population) {
    return _.sortBy(population, 'fitness', 'desc')
  },

  setNormalisedFitness: function(population) {
    var totalFitness = getTotal(_.pluck(population, 'fitness'))
    _.each(population, function(item) {
      item.normalisedFitness = item.fitness / totalFitness
    })
  }
}

function getTotal(values) {
  var total = 0
  _.each(values, function(value) {
    total += value
  })

  return total
}
