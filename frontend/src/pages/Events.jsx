import {useLoaderData,json,defer,Await} from 'react-router-dom'
import EventsList from '../components/EventsList';
import { Suspense } from 'react';
function EventsPage() {
  const {events} = useLoaderData();

  return(
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  ) 
}

export default EventsPage;


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
export function loader(){
  return defer({
    events: loadEvents()
  })
}