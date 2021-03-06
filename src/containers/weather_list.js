import React,{ Component } from 'react';
import { connect }  from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from "../components/google_maps"; 

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;
		
		return (
			<tr  key={name} >
				
				<td className="hidden-xs"><GoogleMaps  lon={lon} lat={lat} /></td>
				<td className="visible-xs col-sm-4">{name}</td>
				<td><Chart className="col-sm-4" data={temps} color="orange" units="K" />  </td>
				<td><Chart className="col-sm-4" data={pressure} color="green" units="hPa" /> </td>
				<td><Chart className="col-sm-4" data={humidity} color="blue" background-color="white" units="%" /></td>
			</tr>
			)

	}
	renderCityName(cityData){
		const name = cityData.city.name;
		return name;
	}
	render(){
		return(
			<table className="col-sm-12 table table-hover">
				<thead>
					
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody >
				
				{this.props.weather.map(this.renderWeather)}
				

				</tbody>

			</table>
			)
	}
}
function mapStateToProps({weather}){

	return { weather };// { products } === { products: products }
}

export default connect(mapStateToProps)(WeatherList);