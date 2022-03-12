import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import "../css/ContactUs.css"

const ContactUs = () => {
    return (
        <>
            <div className='contactus_main'>
                <div className='contactus_heading'>
                    <h1>Contact Us</h1>
                </div>
                <div className='contactus_timing'>
                    <p>
                        For any queries call us between 10 am to 6 pm
                    </p>
                </div>
                <div className='contactus_link'>
                    <p>
                        <Tooltip title="Call Now" placement="top" enterDelay={500}>
                            <a href="tel:+918685087807"> Call </a>
                        </Tooltip>
                        or Whatsapp
                        <Tooltip title="Call Now" placement="top" enterDelay={500}>
                            <a href="tel:+918685087807"> +91 868 508 7807</a>
                        </Tooltip>
                    </p>
                    <p>Email:- 
                    <a  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nainsumit740@gmail.com">DishaHelpDesk@gmail.com</a></p>
                </div>
            </div>
        </>
    )
}

export default ContactUs