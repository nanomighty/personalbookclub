import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from './components/Register';
import ListAll from './components/ListAll';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SignIn path="/signin" />
        <Register path="/register" />
        <ListAll path="/dashboard" />
        <Create path="/create" />
        <Details path="/dashboard/books/:_id" />
        <Edit path="/dashboard/books/:_id/edit" />
      </Router>
    </div>
  );
}

export default App;
