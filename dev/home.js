import React from "react";
import Search from './search.js';
import Adver from './advertise.js';
import { CSSTransitionGroup } from 'react-transition-group';
class Home extends React.Component{
        constructor(props){
            super(props);
            // this.state = {
            //     area:props.areanow,
            // }
        }
        componentDidMount(){
            this.props.setHome(true);
            
            // console.log("ajaxing……");
            // $.ajax({
            //     type:'post',
            //     data: {'_id':1},
            //     url:'http://192.168.43.138:5000/rentdata/getdata'
            // }).done(function(resp){
            //     if(resp.status == "success"){
            //         console.log(resp);
            //     }else{
            //         console.log("error");
            //     }
            // });
            // console.log("ajaxed!");
        }
        componentWillUnmount(){
            this.props.setHome(false);
        }
        render(){
        	var homeStyle = {
        		background:"rgba(0,0,0,0.4)",
        		width:"100%",
        		height:window.screen.availHeight*0.9,
        	}
            return(
                <CSSTransitionGroup transitionName="list"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
	            <div style={homeStyle}>
	              	<Adver/>
	              	<div style={{width:"65vw",margin:"auto",boxSizing:"border-box"}}>
	              		<Search area={this.props.areanow}/>
	              	</div>
	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = Home;