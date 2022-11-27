import React from "react";
import axios from "axios";
import ForecastList from "./components/ForecastList";
import AddCityForm from "./components/AddCityForm";

class App extends React.Component {
  state = {
    forecasts: [],
    forecastLoadError: false
  };

  getCityForecasts = () => {
    axios.get('http://localhost/api/weather')
      .then((response) => {
        if (response.data) {
          this.setState({ forecasts: response.data });
        }
      }).catch((error) => {
        console.error(error);
        this.setState({
          forecastLoadError: true
        });
      });
  };

  addCityForecast = (cityForecast) => {
    const forecasts = this.state.forecasts.concat(cityForecast);
    
    this.setState({ forecasts });
  };

  componentDidMount() {
    this.getCityForecasts();
  };

  render() {
      return (
        <div className="container">
          <div className="row">
            <h1 className="text-center">WagonEx Weather</h1>
            <AddCityForm addCityForecast={this.addCityForecast} />
          </div>
          <div className="row">
            <ForecastList
              forecasts={this.state.forecasts}
              forecastLoadError={this.state.forecastLoadError}
            />
          </div>
        </div>
      )
  }
}

export default App;
