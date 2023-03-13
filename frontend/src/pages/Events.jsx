import {useLoaderData,json} from 'react-router-dom'
import EventsList from '../components/EventsList';
function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  if(data.isError){
    return <p>{data.message}</p>
  }
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader(){
  const response = await fetch('http://localhost:8080/evasdaents');

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