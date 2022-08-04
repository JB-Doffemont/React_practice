import React from 'react';
import AddBtn from '../components/AddBtn';
import Contact from '../components/Contact';
import contactData from '../data/contactData';

const Channel = () => {
    return (
        <div className="main_container">
            
        <div className='main_top'>
            <div className="main_title">
                <h1>Mes discussions</h1>  <p>({contactData.length})</p>
            </div>
            <div className="main_addBtn">
                <AddBtn></AddBtn>
            </div>
        </div>
            <Contact></Contact>
        </div>
    );
};
export default Channel;