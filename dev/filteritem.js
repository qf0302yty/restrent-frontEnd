import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,NavLink
        } from "react-router-dom";

class FilterItem extends React.Component{
	constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {searchContent:props.content,area:props.area};
    }
    handleClick(e){
            this.props.changeFilter(this.props.conditions.type,e.target.id);
    }
	render(){
			// var conditions = this.props.conditions['content'].map(function(item,index){
	  //               return <a key = {index} href={conditions['content'][item]}>{item}</a>
	  //       }.bind(this));
	        var content = this.props.conditions['content'];
            var filtersnow = this.props.filters;
            var fitertype = this.props.conditions.type;

	        var conditions = [];
	        var fiStyle = {
        		padding:"1vw",
        		display:"inline-block",
            }
            var filStyle = {
            	color:"#000",
            	textDecoration:"none",
            	marginLeft:"11px",
            	marginRight:"11px",
                cursor:"pointer"
            }
            var filaStyle = {
            	color:"rgba(70,160,115,1)",
                fontWeight:"700",
                marginLeft:"11px",
                marginRight:"11px",
                cursor:"pointer",
            }
	        for (var item in content){
                if(filtersnow[fitertype]==content[item]){
                    var condition = <span style={filaStyle} onClick={this.handleClick}
                    key={content[item]} id={content[item]}>{item}</span>
                }else{
                    var condition = <span style={filStyle} onClick={this.handleClick}
                    key={content[item]} id={content[item]}>{item}</span>
                }
	        	conditions.push(condition);
	        }
            return(
	            <div style={fiStyle}>
	               {conditions}
	            </div>
            )
        }
    };
module.exports = FilterItem;