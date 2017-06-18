import React from "react";
import FilterItem from "./filteritem.js"
class Filter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {searchContent:props.content,area:props.area};    
        }
        render(){
        	var filterStyle = {
                background:"#fff",
                paddingLeft:"1vw",
                paddingRight:"1vw",
                fontSize:"1.1vw",
                boxShadow:"0px 3px 3px grey",
                borderBottom:"1px solid rgb(105,178,115)",
                borderTop:"3px solid rgb(105,178,115)"
            }
            var areas = this.props.filterOrigins[this.state.area];
            var types = this.props.filterOrigins.types;
            var shapes = this.props.filterOrigins.shapes;
            var squares = this.props.filterOrigins.squares;
            var prices = this.props.filterOrigins.prices;
            return(
	            <div style={filterStyle}>
	               <div><span style={{fontWeight:700}}>区域:</span><FilterItem conditions={areas} content={this.state.searchContent} 
                   area={this.state.area} changeFilter={this.props.changeFilter} filters={this.props.filters}/></div>
                   <div><span style={{fontWeight:700}}>类别:</span><FilterItem conditions={types} content={this.state.searchContent} 
                   area={this.state.area} changeFilter={this.props.changeFilter} filters={this.props.filters}/></div>
                   <div><span style={{fontWeight:700}}>房型:</span><FilterItem conditions={shapes} content={this.state.searchContent} 
                   area={this.state.area} changeFilter={this.props.changeFilter} filters={this.props.filters}/></div>
                   <div><span style={{fontWeight:700}}>面积:</span><FilterItem conditions={squares} content={this.state.searchContent} 
                   area={this.state.area} changeFilter={this.props.changeFilter} filters={this.props.filters}/></div>
                   <div><span style={{fontWeight:700}}>租金:</span><FilterItem conditions={prices} content={this.state.searchContent} 
                   area={this.state.area} changeFilter={this.props.changeFilter} filters={this.props.filters}/></div>
	            </div>
            )
        }
    };
module.exports = Filter;