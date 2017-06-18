import React from "react"
class Adver extends React.Component{
        render(){
        	var adStyle = {
        		color:"#fff",
        		fontSize:"4.5vw",
        		textAlign:"center",
        		height:"10vw",
        		lineHeight:"10vw",
        		paddingTop:"15vw",
        		fontWeight:"800",
        		letterSpacing:"1.5vw",
                boxSizing:"content-box"
                
        	}
            return(
	            <div style={adStyle}>
	              <p style={{boxSizing:"content-box",}}>[聪明你的租房]</p>
	            </div>
            )
        }
    };
module.exports = Adver;