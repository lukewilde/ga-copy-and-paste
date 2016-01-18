var _ = require('lodash')
var bucketSize = 100

module.exports = {

  sortByFitness: function(population) {
    return _.sortBy(population, 'fitness', 'desc')
  },

  setNormalisedFitness: function(population) {
    var totalFitness = getTotal(_.pluck(population, 'fitness'))
    _.each(population, function(item) {
      item.normalisedFitness = item.fitness / totalFitness
    })
  },

  makeBucket: function(population) {

    var bucket = []

    _.each(population, function(item, index) {

      var bucketSlots = Math.round(item.normalisedFitness * bucketSize);

      _.times(bucketSlots, function() {
        bucket.push(index)
      })
    })

    return bucket
  }
}

function getTotal(values) {
  var total = 0
  _.each(values, function(value) {
    total += value
  })

  return total
}
