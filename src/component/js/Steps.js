import React from "react"
import { NavLink } from "react-router-dom"
import "../css/Steps.css"

const Steps = () => {
    return (
        <>
            <div className="steps_main">
                <div className="steps_labour">
                    <div className="steps_labour_heading">
                        <h1>For Labours</h1>
                    </div>
                    <div className="steps_labour_info">
                        <p>We are helping  labour for finding jobs.
                            Helping labourers for their growth.
                            Helping labour to find high paying jobs.</p>
                        <p><a href="tel:+918685087807"> Call to us</a>: <br />
                            We will come for the documentation.
                            Will tell you the job according to you.</p>
                    </div>
                </div>

                <div className="steps_labour">
                    <div className="steps_labour_heading">
                        <h1>For Employers</h1>
                    </div>
                    <div className="steps_labour_info">
                        <p> The easiest way to find a job seeker.
                            Hire labour from different corners of the country.
                            A good and experience worker will give you.</p>
                        <p>Fill form/<NavLink exact to="/jobdhunde"><button>Contact Us</button></NavLink>: <br />
                            Will give workers according to your requirement.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Steps