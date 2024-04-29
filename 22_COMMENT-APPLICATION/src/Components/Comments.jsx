import React, { useEffect, useState } from 'react'
import '../index.css'
import { getComments as getcommentsApi } from '../Data/api'
import Comment from './Comment'
import CommentForm from './CommentForm'
const Comments = () => {
    const [BackendComments, setBackendComments] = useState([])
    const rootComments = BackendComments.filter((BackendComment) => BackendComment.parentId === null);
    const getReplies = (commentId) => {
        return BackendComments.filter((backendcomment) =>
            backendcomment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }
    useEffect(() => {
        getcommentsApi().then((data) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <>
            <div className='comments'>
                <h3 className="comments-title">Comments</h3>
                <div className="comment-form-title"> Write Comment </div>
                <CommentForm />
                <div className="comments-container">
                    {
                        rootComments.map((rootComment) => (
                            <div key={rootComment.id}>
                                <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Comments