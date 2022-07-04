import React from 'react'
import { useParams } from 'react-router-dom'

import HomeDetails from './HomeDetails'
import CommentList from './CommentList'

function home() {
  const { id } = useParams()
  return (
    <>
      <main className="home-wrapper">
        <HomeDetails />
        <CommentList dataId={id} />
      </main>
    </>
  )
}

export default home