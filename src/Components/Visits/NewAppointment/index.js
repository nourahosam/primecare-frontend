import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Button from '../../../commons/Button/index';
import TextField from '../../../commons/TextField/index'
import React from 'react';
import DatePickers from '../../../commons/DatePicker';
import * as constants from '../../../commons/utils/constants';
import * as patientsApi from '../../../apis/patientApi';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import AutocompleteBox from '../../../commons/AutoComplete';
import TimePicker from '../../../commons/TimePicker';
import dayjs from 'dayjs';
import * as appointmentApi from '../../../apis/appointmentApi';

const NewAppointment = () => {

    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        // patientsApi.getAllPatients().then((res) => {
        //     const options = res.data.map((val, index) => { return { label: val.phoneNo, id: index } });
        //     setPatientList(options);
        // })
    }, [])

    const initialValues = {
        phoneNo: undefined,
        date: dayjs(new Date()),
        time: dayjs(new Date())
    }
    const onSubmit = (values) => {
        console.log("valuesssss", values);
        const request = {
            phoneNo: values.phoneNo.label,
            date: values.date.format('YYYY-MM-DD'),
            time: values.time.format('HH:mm:ss')
        }

        console.log("request", request);
        appointmentApi.createNewAppointment(request);

    }



    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: initialValues
    })

    const StyledContainer = styled(Grid)({
        width: '100%',
        height: '100%',
        padding: '5%'
    })

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <StyledContainer container spacing={2}>
                <Grid item md={6}>
                    <AutocompleteBox
                        menuoptions={patientList}
                        label={constants.APPOINTMENTS.phoneNo.label}
                        name={constants.APPOINTMENTS.phoneNo.name}
                        control={control}

                    />
                </Grid>
                <Grid item md={6}>
                    <DatePickers label={constants.APPOINTMENTS.date.label}
                        name={constants.APPOINTMENTS.date.name}
                        control={control}
                    />

                </Grid>
                <Grid item md={6}>
                    < TimePicker
                    name={constants.APPOINTMENTS.time.name}
                    label={constants.APPOINTMENTS.time.label}
                    control={control}
                    />
                </Grid>

                <div style={{ width: '100%' }}>
                    <Button
                        sx={{ float: 'right' }}
                        label="Submit"
                        type="submit"
                    />
                </div>

                {/* </Grid> */}
            </StyledContainer>
        </form>
    )
}

export default NewAppointment;