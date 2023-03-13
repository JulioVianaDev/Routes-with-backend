import React from 'react'
import { useRouteLoaderData ,json} from 'react-router-dom'
import EventItem from '../components/EventItem.js'

function EventDetailPage() {
  const data= useRouteLoaderData('event-detail');
  return (
    <>
      <EventItem event={data.event}/>
    </>
  )
}

export default EventDetailPage

export async function loader({request,params}){
  const id = params.id
  const response = await fetch("http://localhost:8080/events/"+id)
  if(!response.ok){
    throw json({message: "não foi possivel buscar os dados deste evento em especifico"},{
      status: 500
    })
  }else{
    return response
  }
  

}