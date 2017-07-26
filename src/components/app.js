import React, { Component } from 'react';


import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {

  render() {
  	function cycleBackgrounds() {
	var index = 0;

	var imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < imageEls.length ? index + 1 : 0;
		// Show the next image.
		imageEls.eq(index).addClass('show');
		// Hide the previous image.
		imageEls.eq(index - 1).removeClass('show');

	}, 3000);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});
    return (
      <div>
      <div className="background-image toggle-image first-image show"></div>
	 <div className="background-image toggle-image second-image"></div>
		<div className="background-image toggle-image third-image"></div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
