import React from "react";
class Map extends React.Component{
        
        render(){
        	
            var mapStyle = {
                height:this.props.height,
                border:"1px solid #EAEAEA"
            }
            return(            
	            <div id="map" style={mapStyle}></div>    
            )
        }
    };
module.exports = Map;