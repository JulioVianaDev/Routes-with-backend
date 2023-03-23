import React,{Suspense} from 'react'
import {redirect, useRouteLoaderData ,json,defer,Await} from 'react-router-dom'
import EventItem from '../components/EventItem.js'
import EventsList from '../components/EventsList.js'
function EventDetailPage() {
  const {event,events}= useRouteLoaderData('event-detail');
  return (
    <>
    <Suspense fallback={<p>carregando evento</p>}>
      <Await resolve={event}>
        {(loadEvent)=> <EventItem event={loadEvent}/>}
        <EventItem event={event}/>
      </Await>
    </Suspense>
    <Suspense fallback={<p>carregando eventos</p>}>
      <Await resolve={events}>
        {(loadEvents)=><EventsList events={loadEvents}/>}
      </Await>
    </Suspense>
    </>
  )
}

export default EventDetailPage

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/'+id);
  if (!response.ok){
    throw json(
      {message: "Não foi possivel buscar os eventos"},
      {status: 500,}
    )
  }else{
    const respData= await response.json();
    return respData.event
  }
}
export async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true,message: 'não foi possivel  buscar os eventos'}
    // throw new Response(
    //                     JSON.stringify(
    //                       {message: "Não foi possivel buscar os eventos"}
    //                     ),
    //                     {status: 500}
    //                   )
    throw json(
                  {message: "Não foi possivel buscar os eventos"},
                  {status: 500,}
                )
  } else {
    const respData= await response.json();
    return respData.events
  }
}

export async function loader({request,params}){
  const id = params.id
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

export async function action({params,request}){
  const id= params.id;
  const response = await fetch('http://localhost:8080/events/'+id,{
    method: request.method,
  });
  if(!response.ok){
    throw json(
      {message: 'não foi possivel deletar o evento'},
      {status: 500}
    )
  }
  return redirect('/events')
}