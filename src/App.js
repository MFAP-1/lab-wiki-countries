import './App.css';

import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Route path="/country/:cca3Code" component={CountryDetails} />
        </div>
      </div>
    </>
  );
}

export default App;
