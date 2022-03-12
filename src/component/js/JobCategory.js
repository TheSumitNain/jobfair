import React from 'react';
import Data from "./Data";
import "../css/JobCategory.css";

const JobCategory = () => {
    return (
        <>
            <div className='category_main'>
                <div className="category_heading">
                    <h1>Job Categories</h1>
                </div>
                <div className='category_card'>
                      <ul>
                          {
                              Data.map((elem) => {
                                  return <li> {elem.post} </li>
                              })
                          }
                      </ul>
                </div>
            </div>
        </>
    )
}

export default JobCategory