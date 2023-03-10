import React from 'react'
import {Link} from 'react-router-dom'
const dummy_events =[
  {id: 'e1',title: 'some event'},
  {id: 'e2',title: 'another event'}
]
function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {dummy_events.map(e=><li key={e.id}> 
            <Link to={`${e.id}`}> {e.title}</Link>
          </li>
        )}
      </ul>
    </>
  )
}

export default EventsPage