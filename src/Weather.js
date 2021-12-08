import axios from 'axios';
import React, { Component } from 'react';
// import { Component } from 'react';

export default class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_API_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`
        let results = await axios.get(url);
        console.log(results.data);
        this.setState ({ weatherForecast: results.data})
    }
    


    render() {
        return (
            <>
            <button onClick={this.getWeatherForecast}>get todays forecast</button>
           {this.state.weatherForecast.length > 0 && this.state.weatherForecast.map((dayForecast, idx) => <li key={idx}>date: {dayForecast.date}low temp:{dayForecast.min_temp} high temp:{dayForecast.max_temp} description:{dayForecast.description}</li>)}
            </>
        )
    }
}