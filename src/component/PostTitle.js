import React from 'react';
import './PostTitle.css'
import { Link } from 'react-router-dom';

const PostTitle = (props) => {

    const {title, id} = props.postForTitle;
    return (
        <div className='postTitle'>
            <Link className='link' to={`/post/${id}`}>{title.toUpperCase()}..</Link>
        </div>
    );
};

export default PostTitle;