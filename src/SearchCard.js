import React from 'react';
import { Component } from 'react';
import { Card, CardImg } from 'react-bootstrap';

export default class SearchCard extends Component {
    render() {
        return (
            <>
            <Card style={{width: '18rem'}}>
                <CardImg variant="top" src={this.props.location.map} />
                <Card.Body>
                    <Card.Title>{this.props.location.display_name}</Card.Title>
                    <Card.Text>Lat: {this.props.location.lat}</Card.Text>
                    <Card.Text>Lon: {this.props.location.lon}</Card.Text>
                </Card.Body>
            </Card>
            </>
        )
    }
}