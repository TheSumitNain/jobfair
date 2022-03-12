import React from "react"
import {Formik, Field, Form, ErrorMessage} from "formik"
import * as yup from "yup"

const Support = () => {

    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log('form Data', values);
        console.log("submit props", onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }

    const validationSchema = yup.object({
        name: yup.string().required("required"),
        email: yup.string().email("Invalid email format").required("required"),
        channel: yup.string().required("required"),
        comments: yup.string().required("required"),
    })

    return (
        <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit} >

         {
             formik => {
                 console.log("formik props", formik);
                 return (
        <Form>
            <div>
              <label htmlFor="name">Name</label><br/>
              <Field type="text" id="name" name="name"
              /><br/>
              <ErrorMessage name="name" />
            </div>

           <div>
              <label htmlFor="email">Email</label><br/>
              <Field type="email" id="email" name="email"
              /><br/>
              <ErrorMessage name="email" />
           </div>

            <div>
              <label htmlFor="channel">Channel</label><br/>
              <Field type="text" id="channel" name="channel"
              /><br/>
              <ErrorMessage name="channel" />
            </div>

            <div>
                 <label htmlFor="comments">comment</label>  <br/>
                 <Field as="textarea" id="comments" name="comments" /> <br/>
            </div>

            <button type="reset">reset</button>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
        </Form>
               )
             }
         }
        </Formik>
    )
}

export default Support













// import React, { useState } from "react"
// import axios from "axios"
// import * as yup from 'yup'
// import "../css/Support.css"

// const Support = () => {
//     const formSparkURL = "https://submit-form.com/NuSEHagg";

//     const initialState = {
//         name: "",
//         contactNumber: "",
//         location: "",
//         message: "",
//     }

//     const [state, setState] = useState(initialState);

//     const submitForm = async (e) => {
//         e.preventDefault();
//         await postSubmission();
//     }

//     const postSubmission = async () => {
//         const pauload = {
//             ...state,
//         };

//         try {
//             const result = await axios.post(formSparkURL, pauload);
//             setState();
//             console.log(result);
//             alert("Thank you for fill the Form, We will give resposne soon");
//         } catch (error) {
//              console(error);
//              alert("Failed, please try again");
//         }
//     }

//     const inputEvent = (e) => {
//         const {name, value} = e.target;
//         setState({
//             ...state,
//             [name]: value,
//         });
//     }

//     return (
//         <>
//             <div className="support_main">
//                 <div className="support_heading">
//                     <h1>Support</h1>
//                 </div>
//                 <form onSubmit={submitForm}>
//                     <div>
//                         <label>Name/नाम *</label>
//                         <input type="text" name="name" value={state.name} onChange={inputEvent}/>
//                     </div>

//                     <div>
//                         <label>Contact Number/फ़ोन नंबर *</label>
//                         <input type="number" name="contactNumber" value={state.contactNumber} onChange={inputEvent}/>
//                     </div>

//                     <div>
//                         <label>Current Location/पता *</label>
//                         <input type="text" name="location" value={state.location} onChange={inputEvent}/>
//                     </div>
//                     <div>
//                         <label>Message*</label>
//                         <textarea type="text" placeholder="Write your message..." name="message" value={state.message} onChange={inputEvent}>
//                         </textarea>
//                     </div>
//                     <div className="support_btn">
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Support









// import React from "react";
// import * as yup from 'yup'


// const Support = () => {

//     const userSchema = yup.object().shape({
//         name: yup.string().required().min(5),
//         email: yup.string().required(),
//         password: yup.string().required().min(4).max(8),
//     })

//     const createUser = async (e) => {
//        e.preventDefault();
//        let formData = {
//            name: e.target[0].value,
//            email: e.target[1].value,
//            password: e.target[2].value,
//        }

//        const isValid = await userSchema.isValid(formData);
//        console.log(isValid);
//     }
 
//     return(
//         <>
//         <form onSubmit={createUser}>
//             <input type="text" placeholder="name..." /> <br/>
//             <input type="text" placeholder="email..." />  <br/>
//             <input type="text" placeholder="password..." /> <br/>
//             <button type="submit">submit</button>  <br/><br/><br/>
//         </form>
//         </>
//     )
// }

// export default Support;











