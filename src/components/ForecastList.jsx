import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

class ForecastList extends React.Component {
  static propTypes = {
    forecasts: PropTypes.array,
    forecastLoadError: PropTypes.bool
  };

  render() {
    const forecasts = this.props.forecasts;
    const forecastLoadError = this.props.forecastLoadError;

    if (forecastLoadError) {
      return (
        <div className="alert alert-danger">Cannot load data. Error contacting API.</div>
      );
    }

    if (!forecasts.length) {
      return (
        <div className="alert alert-info">No cities added.</div>
      );
    }

    return (
      <div className="forecasts">
        <h2>Forecast Summary</h2>
        <ul className="row row-cols-1 row-cols-sm-4 g-4">
          {Object.keys(forecasts).map(key => (
            <ForecastSummary key={key} id={key} details={forecasts[key]} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ForecastList;
