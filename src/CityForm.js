import React from 'react';
import { Component} from 'react';
import { Form, FormControl, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class CityForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            cityVal: ''
        }
    }
    handleChange = (e) => {
        this.setState({cityVal: e.target.value})
    }

    exploreClick = (e) => {
        this.props.getLocation(this.state.cityVal)
    }


    render(){
        return (
            <>
            <Form>
                <FormLabel>Enter a City to search</FormLabel>
                <FormControl onChange={this.handleChange} type="text" value={this.state.cityVal}></FormControl>
                <Button onClick={this.exploreClick} variant="primary">Explore!</Button>
            </Form>
            <p>{this.state.cityVal}</p>
            </>
        )
    }
}