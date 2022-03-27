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
        <div key={index}>
            <img src={`${contact.avatar}`} alt="avatar" />
            <h4>{contact.name}{contact.firstname}</h4>
            <p>{contact.message}</p>
            
        </div>
    );
};

export default Card;