import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          weather: [],
          city: ''
               }
    }



handleChange (event) {

  let city = (event.target.value);
  
  console.log(city)
 }
  

 

getWeather = async (e) => {
  e.preventDefault();
  
  const city = document.getElementById('city').value;

  axios.get(`https://api.weatherapi.com/v1/current.json?key=b61abddeaf714b5bba9210052201012&q=${city}`).then(
   res => {
    this.setState ({weather: [res.data] })
    // console.log(this.state.weather)
   }
 ).catch(console.error());
  
 if (city === '') {
   alert("Missing City")
  }
 
 
}

render (){

return(

<div id='Everything' >
<br/>
<br/>

<form id='form' onSubmit={this.getWeather}>

<input
type='search' 
placeholder='City...'
id='city'
onChange={this.handleChange}
/>

<br/>
<br/>

<Button className="btn-primary" variant='primary' type='submit'> Search </Button>

  <br/>
  <br/>
  <h2>{this.state.weather.map(weather => (<div>
  {weather.location.name}
  <hr/>
  {weather.location.region}
  <hr/>
  {weather.location.country}
  <hr/>
  {weather.current.temp_f} <span>°F</span>
  <hr/>
  {weather.current.temp_c} <span>°C</span>
  <hr/>
  <h2>{weather.current.condition.text}</h2>
  <img src={weather.current.condition.icon}/>

  </div>))}</h2>
  </form>

</div>


)
}
}