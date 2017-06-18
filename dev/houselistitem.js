import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,NavLink
        } from "react-router-dom";
class HouseListItem extends React.Component{
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {
                area:props.areanow
            }
        }
        handleClick(){
            var url=window.location.href.split('#')[0]+'#/'+this.state.area+'/detail/'+this.props.house._id;
            var win = window.open(url, '_blank');win.focus();
        }
        componentDidMount(){
            console.log("mounting!");
            document.getElementById('image_kill_referrer'+this.props.house._id).innerHTML = ReferrerKiller.imageHtml(this.props.house.imgPath[0]);
        }
        componentWillReceiveProps(nextProps){
            if(this.props.house._id!=nextProps.house._id){
                if(nextProps.house.imgPath[0]){
                    setTimeout(function () {
                    document.getElementById('image_kill_referrer'+nextProps.house._id).innerHTML = ReferrerKiller.imageHtml(nextProps.house.imgPath[0]);
                    }, 100);
                }else{
                    setTimeout(function () {
                    document.getElementById('image_kill_referrer'+nextProps.house._id).innerHTML = ReferrerKiller.imageHtml("");
                    }, 100);
                } 
            }
        }
        render(){
            var h = this.props.house;
        	var houselistItemStyle = {
        		width:"60vw",
                borderBottom:"1px solid #EAEAEA",
                borderRight:"1px solid #EAEAEA",
                boxSizing:"border-box",
        	}
            var imgStyle = {
                width:"13vw",
                height:"9.8vw",
                marginLeft:"1.5vw",
                marginRight:"1.5vw",
                marginBottom:"1.5vw",
                marginTop:"1.7vw",
                float:"left",
                boxSizing:"border-box",
            }
            var infoDivStyle = {
                float:"left",
                marginTop:"1.5vw",
                position:"relative",
                boxSizing:"border-box",
                width:"43.5vw",
            }
            var titleStyle = {
                color:"rgb(70,153,184)",
                fontSize:"1.5vw",
                textDecoration:"none",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap",
                width:"43vw",
                display:"inline-block"
            }
            var infogreyStyle = {
                color:"#8B8682",
                fontSize:"1.2vw",
                marginTop:"12px",
                
            }
            var priceStyle = {
                float:"right",
                fontSize:"2vw",
                color:"rgb(225,96,67)",
                position:"absolute",
                top:"50%",
                right:"1vw",
                marginTop:"-2vw"
            }
            var tagYellow = {
                fontSize:"1vw",
                paddingTop:"3px",
                paddingBottom:"3px",
                paddingLeft:"6px",
                paddingRight:"6px",
                border:"1px solid rgb(233,177,27)",
                color:"rgb(233,177,27)",
                marginRight:"10px",
                letterSpacing:"2px",
            }
            //<p><Link to={"/"+this.state.area+"/detail/"+h._id} style={titleStyle} 
                     //id={this.props.index-1}  onMouseOver={this.props.handleHover} onMouseOut={this.props.handleOut}>{this.props.index+"."}{h.title}</Link></p>
            var tagGreen = {
                fontSize:"1vw",
                paddingTop:"3px",
                paddingBottom:"3px",
                paddingLeft:"6px",
                paddingRight:"6px",
                border:"1px solid rgb(105,178,115)",
                color:"rgb(105,178,115)",
                marginRight:"10px",
                letterSpacing:"2px",
            }
            //<img src={h.imgPath[0]} style={imgStyle}/>
            return(
	            <div style={houselistItemStyle}>
	              
                  <span id={"image_kill_referrer"+h._id} style={imgStyle} className="image_kill_referrer"></span>
                  <div style={infoDivStyle}>
                     
                     <p><span onClick={this.handleClick} style={titleStyle} 
                     id={this.props.index-1}  onMouseOver={this.props.handleHover} onMouseOut={this.props.handleOut}>{this.props.index+"."}{h.title}</span></p>
                     <p style={infogreyStyle}>{h.urbanDistrict}  /  {h.floor}  /  {h.houseType}</p>
                     <p style={infogreyStyle}>{h.communityName}</p> 
                     <p style={priceStyle}>{h.rent}元/月</p>
                     <p style={{marginTop:"12px",marginBottom:"26px"}}><span style={tagYellow}>{h.leasingMethod}</span><span style={tagGreen}>{h.orientation}</span></p>
                  </div>
                  <div style={{clear:"both"}}></div> 
	            </div>
            )
        }
    };
module.exports = HouseListItem;