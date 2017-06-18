import React from "react";
class Bottom extends React.Component{
        render(){
        	var topStyle = {
        		background:"rgba(0,0,0,0.8)",
        		width:"100%",
        		color:"#fff",
        		height:"4vw",
        		lineHeight:"4vw",
        		fontSize:"1vw",
        	}
            return(
	            <div style={topStyle} id="bottom">
	              <span>&nbsp;&nbsp;&nbsp;&nbsp;哈尔滨工业大学软件学院&nbsp;|&nbsp;&copy;&nbsp;2017 版权所有</span>
	            </div>
            )
        }
    };
module.exports = Bottom;