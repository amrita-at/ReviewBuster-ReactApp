import React from 'react';
import './App.css';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserProfile from './pages/UserProfile';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import AdminPage from './pages/AdminPage';
import EditProfile from './pages/EditProfile';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const { loading} = useAuth0();

  if (loading) {
    return <LoadingAnimation></LoadingAnimation>;
  }


  return (
    <div className="App">
      <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <div className="Container">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/profile" component={UserProfile} />
              <Route path="/myreviews" component={HomePage} />
              <Route path="/moviedetails" component={MovieDetails} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/editprofile" component={EditProfile} />
           </Switch>
         </div>
      </BrowserRouter>
    </div>
  );
}

export default App;