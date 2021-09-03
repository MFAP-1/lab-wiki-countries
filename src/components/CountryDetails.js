import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name: {},
    cca3: '', // helper to reload the page
    capital: [],
    area: null,
    borders: [],
  };

  // componentDidMount = () => {
  //   this.updateCurrentCountry();
  // };

  // to update the state given a new country
  updateCurrentCountry = () => {
    const foundCountry = countries.find((country) => {
      return country.cca3 === this.props.match.params.cca3Code;
    });
    if (foundCountry) {
      this.setState({ ...foundCountry });
      // case where the user do not enter a valid country
    } else {
      alert('entre um pais válido. Não existe um país com esse código.');
      this.setState({ ...countries[0] }); // presenting the first country on the screen
    }
  };

  // auxiliary method to return the common name of a country given a cca3 code.
  nameOfCountry = (cca3Code) => {
    let foundName = countries.find((country) => {
      return cca3Code === country.cca3;
    }).name.common;
    if (foundName) {
      return foundName;
    } else {
      return 'não encontrado.';
    }
  };

  // auxiliary method to return all capitals for a given country. (exemple: South Africa has 3 capitals)
  renderCapitals = () => {
    return this.state.capital.map((capital) => {
      return <span>{capital}. </span>;
    });
  };

  // main redering method
  render() {
    if (this.state.cca3 !== this.props.match.params.cca3Code) {
      this.updateCurrentCountry();
    }
    return (
      <div className="col-7">
        <h1>{this.state.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{this.renderCapitals()}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map((cca3Code) => {
                    return (
                      <li key={cca3Code}>
                        <Link to={'/country/' + cca3Code}>
                          {this.nameOfCountry(cca3Code)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
