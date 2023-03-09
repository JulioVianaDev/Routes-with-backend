import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/Root';


// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
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
      {path: 'events',element: <EventsPage/>},
      {path: 'events/:id',element: <EventDetailPage/>},
      {path: 'events/new',element: <NewEventPage/>},
      {path: 'events/:id/edit',element: <EditEventPage/>},
    ]
  }
])
function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
