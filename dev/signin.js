import React from "react";
import SignForm from "./signform.js";
import { CSSTransitionGroup } from 'react-transition-group';
class SignIn extends React.Component{
        render(){
        	var signinStyle = {
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
    	            <div style={signinStyle}>
    	              <SignForm type="signin" signin={this.props.signin} urlbase={this.props.urlbase}/>
    	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = SignIn;