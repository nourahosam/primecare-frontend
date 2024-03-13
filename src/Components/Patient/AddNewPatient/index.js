import { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '../../../commons/Button/index';
import TextField from '../../../commons/TextField/index'
import React from 'react';
import DatePickers from '../../../commons/DatePicker';
import * as constants from '../../../commons/utils/constants';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import * as patientApi from '../../../apis/patientApi';

const AddNewPatient = () => {

    const initialValues = {
        name: "",
        date: "",
        location: "",
        dob: "",
    }
    const onSubmit = (values) => {
        
        // const request = values;
        // request.dob = values.dob.format('YYYY-MM-DD');
        // request.dateOfFirstVisit = values.dateOfFirstVisit.format('YYYY-MM-DD');
        // const res = patientApi.createNewPatient(request);
        // console.log("patientApi", res)
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
                    <TextField label={constants.NEW_PATIENT.Name.label}
                        name={constants.NEW_PATIENT.Name.name}
                        ref={register}
                        control={control}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        control={control}
                        label={constants.NEW_PATIENT.phoneNo.label}
                        name={constants.NEW_PATIENT.phoneNo.name} />
                </Grid>
                <Grid item md={6}>
                    <DatePickers label={constants.NEW_PATIENT.DateOfFirstVisit.label}
                        name={constants.NEW_PATIENT.DateOfFirstVisit.name}
                        control={control}
                    />

                </Grid>
                <Grid item md={6}>
                    <DatePickers label={constants.NEW_PATIENT.DOB.label}
                        name={constants.NEW_PATIENT.DOB.name}
                        control={control}
                    />
                </Grid>
                <Grid item md={6}>

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

export default AddNewPatient;