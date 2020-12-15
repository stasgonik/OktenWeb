import React from 'react';

export default function Comment(props) {
    const {item} = props;
    return (
        <div>
            <p>ID of post is {item.postId}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Comment: {item.body}</p>
        </div>
    );
}
