import React from 'react';

interface Props {
    contact: {
        name:string,
        firstname:string,
        message:string,
    };
    index: number;
}


const Card = ({contact, index}:Props) => {
    return (
        <div key={index}>
            <img src="./avatar.jpg" alt="avatar" />
            <h4>{contact.name}{contact.firstname}</h4>
            <p>{contact.message}</p>
            
        </div>
    );
};

export default Card;