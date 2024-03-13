import * as apiConstants from './apiConstants';
import axios from 'axios';

export const createNewAppointment = (request) => {
    return axios.post(apiConstants.apiUrls.addNewAppointment, request);
}

export const getAppointmentsForToday = (request) => {
    return axios.post(apiConstants.apiUrls.getAppointmentsForToday,  request);
}