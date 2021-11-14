import axios from 'axios';
import React, { Component } from 'react';
// import { Component1 } from 'react';

export default class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.props.location.display_name.split(',')[0]}&lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url)
        console.log(response.data)
        this.setState({ weatherForecast: response.data});
    }
    


    render() {
        return (
            <>
            <button onClick={this.getWeatherForecast}>get todays forecast</button>
           {this.state.weatherForecast.length > 0 && this.state.weatherForecast.map((dayForecast, idx) => <li key={idx}>low temp:{dayForecast.min_temp} high temp:{dayForecast.max_temp} description:{dayForecast.description}</li>)}
            </>
        )
    }
}