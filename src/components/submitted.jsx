import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import FormCard from "./formCard"
import Grid from '@mui/material/Grid'

function Submitted(){

    const [forms, setForms] = useState([])
    const location = useLocation()

    useEffect( () => {
        axios.get('https://stackfusionserver.herokuapp.com/read-forms')
        .then((response) => {
            // console.log(response.data)
            setForms(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [location.state])
    
    return (

        <Grid container spacing={2}>
            {
                forms.map((form) =>
                <Grid key={form._id} item xs={6} sm={4} md={2}>
                <FormCard
                    key={form._id}
                    firstName={form.firstName}
                    email={form.email}
                    phoneNum={form.phoneNum}
                    dob={form.dob}
                />
                </Grid>
                )
            }
        </Grid>
    )
}

export default Submitted