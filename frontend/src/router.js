
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventDetailPage,{
  loader as eventDetailLoader,
  action as deleteAction
} from './pages/EventDetailPage';
import EventsPage,{loader as eventsLoader} from './pages/Events';
import EventsRoot from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage,{action as newEventAction} from './pages/NewEventPage';
import RootLayout from './pages/Root';
import {createBrowserRouter} from 'react-router-dom'
import {action as manipulateEventAction} from './components/EventForm';
export const router = createBrowserRouter([
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
                action: deleteAction
              },
              {
                path: 'edit',
                element: <EditEventPage/>,
                action: manipulateEventAction
              },
            ]
          },
          {
            path: 'new',
            element: <NewEventPage/>,
            action: manipulateEventAction
          },
        ] 
      },
      
    ]
  }
])