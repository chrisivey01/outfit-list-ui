import { combineReducers } from 'redux';
import outfitReducer from './reducers/outfits'

export default combineReducers({
    clothing: outfitReducer,
})