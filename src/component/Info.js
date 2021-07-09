import React from 'react'
import rain from './image/rain.jpg'
import sunny from './image/sunny.jpg'
const Info = (props) => {
    
    return (
        <div className='main-container '>
            <div className='name-section d-flex bg-dark text-white'>
            
            <h4>{props.output.location.name},</h4>
            <h4>{props.output.request.type},</h4>
            <h4>{props.output.request.query}</h4>
           
            </div>
            <div className='search-section d-flex bg-dark text-white'>
                <div className="img"> 
                  <img src={props.output.current.weather_icons}/> 
                </div>
                <div className='temp'>
                <h2>{props.output.current.temperature} * C</h2>
                </div>
                <div className='other-info'>
                <h4>Wind:{props.output.current.wind_speed} kmph</h4>
                <h4>Precip:{props.output.current.precip} mm</h4>
                <h4>Pressure:{props.output.current.pressure} mb</h4>
                </div>
            </div>
            <div className='weekly-section'>
            {
               (props.output.current.precip==0)? <img src={sunny} className='img-container'/>:<img src={rain} className='img-container'/>
            }
              
            </div>
        </div>
        
    )
}

export default Info
