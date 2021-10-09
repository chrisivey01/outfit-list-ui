import {
    setOutfitApi
} from '../../apis/apis';

export const SET_OUTFIT_SUCCESS = "SET_OUTFIT_SUCCESS"
export const DELETE_OUTFIT_FROM_LIST = "DELETE_OUTFIT_FROM_LIST"
export const GET_OUTFIT_LIST = "GET_OUTFIT_LIST"

export const setOutfit = data => {
    return (dispatch) => {
        setOutfitApi(data).then(
            res => dispatch({
                type: SET_OUTFIT_SUCCESS
            }),
            err => console.log("There was an error, contact Chris.")
        )
    }
}

export const deleteOutfitFromList = data => {
    return {
        type: DELETE_OUTFIT_FROM_LIST,
        payload: data
    }
}

export const getOutfitList = data => {
    return (dispatch) => {
        dispatch({
            type: GET_OUTFIT_LIST,
            payload: data
        })
    }
}