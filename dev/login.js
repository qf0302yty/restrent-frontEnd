import React from "react";
import LogForm from "./logform.js";
import { CSSTransitionGroup } from 'react-transition-group';
class LogIn extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                area:props.areanow
            }
        }
        render(){
        	var loginStyle = {
        		background:"rgba(0,0,0,0.4)",
        		width:"100%",
        		paddingTop:"12vw",
        		height:window.screen.availHeight*0.9,
        	}
            return(
                <CSSTransitionGroup transitionName="list"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
    	            <div style={loginStyle}>
    	              <LogForm type="login" login={this.props.login} urlbase={this.props.urlbase}/>
    	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = LogIn;