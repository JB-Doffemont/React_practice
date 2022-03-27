import React from 'react';
import AddBtn from '../components/AddBtn';
import Contact from '../components/Contact';

const Channel = () => {
    return (
        <div className="main_container">
        <div className='main_top'>
            <div className="main_title">
                <h1>Mes discussions</h1>
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