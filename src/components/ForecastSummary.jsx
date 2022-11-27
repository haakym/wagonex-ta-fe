import React from "react";
import PropTypes from "prop-types";

class ForecastSummary extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      forecasts: PropTypes.array
    })
  };

  render() {
    const {id, city, forecasts} = this.props.details;

    return (
      <div className="col">
        <li className="card">
          <div className="card-body">
            <h3 className="card-title">
              <a href={`/weather/${id}`}>{city}</a>
            </h3>
            <ul className="list-group">
              {forecasts.map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item.summary} @ {item.date} <img src={item.icon} />
                  </li>
                )
              })}
            </ul>
          </div>
        </li>
      </div>
    )
  }
}

export default ForecastSummary;