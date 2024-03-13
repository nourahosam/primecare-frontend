import { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '../../../commons/Button/index';
import TextField from '../../../commons/TextField/index'
import React from 'react';
import DatePickers from '../../../commons/DatePicker';
import * as constants from '../../../commons/utils/constants';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import DropdownSelect from '../../../commons/DropdownSelect';

const NewVisit = () => {

    const initialValues = {
        name: "",
        date: "",
        location: "",
        dob: "",
    }
    const onSubmit = (values) => {
        console.log("valuesssss", values);


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
                {/* todo 
                show patient info
                */}
                {/* make it drop down opened menusssss iykwim */}
                <Grid item md={12}>
                    <TextField label={constants.NEW_VISIT.cheifComplaint.label}
                        name={constants.NEW_VISIT.cheifComplaint.name}
                        ref={register}
                        control={control}
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        control={control}
                        label={constants.NEW_VISIT.dentalExam.label}
                        name={constants.NEW_VISIT.dentalExam.name} />
                </Grid>
                <Grid item md={12}>
                    <TextField label={constants.NEW_VISIT.diagnosis.label}
                        name={constants.NEW_VISIT.diagnosis.name}
                        ref={register}
                        control={control}
                    />

                </Grid>
                Treatment Plan
                <Grid item md={6}>
                    <DropdownSelect label={constants.TREATMENT.type.label}
                        name={constants.TREATMENT.type.name}
                        ref={register}
                        control={control}
                        menuoptions={[]}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField label={constants.TREATMENT.cost.label}
                        name={constants.TREATMENT.cost.name}
                        ref={register}
                        control={control}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField label={constants.TREATMENT_PLAN.duration.label}
                        name={constants.TREATMENT_PLAN.duration.name}
                        ref={register}
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

export default NewVisit;