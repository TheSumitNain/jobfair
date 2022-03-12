import React from 'react'
import { NavLink } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip'
import "../css/Navbar.css"
import pic from "../images/pic.png"
import JobDhunde from './JobDhunde';

const Navbar = () => {
    return (
        <>
            <div className='navbar_main'>
                <div className='navbar_logo'>
                    <img src={pic} alt='logo' />
                </div>
                <div className='navbar_board'>
                    <div className='navbar_board_box'>
                        <h2>DISHA HELP DESK</h2>
                        <h3>BIGGEST PORTAL FOR HIRING</h3>
                        <h3>LABOURS</h3>
                    </div>
                </div>
                <div className='navbar_btns'>
                    <Tooltip title="Naukari Post" placement="top" enterDelay={500}>
                        <NavLink to="/labourdhunde">
                            <button>मुझे लेबर चाहिए</button>
                        </NavLink>
                    </Tooltip>
                    <Tooltip title="Naukari Dhunde" placement="top" enterDelay={500}>
                        <NavLink to="/JobDhunde">
                            <button>मुझे नौकरी चाहिए</button>
                        </NavLink>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default Navbar