import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class AddCityForm extends React.Component
{
  static propTypes = {
    addCityForecast: PropTypes.func
  };

  nameRef = React.createRef();
  latitudeRef = React.createRef();
  longitudeRef = React.createRef();

  addCity = (event) => {
    event.preventDefault();
    const city = {
      name: this.nameRef.current.value,
      latitude: this.latitudeRef.current.value,
      longitude: this.longitudeRef.current.value
    };

    axios.post('http://localhost/api/city', city).then((response) => {
      const cityId = response.data.id;
      axios.get('http://localhost/api/weather/' + cityId).then((response) => {
        this.props.addCityForecast(response.data);
      });
    }).catch(function (error) {
      console.error(error);
    });
    
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="add-city-form">
        <h2>Add a city</h2>
        <form onSubmit={this.addCity} className="row">
          <div className="col-md-3 mb-3">
            <input type="text" ref={this.nameRef} className="form-control" placeholder="Name"/>
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" ref={this.latitudeRef} className="form-control" placeholder="Latitude"/>
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" ref={this.longitudeRef} className="form-control" placeholder="Longitude"/>
          </div>
          <div className="col-md-3 mb-3"><button type="submit" className="btn btn-primary">Add</button></div>
        </form>
      </div>
    );
  }
}

export default AddCityForm;