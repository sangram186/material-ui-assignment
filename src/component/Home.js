import React, { useState, useEffect } from 'react';
import './Home.css';
import Post from './Post';
import User from './User';
import PostTitle from './PostTitle';

const Home = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err));
    }, []);
    

    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }
    
    shuffle(post);

    const show10Post = post.slice(0, 10);
    const show15Title = post.slice(0, 75);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className='home'>
                <div className='post-title'>
                    <h3>All Topics <span>🔥</span></h3>
                    {show15Title.map((postForTitle, idx) => <PostTitle key={idx} postForTitle={postForTitle}></PostTitle>)}
                </div>

                <div className={'post'}>
                    <h2>Todays Posts 📓</h2>
                    {show10Post.map((post, idx) => <Post key={idx} postApi= {post}></Post>)}
                </div>

                <div className="user">
                    <h2>All Users <span>🧑‍🤝‍🧑</span></h2>
                    {
                        users.map(user => <User allUsers={user}></User>)
                    }
                </div>
            </div>
    );
};

export default Home;