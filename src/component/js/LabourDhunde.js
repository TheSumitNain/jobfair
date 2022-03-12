import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import "yup-phone";
import axios from "axios";
import Swal from "sweetalert2"
import "../css/LabourDhunde.css"


const LabourDhunde = () => {

    const formSparkURL = "https://submit-form.com/NuSEHagg";

    const [state, setState] = useState();

    const initialValues = {
        jobtitle: "",
        location: "",
        pincode: "",
        totalpost: "",
        workhours: "",
        companyname: "",
        personname: "",
        contactnumber: "",
        companyaddress: "",
        minimumSalery: "",
        maximumSalery: "",
        freefood: "",
        accommodation: "",
        sundayholiday: "",
    }

    const validationSchema = yup.object({
        jobtitle: yup.string().min(3).max(20).required("required"),
        location: yup.string().min(3).max(30).required("Please enter your city name"),
        pincode: yup.number().min(100000).max(999999).required("required"),
        totalpost: yup.number().min(1).max(1000000).required("required"),
        workhours: yup.number().min(1).max(24).required("required"),
        companyname: yup.string().min(3).max(30).required("required"),
        personname: yup.string().min(3).max(20).required("required"),
        contactnumber: yup.string().phone("IN", true, "Invalid number").required("reaquired"),
        companyaddress: yup.string().min(3).max(30).required("required"),
        minimumSalery: yup.number().min(1000).max(200000).required("required"),
        maximumSalery: yup.number().min(2000).max(2000000).required("required"),
        freefood: yup.string().required("required"),
        accommodation: yup.string().required("required"),
        sundayholiday: yup.string().required("required"),
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
            jobtitle: state.jobtitle,
            location: state.location,
            pincode: state.pincode,
            totalpost: state.totalpost,
            workhours: state.workhours,
            companyname: state.companyname,
            personname: state.personname,
            contactnumber: state.contactnumber,
            companyaddress: state.companyaddress,
            contactNumber: state.contactNumber,
            minimumSalery: state.minimumSalery,
            maximumSalery: state.maximumSalery,
            freefood: state.freefood,
            accommodation: state.accommodation,
            sundayholiday: state.sundayholiday,
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
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}  >
                {
                    formik => {
                        return (
                            <div className="labourdhunde_main">
                                <Form>
                                    <div className="labourdhundeform">
                                        <div className="section">
                                            <div className="section_heading">
                                                <h2>Job Details</h2>
                                            </div>
                                            <div className="row1">
                                                <div>
                                                    <label htmlFor="jobTitle">Job Title</label>
                                                    <Field type="text" name="jobtitle" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="jobtitle" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="location">Location</label>
                                                    <Field type="text" name="location" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="location" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="pincode">PinCode</label>
                                                    <Field type="number" name="pincode" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="pincode" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="totalpost">Total Post</label>
                                                    <Field type="number" name="totalpost" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="totalpost" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="workhours">Work Hours</label>
                                                    <Field type="number" name="workhours" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="workhours" /></p>
                                                </div>
                                            </div>



                                        </div>

                                        <div className="section">
                                            <div className="section_heading">
                                                <h2>About Company</h2>
                                            </div>
                                            <div className="row2">
                                                <div>
                                                    <label htmlFor="companyname">Company Name</label>
                                                    <Field type="text" name="companyname" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="companyname" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="personname">Company Person Name</label>
                                                    <Field type="text" name="personname" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="personname" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="contactnumber">Contact Number</label>
                                                    <Field type="number" name="contactnumber" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="contactnumber" /></p>
                                                </div>
                                                <div>
                                                    <label htmlFor="companyaddress">Company Address</label>
                                                    <Field type="text" name="companyaddress" className="labourfield" />
                                                    <p className="errormsg"><ErrorMessage name="companyaddress" /></p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="section">
                                            <div className="section_heading">
                                                <h2>Additional Details </h2>
                                            </div>
                                            <div className="row3">
                                                <div>
                                                    <label htmlFor="companyname">Salery</label> <br />
                                                    <Field type="text" name="minimumSalery" placeholder="manimum/(monthly)" className="myinput" />
                                                    <p className="errormsg"><ErrorMessage name="minimumSalery" /></p>
                                                </div>
                                                <div>
                                                    <Field type="text" name="maximumSalery" placeholder="maximun/(monthly)" className="myinput" />
                                                    <p className="errormsg"><ErrorMessage name="maximumSalery" /></p>
                                                </div>
                                                <div>
                                                    <label>Free Food*</label>  <br />
                                                    <Field type="radio" name="freefood" value="yes" className="radio_btn" />
                                                    <label htmlFor="yes">Yes</label>
                                                    <Field type="radio" name="freefood" value="no" className="radio_btn" />
                                                    <label htmlFor="no">No</label>
                                                    <p className='error'> <ErrorMessage name="freefood" /> </p>
                                                </div>

                                                <div>
                                                    <label>Accommodation</label>  <br />
                                                    <Field type="radio" name="accommodation" value="yes" className="radio_btn" />
                                                    <label htmlFor="yes">Yes</label>
                                                    <Field type="radio" name="accommodation" value="no" className="radio_btn" />
                                                    <label htmlFor="no">No</label>
                                                    <p className='error'> <ErrorMessage name="accommodation" /> </p>
                                                </div>

                                                <div>
                                                    <label>Sunday Holiday</label>  <br />
                                                    <Field type="radio" name="sundayholiday" value="yes" className="radio_btn" />
                                                    <label htmlFor="yes">Yes</label>
                                                    <Field type="radio" name="sundayholiday" value="no" className="radio_btn" />
                                                    <label htmlFor="no">No</label>
                                                    <p className='error'> <ErrorMessage name="sundayholiday" /> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section_bottom">
                                        <div>
                                            <h3>Asking Job seeker for any Kind of payment is strictly prohibited</h3>
                                        </div>
                                        <div className="labour_btn">
                                            <button type="reset">Reset</button>
                                            <button type="submit" disabled={!formik.isValid && !formik.dirty || formik.isSubmitting}>Submit</button>
                                        </div>
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

export default LabourDhunde