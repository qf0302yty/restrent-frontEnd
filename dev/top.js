import React from "react";
import UserFunc from "./userfunc.js";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import createHistory from 'history/createHashHistory'
const history = createHistory();
class Top extends React.Component{
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {
                area:"bj",
            }
        }
        componentWillReceiveProps(nextProps){
            var areanow = "";
            var areas = {
                'bj':"北京",
                'sh':"上海",
                'gz':"广州",
                'sz':"深圳",
            }
            for (var item in areas){
                if(item == nextProps.area){
                    var areanow = areas[item];
                }
            }
            this.setState({area:areanow});
        }
        handleClick(e){
            var areanow = e.target.id;
            this.props.changeArea(areanow);
            // this.setState({area:areanow});
            history.push({
              pathname: "/"+areanow,
              state: {area:areanow }
            })
        }
        render(){
        	var topStyle = {
        		background:"rgba(70,160,115,1)",
        		width:"100%",
        		color:"#fff",
        		height:"4vw",
        		lineHeight:"4vw",
        		fontSize:"1.6vw",
                position:"fixed",
                zIndex:"10000"
        	}
            var areaStyle = {
                background:"rgba(0,103,69,0.8)",
                borderRadius:"10px",
                marginLeft:"8px",
                padding:"4px",
                fontSize:"0.8vw",
                cursor:"pointer",
            }
            var areaMenuStyle = {
                position:"fixed",
                top:"3.5vw",
                left:"20vw" ,
                background:"#fff",
                height:"2.4vw",
                lineHeight:"2vw",
                width:"12vw",
                borderRadius:"5px",
                display:"none",
                border:"1px solid #EAEAEA",
                boxShadow:"0px 0px 2px #c8c8c8"
            }
            var linkStyle = {
                color:"#000",
                textDecoration:"none",
                marginLeft:"5px",
                marginRight:"5px",
                fontSize:"0.8vw",
                display:"inline-block",
                height:"2vw",
                lineHeight:"2vw",
            }
            var tri1 = {
                position:"absolute",
                width:0,
                height:0,
                borderWidth:"5px",
                borderColor:"transparent transparent #EAEAEA transparent",
                borderStyle:"dashed dashed solid dashed",
                overflow:"hidden",
                top:"-10px",
                left:"15px",
            }
            var tri2 = {
                position:"absolute",
                width:0,
                height:0,
                borderWidth:"5px",
                borderColor:"transparent transparent #fff transparent",
                borderStyle:"dashed dashed solid dashed",
                overflow:"hidden",
                top:"-9px",
                left:"15px",
            }
            var homelinkStyle = {
                color:"#fff",
                textDecoration:"none"
            }
            var areabutton = "";
            if(this.props.isHome){
                areabutton = (<span style={areaStyle} id="openareamenu">
                  <i className="fa fa-map-marker"></i>
                  &nbsp;{this.state.area}</span>);
            }
            return(
	            <div style={topStyle}>
	              <span>&nbsp;&nbsp;<Link style={homelinkStyle} to={"/"+this.props.area}>基于Rest的租房信息聚合</Link>{areabutton}</span>
                  <div style={areaMenuStyle} id="areamenu" >
                      <div style={tri1}></div>
                      <div style={tri2}></div>
                      <p style={linkStyle} onClick={this.handleClick} id="bj">北京</p>
                      <p style={linkStyle} onClick={this.handleClick} id="sh">上海</p>
                      <p style={linkStyle} onClick={this.handleClick} id="gz">广州</p>
                      <p style={linkStyle} onClick={this.handleClick} id="sz">深圳</p>
                  </div>
                  <UserFunc userid={this.props.userid} username={this.props.username} 
                  clearLog = {this.props.clearLog} area={this.props.area}/>
	            </div>
            )
        }
    };
module.exports = Top;