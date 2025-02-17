import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import CourseItemsDetails from './components/CourseItemDetails'

import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemsDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
    <NotFound />
  </Switch>
)
export default App
