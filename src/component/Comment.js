import React, { useState, useEffect } from 'react';
import './Comment.css';

const Comment = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
    }, []);

    const [images, setImages] = useState({});
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=100&inc=picture`)
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])
    console.log(images);
    return (
        <div>
            {comments.map(comment => {
                const {body, email} = comment;
                return (
                    <div className='comment'>
                        <div>
                            <img className='image' src={`https://randomuser.me/api/portraits/thumb/men/${Math.round(Math.random() * 100)}.jpg`} alt=""/>
                        </div>
                        <p>{body}</p>
                        <p>{email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Comment;