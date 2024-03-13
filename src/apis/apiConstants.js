export const apiUrls= {
    addNewPatient: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_PATIENT_URL,
    addNewAppointment: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_APPOINTMENT_URL,
    getAppointmentsForToday: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_APPOINTMENT_URL + process.env.REACT_APP_GET_APPOINTMENTS_TODAY_URL
}