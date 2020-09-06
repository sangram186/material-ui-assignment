import React from 'react';
import './User.css'

const User = (props) => {
    const {name, email, phone, id} = props.allUsers;
    console.log(name)
    return (
        <div className="width">
            <div className="user-area">
                <img src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`} alt=""/>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
};

export default User;