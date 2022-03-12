import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import axios from 'axios'
import Swal from "sweetalert2"
import "../css/JobDhunde.css"

const JobDhunde = () => {
    const formSparkURL = "https://submit-form.com/NuSEHagg";

    const initialValues = {
        fullName: "",
        contactNumber: "",
        location: "",
        age: "",
        adhaarCard: "",
        gender: "",
        pancard: "",
    }

    const [state, setState] = useState();

    const validationSchema = yup.object({
        fullName: yup.string().min(3).max(20).required("required"),
        contactNumber: yup.number().min(5000000000, "Invalid number").required("required"),
        location: yup.string().min(3).max(30).required("required"),
        age: yup.number().min(15).max(60).required("required"),
        adhaarCard: yup.string().required("required"),
        pancard: yup.string().required("required"),
        gender: yup.string().required("required"),
    })

    function successAlert() {
        Swal.fire({
            title: "Thank you for fill the Form",
            text: "We will give resposne soon",
            icon: "success",
            footer: '<a href="/" class="btntag">Go Back Home</a>',
          })
    }

    function errorAlert() {
        Swal.fire({
            title: "Oops! Something went wrong",
            text: "Please try again",
            icon: "error",
          })
    }

    const onSubmit = (values, onSubmitProps) => {
        setState(values);
        console.log('form Data', values);
        // console.log("submit props", onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }

    const postSubmission = async () => {
        const payload = {
            fullName: state.fullName,
            contactNumber: state.contactNumber,
            location: state.location,
            adhaarCard: state.adhaarCard,
            gender: state.gender,
            pancard: state.pancard,
        }

        try {
            const result = await axios.post(formSparkURL, payload);
            console.log("result", result);
            setState(null);
            successAlert();
        } catch (error) {
            console(error);
            errorAlert();
        }
    }

    useEffect(() => {
        if (!state) {
            console.log("state is empty");
        } else {
            postSubmission();
        }
    }, [state])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}  >
            <div className='jobdhunde_main'>
                <div className='jobdhunde_heading'>
                    <h1>Job Dhunde</h1>
                </div>

                <Form className="jobform">
                    <div className='col_first'>
                        <div>
                            <label htmlFor='fullName'>Full Name</label>
                            <Field type="text" name="fullName" className='myinput' />
                            <p className='error'> <ErrorMessage name="fullName" /> </p>
                        </div>

                        <div>
                            <label htmlFor='contactNumber'>Contact Number</label>
                            <Field type="number" name='contactNumber' className='myinput' />
                            <p className='error'> <ErrorMessage name="contactNumber" /> </p>
                        </div>

                        <div>
                            <label htmlFor='location'>Current Location</label>
                            <Field type="text" name='location' className='myinput' />
                            <p className='error'> <ErrorMessage name="location" /> </p>
                        </div>

                        <div>
                            <label htmlFor='age'>Age</label>
                            <Field type="number" name='age' className='myinput' />
                            <p className='error'> <ErrorMessage name="age" /> </p>
                        </div>
                    </div>
                    <div className='col_second'>
                        <div>
                            <label>AdhaarCard Available</label>  <br />
                            <Field type="radio" name="adhaarCard" value="yes" className="radio_btn" />
                            <label htmlFor="yes">Yes</label>
                            <Field type="radio" name="adhaarCard" value="no" className="radio_btn" />
                            <label htmlFor="no">No</label>
                            <p className='error'> <ErrorMessage name="adhaarCard" /> </p>
                        </div>

                        <div>
                            <label>PanCard Available</label>  <br />
                            <Field type="radio" name="pancard" value="yes" className="radio_btn" />
                            <label htmlFor="yes">Yes</label>
                            <Field type="radio" name="pancard" value="no" className="radio_btn" />
                            <label htmlFor="no">No</label>
                            <p className='error'> <ErrorMessage name="pancard" /> </p>
                        </div>

                        <div>
                            <label>Gender</label>  <br />
                            <Field type="radio" name="gender" value="male" className="radio_btn" />
                            <label htmlFor="male">Male</label>
                            <Field type="radio" name="gender" value="female" className="radio_btn" />
                            <label htmlFor="female">Female</label>
                            <Field type="radio" name="gender" value="other" className="radio_btn" />
                            <label htmlFor="other">Other</label>
                            <p className='error'> <ErrorMessage name="gender" /> </p>
                        </div>

                        <div className="job_btn">
                            <button type='reset'>Reset</button>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </Form>

            </div>
        </Formik>
    )
}

export default JobDhunde