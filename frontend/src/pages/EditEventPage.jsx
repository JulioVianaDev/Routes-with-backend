import React from 'react'
import EventForm from '../components/EventForm.js'
import {useLoaderData} from 'react-router-dom'

function EditEventPage() {
  const data=useLoaderData()
  const event = data.event;
  return <EventForm event={event} />
}

export default EditEventPage