var _ = require('lodash')

module.exports = {
  sortByFitness: function(population) {
    return _.sortBy(population, 'fitness', 'desc')
  }
}
