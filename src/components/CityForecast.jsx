import React from "react";
import axios from "axios";
import ForecastSummary from './ForecastSummary';

class CityForecast extends React.Component
{
  state = {
    forecast: {},
    forecastLoadError: false
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.getCityForecast(params.cityId)
  };

  getCityForecast = (cityId) => {
    axios.get('http://localhost/api/weather/' + cityId).then((response) => {
      this.setState({ forecast: response.data });
    });
  };

  render() {
    if (!forecast) {
      return <p>Forecast cannot load</p>;
    }

    return (
      <div>
        <ForecastSummary id={key} details={forecasts[key]} />
      </div>
    );
  };
}

export default CityForecast;