import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage';
import AddNewPatient from './Components/Patient/AddNewPatient';
import NewVisit from './Components/Visits/NewVisit';
import NewAppointment from './Components/Visits/NewAppointment';
import ListAppointments from './Components/Visits/ListAppointments';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Add-New-Patient" element={<AddNewPatient />} />
      <Route path="/Add-New-Visit" element={<NewVisit />} />
      <Route path="/Add-New-Appointment" element={<NewAppointment />} />
      <Route path="/Todays-Appointments" element={<ListAppointments />} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
