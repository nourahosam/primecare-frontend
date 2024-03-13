import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper} from "@mui/material";
import * as appointmentApi from '../../../apis/appointmentApi';
import { useEffect, useState } from "react";

const ListAppointments = () => {

    const [appointmentList, setAppointmentList] = useState([]);

    useEffect(() => {
        const request = {
            date: "2024-01-28"
        }
        // appointmentApi.getAppointmentsForToday({date: "2024-01-28"}).then(res=>{
        //     console.log("res", res);
        // })
    }, [])

    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default ListAppointments;