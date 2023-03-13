import React from 'react'
import EventForm from '../components/EventForm.js'
import {useRouteLoaderData} from 'react-router-dom'

function EditEventPage() {
  const data=useRouteLoaderData('event-detail')
  const event = data.event;
  return <EventForm event={event} />
}

export default EditEventPage