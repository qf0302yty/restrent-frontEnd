import React from "react";
import UserFunc from "./userfunc.js";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import createHistory from 'history/createHashHistory';
import {ProgressBar} from 'react-bootstrap'
const history = createHistory();
class Progress extends React.Component{
        constructor(props) {
            super(props);
        }
        render(){
        	var progressStyle = {
        		background:"#fff",
                fontSize:"1.1vw",
                boxShadow:"0px 0px 3px grey",
                position:"relative",
                height:"15vw",
                lineHeight:"15vw",
                paddingTop:"7vw",
                paddingLeft:"4vw",
                paddingRight:"4vw"
        	}
            return(
	            <div style={progressStyle}>
                    <ProgressBar active now={this.props.now} />
	            </div>
            )
        }
    };
module.exports = Progress;