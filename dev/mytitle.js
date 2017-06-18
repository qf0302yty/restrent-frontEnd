import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,NavLink
        } from "react-router-dom";
class Sorter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {searchContent:props.content};    
        }
        render(){
        	var titleparentStyle = {
        		background:"#fff",
                fontSize:"1.6vw",
                boxShadow:"0px 1px 3px grey",
                borderBottom:0,
                height:"4vw",
                lineHeight:"4vw",
        	}
            var titleStyle = {
                
            }
            return(
	            <div style={titleparentStyle}>
                    <p style={titleStyle}>&nbsp;&nbsp;我的收藏</p> 
                </div>
            )
        }
    };
module.exports = Sorter;