export const SET_OUTFIT_LIST = "SET_OUTFIT_LIST"
export const DELETE_OUTFIT_FROM_LIST = "DELETE_OUTFIT_FROM_LIST"
export const GET_OUTFIT_LIST = "GET_OUTFIT_LIST"


export const setOutfitList = data => {
    return { type: SET_OUTFIT_LIST, outfits:data }
}

export const deleteOutfitFromList = data => {
    return { type: DELETE_OUTFIT_FROM_LIST, outfits:data }
}

export const getOutfitList = data => {
    return { type: GET_OUTFIT_LIST }
}