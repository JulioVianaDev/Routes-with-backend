import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import EventsRoot from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/Root';


// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {index: true,element: <HomePage/>},
      {path: 'events',element: <EventsRoot/>,children:[
        {index: true,path:'',element: <EventsPage/>},
        {path: ':id',element: <EventDetailPage/>},
        {path: 'new',element: <NewEventPage/>},
        {path: ':id/edit',element: <EditEventPage/>},
      ]},
      
    ]
  }
])
function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;