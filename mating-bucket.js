var _ = require('lodash')
var bucketSize = 100

module.exports = {

  bucket: null,

  population: null,

  populate: function(population) {

    this.bucket = []
    this.population = population

    _.each(population, function(item, index) {

      var bucketSlots = Math.round(item.normalisedFitness * bucketSize);

      _.times(bucketSlots, function() {
        this.bucket.push(index)
      }, this)
    }, this)

    return this.bucket
  },

  getMate: function(item) {

    var mateIndex = _.sample(this.bucket);
    var mate = this.population[mateIndex]

    if (!item) {
      return mate
    }

    var itemIndex = _.indexOf(this.population, item)

    do {
      mateIndex = _.sample(this.bucket)
    } while (itemIndex === mateIndex)

    return this.population[mateIndex]
  }
}
