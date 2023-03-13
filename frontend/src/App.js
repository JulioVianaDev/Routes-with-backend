import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventDetailPage,{loader as eventDetailLoader} from './pages/EventDetailPage';
import EventsPage,{loader as eventsLoader} from './pages/Events';
import EventsRoot from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage,{action as newEventAction} from './pages/NewEventPage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {index: true,element: <HomePage/>},
      {
        path: 'events',
        element: <EventsRoot/>,
        // errorElement: <Error/>,
        children:[
          {
            index: true,path:'',
            element: <EventsPage/>,
            loader: eventsLoader
          },
          {
            path: ':id',
            loader: eventDetailLoader,
            id:'event-detail',
            children: [
              {
                index: true,
                element: <EventDetailPage/>,
              },
              {
                path: 'edit',
                element: <EditEventPage/>
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage/>,
            action: newEventAction
          },
        ] 
      },
      
    ]
  }
])
function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
