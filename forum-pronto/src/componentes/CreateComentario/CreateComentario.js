import React, { useState } from 'react';
import axios from 'axios';

function CreateComentario({ postId }) {
    const [comment, setComment] = useState('');
    const API_URL = "http://localhost:3003/comment/create";
    const AUTH_TOKEN = "d1e2f360-6540-4bf8-a477-f4ac7f7b5edc";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(API_URL, {
            postId,
            comment
        }, {
            headers: {
                'Authorization': AUTH_TOKEN
            }
        })
        .then(response => {
            if (response.status === 200) {
                console.log("Comment created successfully:", response.data);
                setComment('');  // clear the comment input after successful submission
            } else {
                console.error("Error creating comment");
            }
        })
        .catch(error => {
            console.error("There was an error while posting the comment:", error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Add your comment here..."
            />
            <button type="submit">Submit Comment</button>
        </form>
    );
}

export default CreateComentario;
