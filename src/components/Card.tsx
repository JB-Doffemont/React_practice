import React from 'react';

interface Props {
    contact: {
        avatar:string,
        name:string,
        firstname:string,
        message:string,
    };
    index: number;
}


const Card = ({contact, index}:Props) => {
    return (
        <div className='main_cardContainer' key={index}>
            <div className="main_cardImg">
                <img src={`${contact.avatar}`} alt="avatar" />
            </div>
            <div>
                <div className="main_cardInfos">
                    <h4>{contact.firstname} {contact.name}</h4>
                </div>
                <div className="main_cardMessage">
                    <p>{contact.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;