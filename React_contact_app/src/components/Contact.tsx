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
        </div>
    );
};

export default Contact;