import React, { useState } from 'react';
import {contactData}  from '../data/contactData';
import Card from './Card';



const Contact = () => {

    // const [contact] = useState({contactData});
    return (
        <div className='main_contactContainer'>
           
            {contactData.map((contact, index) => {
               return (
                <div>
                  <Card
                  index={index}
                  contact={contact}
                  />
                </div>
              );
               })}
                <div className="heart">
                  <img src="./heart.jpg" alt="" />
                </div>
                <div className="number">
                  <div> 
                    <p>13</p>
                  </div>
                </div>
        </div>
    );
};

export default Contact;