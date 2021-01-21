import { DELETE_OUTFIT_FROM_LIST, GET_OUTFIT_LIST, SET_OUTFIT_SUCCESS } from '../actions/outfits';


const initialState = {
    outfits: []
}

const outfitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OUTFIT_SUCCESS:
            return {
                ...state, outfits: action.payload
            }
        case DELETE_OUTFIT_FROM_LIST:
            return {
                ...state, outfits: state.outfits.filter(o => o.drawables !== action.payload.drawables)
            }
        case GET_OUTFIT_LIST:
            return {
                ...state, outfits: action.payload
            }
        default:
            return state;
    }
}

export default outfitReducer;