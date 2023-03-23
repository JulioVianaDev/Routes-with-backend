import {useLoaderData,json,defer,Await} from 'react-router-dom'
import EventsList from '../components/EventsList';
function EventsPage() {
  const {events} = useLoaderData();

  return <Await resolve={events}>
    {(loadEvents)=><EventsList events={loadEvents}/>}
  </Await>
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
    return response;
  }
}
export async function loader(){
  defer({
    events: loadEvents()
  })
}