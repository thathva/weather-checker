import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from './Chart'

class WeatherList extends Component {

    renderWeather(cityData) {
        if(cityData === undefined) {
           return
        }
        const name = cityData.city.name;
        const id = cityData.city.id;
        const temps = cityData.list.map(weather => (weather.main.temp)-273.15)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        return (
            <tr key={id}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="C"/></td>
                <td><Chart data={pressure} color="blue" units="hPa"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="ui selectable celled table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (HPA)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
                </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)