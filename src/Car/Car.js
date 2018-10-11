import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './car.css';

class Car extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <img
                        src={this.props.car.img}
                        alt={this.props.car.name} />
                </div>
                <h3>{this.props.car.name}</h3>
                <p>{this.props.car.price} $</p>
            </div>
        );
    }
}

export default Car;