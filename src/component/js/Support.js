import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import "yup-phone";
import axios from "axios";
import Swal from "sweetalert2"
import "../css/Support.css";


const Support = () => {
    const formSparkURL = "https://submit-form.com/NuSEHagg";

    const initialValues = {
        name: "",
        contactNumber: "",
        location: "",
        message: "",
    }

    const [state, setState] = useState();

    const validationSchema = yup.object().shape({
        name: yup.string().required().min(3).max(20),
        contactNumber: yup.string().phone("IN", true, "Invalid number").required("reaquired"),
        location: yup.string().min(3).max(30).required("Please enter your city name"),
        message: yup.string().required().min(3).max(200),
    }) 

    function successAlert() {
        Swal.fire({
            title: "Thank you for Supporting",
            text: "We will meet with new features",
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
        // console.log('form Data', values);
        // console.log("submit props", onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();

    }

    const postSubmission = async () => {
        const payload = {
            name: state.name,
            contactNumber: state.contactNumber,
            location: state.location,
            message: state.message,
        }

        try {
            const result = await axios.post(formSparkURL, payload);
            console.log(result);
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
    }, [state]);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} >
                {
                    formik => {
                        {/* console.log("formik props", formik); */ }
                        return (
                            <div className="support_main">
                                <div className="support_heading">
                                    <h1>Support</h1>
                                </div>
                                <Form className="myform">
                                    <div>
                                        <label htmlFor="name">Name/नाम </label>
                                        <Field type="text" name="name" className="myfield" />
                                        <p className="errormsg"><ErrorMessage name="name" /></p>
                                    </div>
                                    <div>
                                        <label htmlFor="contactNumber">Contact Number/फ़ोन नंबर </label>
                                        <Field type="number" name="contactNumber" className="myfield" />
                                        <p className="errormsg"><ErrorMessage name="contactNumber" /></p>
                                    </div>
                                    <div>
                                        <label htmlFor="location">Current Location/पता </label>
                                        <Field type="text" name="location" className="myfield" />
                                        <p className="errormsg"><ErrorMessage name="location" /></p>
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message/संदेश</label>
                                        <Field type="text" name="message" className="myfield textarea" />
                                        <p className="errormsg"><ErrorMessage name="message" /></p>
                                    </div>
                                    <div className="support_btn">
                                        <button type='reset'>Reset</button>
                                        <button type="submit" disabled={!formik.isValid && !formik.dirty || formik.isSubmitting}>Submit</button>
                                    </div>
                                </Form>
                            </div>
                        )
                    }
                }
            </Formik>
        </>
    )
}


export default Support;

