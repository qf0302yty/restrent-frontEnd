import React from "react";
class EmptyList extends React.Component{
        constructor(props) {
            super(props);
        }
        render(){
        	var emptylistItemStyle = {
        		width:"89vw",
                borderBottom:"1px solid #EAEAEA",
                borderRight:"1px solid #EAEAEA",
                boxSizing:"border-box",
                height:"23vw",
                lineHeight:"23vw"
        	}
            var infoStyle = {
                color:"#8B8682",
                fontSize:"1.6vw",
                width:"30vw",
                marginLeft:"15vw",
                textAlign:"center"
            }
            return(
	            <div style={emptylistItemStyle}>
	               <p style={infoStyle}>很抱歉，没有找到相关房源</p>
	            </div>
            )
        }
    };
module.exports = EmptyList;