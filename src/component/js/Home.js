import React from 'react';
import Navbar from './Navbar';
import Steps from './Steps';
import JobCategory from './JobCategory';
import OurVision from './OurVision';
import ContactUs from './ContactUs';
import Support from './Support';


const Home = () => {
  return (
    <>
      <Navbar />
      <Steps />
      <JobCategory />
      <OurVision />
      <ContactUs />
      <Support />
    </>
  )
}

export default Home