import axios from 'axios';

const closeOutfitsUrl = 'http://pma-motels/CloseOutfits'
const setOutfitUrl = 'http://pma-motels/SetOutfit'
const deleteOutfitsUrl = 'http://pma-motels/DeleteOutfit'

export const closeOutfit = () => {
    return axios.post(closeOutfitsUrl, {})
}

export const setOutfitApi = (data) => {
    return axios.post(setOutfitUrl, {data})
}

export const deleteOutfit = (data) => {
    return axios.post(deleteOutfitsUrl, {data})
}