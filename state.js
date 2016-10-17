const daggy = require('daggy')
const liftF = require('./free').liftF

const State = daggy.taggedSum({ Get_: [], Put_: ['v'] })

const Put = x => liftF(State.Put_(x))
const Get = liftF(State.Get_)

State.of = Put

State.prototype.fold = function(f, g) {
  return this.cata({ Get_: f, Put_: g })
}

module.exports = {State, Get, Put}
