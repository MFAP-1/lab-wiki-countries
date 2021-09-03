import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={'/country/' + country.cca3}
              key={country.cca3}
              // onClick={window.reload()}
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
