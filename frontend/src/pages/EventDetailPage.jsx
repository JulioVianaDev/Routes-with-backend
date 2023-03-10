import React from 'react'
import { useParams } from 'react-router'
function EventDetailPage() {
  const params = useParams();

  return (
    <>
    <h1>{params.id}</h1>
    </>
  )
}

export default EventDetailPage