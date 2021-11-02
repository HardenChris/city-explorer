import React from 'react';
import { Component } from 'react';
import axios from 'axios';



export default class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            cityValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({cityValue: e.target.value})
    }


    handleClick = async () => {
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
        // key: YOUR_ACCESS_TOKEN
        // q: SEARCH_STRING
        // format: 'json'
        try {
        let response = await axios.get(url)
        
        console.log(response.data);0
        this.setState({location: response.data[]})
        } catch (e) {
            console.error(e);
            this.setState({error: true})
        }
        
    }



    render(){
        return (
            <>
                <input onChange={this.handleChange} value={this.state.cityValue}/>
                <p>{this.state.cityValue}</p>
                <button onClick={this.handleClick}>SEARCH</button>
                {this.state.location && <h1>{this.state.location.display_name }</h1>}
            </>
        )
    }
}
  
