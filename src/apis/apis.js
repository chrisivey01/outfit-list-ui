import axios from 'axios';

const closeOutfitsUrl = 'http://pma-property/CloseOutfits'
const setOutfitUrl = 'http://pma-property/SetOutfit'
const getOutfitsUrl = 'http://pma-property/GetOutfit'
const deleteOutfitsUrl = 'http://pma-property/DeleteOutfit'

export const closeOutfit = () => {
    return axios.post(closeOutfitsUrl, {})
}

export const setOutfit = (data) => {
    return axios.post(setOutfitUrl, {data})
}

export const getOutfits = () => {
    return axios.post(getOutfitsUrl, {})
}

export const deleteOutfit = (data) => {
    return axios.post(deleteOutfitsUrl, {data})
}