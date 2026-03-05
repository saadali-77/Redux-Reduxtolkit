const { configureStore } = require('@reduxjs/toolkit')
const { cakeReducer } = require('./features/cakeSlice')
const reduxlogger= require('redux-logger')
const logger= reduxlogger.createLogger()
const store = configureStore({
  reducer: {
    cake: cakeReducer
  },
  middleware:(getdeafultmiddle)=> getdeafultmiddle().concat(logger)


})

module.exports = store