import { SET_OUTFIT_LIST } from '../actions/index';
import { DELETE_OUTFIT_FROM_LIST } from '../actions/index';
import { GET_OUTFIT_LIST } from '../actions/index';


const initialState = {
    outfits:[
        {
            idcharacter_outfits:0,
            drawables:{},
            props:{},
            drawtextures:{},
            proptextures:{}
        }
    ]
    
}

const outfitReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_OUTFIT_LIST:
            return{
                ...state, outfits: action.outfits
            }
        case DELETE_OUTFIT_FROM_LIST:
            return {
                ...state, outfits: state.outfits.filter(o => o.drawables !== action.outfits.drawables)
            }
        case GET_OUTFIT_LIST:
            return state
        default:
            return state;
    }
}

export default outfitReducer;