import React from "react";
import UserFunc from "./userfunc.js";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import createHistory from 'history/createHashHistory'
const history = createHistory();
class ToTopButton extends React.Component{
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.handleOut = this.handleOut.bind(this);
        }
        handleClick(e){
            $('body,html').animate({ scrollTop: 0 }, 200);
        }
        handleHover(e){
            e.target.style.background = 'rgb(0,103,69)';
        }
        handleOut(e){
            e.target.style.background = "rgba(70,160,115,1)";
        }
        // componentDidMount(){
        //     var bottomtop = $("#bottom").offset().top;
        //     var vwheight = parseInt($("#totopbotton").css("height"))/3;
        //     $(window).scroll(function(){
        //         if($('#totopbotton').offset().top>bottomtop-4*vwheight){
        //             $("#totopbotton").css({"bottom":"4.8vw"});
        //         }else{
        //             $("#totopbotton").css({"bottom":"0.8vw"});
        //         }
        //     })
        // }
        render(){
        	var topStyle = {
        		background:"rgba(70,160,115,1)",
                width:"3.6vw",
        		color:"#fff",
        		height:"3vw",
        		lineHeight:"3vw",
        		fontSize:"12px",
                position:"fixed",
                zIndex:"10000",
                bottom:"4.8vw",
                right:"0.8vw",
                borderRadius:"5px",
                textAlign:"center",
                cursor:"pointer"
        	}
            return(
	            <div style={topStyle} onClick={this.handleClick} id="totopbotton"
                onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
                    回顶部
	            </div>
            )
        }
    };
module.exports = ToTopButton;