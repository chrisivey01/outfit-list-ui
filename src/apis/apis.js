import axios from 'axios';

const closeOutfitsUrl = 'http://pma-property/CloseOutfits'
const setOutfitUrl = 'http://pma-property/SetOutfit'
const deleteOutfitsUrl = 'http://pma-property/DeleteOutfit'

export const closeOutfit = () => {
    return axios.post(closeOutfitsUrl, {})
}

export const setOutfitApi = (data) => {
    return axios.post(setOutfitUrl, {data})
}

export const deleteOutfit = (data) => {
    return axios.post(deleteOutfitsUrl, {data})
}