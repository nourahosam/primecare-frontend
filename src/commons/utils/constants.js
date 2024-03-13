/* Home page utils */
export const HOMEPAGE_BUTTONS = [
    { label: "Add New Patient", pageName: "Add-New-Patient" },
    {label: "New Visit", pageName: "Add-New-Visit"},
    {label: "New Appointment", pageName: "Add-New-Appointment"},
    {label: "Check Todays Appointments", pageName: "Todays-Appointments"}
];

export const ADMIN_BUTTONS = [
    { label: "Add Activity", pageName: "Admin/Add-Activity" },
    { label: "Add Material", pageName: "Admin/Add-Material" }
]


export const NEW_PATIENT = {
    Name: { label:"Name", name: "name" },
    phoneNo: { label:"Phone Number", name: "phoneNo" },
    DateOfFirstVisit: { label:"Date of First Visit", name: "dateOfFirstVisit" },
    DOB: { label:"Date Of Birth", name: "dob" },
    Favs: { label:"Favorites", name: "favs" },
};

export const NEW_VISIT = {
    patientName: {name: "patientName", label: "Patient Name"},
    patientAge: {name: "patientAge", label: "Patient Age"},
    // check medical history
    cheifComplaint: {label: "Cheif Complaint", name: "cheifComplaint"},
    dentalExam: {label: "Dental Examination", name: "dentalExam"},
    diagnosis: {label: "Diagnosis", name: "diagnosis"},
    //treatmentPlan: {label: "Treatment Plan", name: "treatmentPlan"}

}

export const TREATMENT = {
    type: {label: "Treatment Type", name: "treatmentType"},
    cost: {label: "cost", name: "cost"}
}

export const TREATMENT_PLAN = {
    //treatment: {label: "treatment", name: "treatment"},
    duration: {label: "Duration", name: "duration"}
}

export const MEDICAL_HISTORY = {
    diagnosis: {label: "Diagnosis", name:"diagnosis"},
    //treatment: {label: "treatment", name: "treatment"}
}

export const INVOICE = {
    expectedCost: {label: "Expected Cost", name: "expectedCost"},
    discount: {label: "Discount", name: "discount"},
    actualCost: {label: "Actual Cost", name: "actualCost"},
   // installments (active? , duration, remaining duration, paid, unpaid)
}

export const INSTALLMENTS= {
    active: {name: "active", label: "Active"},
    duration: {name:"duration", label: "Duration"},
    remainingDuration: {name: "remainingDuration", label: "Remaining Duration"},
    paid: {name: "paid", label: "Paid"},
    unpaid: {name: "paid", label: "UnPaid"}
}

export const APPOINTMENTS = {
    phoneNo: {name:"phoneNo", label: "Select Patient by Phone Number"},
    date: {name: "date", label: "Appointment Date"},
    time: {name: "time", label: "time"}
}

