import {apiUrls} from './apiConstants';
import axios from 'axios';

export const createNewPatient = (request) => {
    return axios.post(apiUrls.addNewPatient, request);
}

export const getAllPatients = () => {
    return axios.get(apiUrls.addNewPatient);
}