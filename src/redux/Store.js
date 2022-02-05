import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import roorReducer from './rootReducer'

const store = createStore(roorReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store