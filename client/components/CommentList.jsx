import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeComments } from '../slices/comments'

import Comments from './Comments'
import CommentInfo from './CommentInfo'

function CommentList() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const CommentDetails  = useSelector((state) => state.comments)

  useEffect(async () => {
    dispatch(fetchHomeComments(id))
  }, [])

  return (
    <>
      <main className="comment-list">
        <h2 className='comment-list-title'>Comments: </h2>
        <CommentInfo />
        {CommentDetails.map((review) =>{
          return (
            <Comment
              key={comment.id}
              name={comment.commenter_name}
              comment={comment.comment}
              />
          )
        })}
      </main>
    </>
  )
}

export default CommentList