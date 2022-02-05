import { combineReducers } from 'redux';
import countReducer from './counter/CounterReducer';
import numReducer from './number/numberReducer';

const roorReducer = combineReducers({
    number: numReducer,
    counter: countReducer
})
export default roorReducer