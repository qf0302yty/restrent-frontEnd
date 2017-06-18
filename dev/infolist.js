import React from "react";
import {Button} from 'react-bootstrap';
import createHistory from 'history/createHashHistory'
const history = createHistory();
class InfoList extends React.Component{
		constructor(props) {
            super(props);
            this.beLike = this.beLike.bind(this);
            this.cancelLike = this.cancelLike.bind(this);
        }
        beLike(){
            if(this.props.username==""){
                history.push({
                  pathname: "/"+this.props.area+'/login',
                });
                return false;
            }
            $.ajax({
                type:'post',
                data: {'roomId':this.props.house._id,'username':this.props.username},
                url:this.props.urlbase+'userinfo/likeTheRoom'
            }).done(function(resp){
                if(resp.status == "success"){
                    // this.setState({house:resp.data});
                    console.log("已喜欢");
                    this.props.refreshDetail();
                    // console.log(resp.data.locationPostition)
                }else{
                    console.log("error");
                }
            }.bind(this));
        }
        cancelLike(){
            $.ajax({
                type:'post',
                data: {'roomId':this.props.house._id,'username':this.props.username},
                url:'userinfo/dislikeTheRoom'
            }).done(function(resp){
                if(resp.status == "success"){
                    // this.setState({house:resp.data});
                    console.log("已取消喜欢");
                    this.props.refreshDetail();
                    // console.log(resp.data.locationPostition)
                }else{
                    console.log("error");
                }
            }.bind(this));
        }
        render(){
        	var infolistStyle = {
                paddingLeft:"2vw",
                paddingRight:"2vw",
                paddingTop:"2vw",
                paddingBottom:"2vw",
                width:"38vw",
                height:"37vw",
                boxSizing:"border-box",
                float:"left",
                position:"relative",
        	}
        	var priceStyle = {
                fontSize:"4vw",
                color:"rgb(225,96,67)",
                verticalAlign:"bottom",
                borderBottom:0
            }
            var tagTitlegreenStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                marginTop:"12px",
                letterSpacing:"3px",
                background:"rgb(105,178,115)",
                border:"1px solid rgb(105,178,115)",
                color:"#fff",
            }
            var tagContentgreenStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                marginTop:"12px",
                letterSpacing:"3px",
                border:"1px solid rgb(105,178,115)",
                color:"rgb(105,178,115)",
                marginRight:"14px"
            }
            var tagTitleyellowStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                letterSpacing:"3px",
                background:"rgb(233,177,27)",
                border:"1px solid rgb(233,177,27)",
                color:"#fff",
            }
            var tagContentyellowStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                letterSpacing:"3px",
                border:"1px solid rgb(233,177,27)",
                color:"rgb(233,177,27)",
            }
            var tagTitleredStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                letterSpacing:"3px",
                background:"rgb(219,121,49)",
                border:"1px solid rgb(219,121,49)",
                color:"#fff",
            }
            var tagContentredStyle = {
            	fontSize:"1.4vw",
                paddingTop:"6px",
                paddingBottom:"6px",
                paddingLeft:"12px",
                paddingRight:"12px",
                letterSpacing:"3px",
                border:"1px solid rgb(219,121,49)",
                color:"rgb(219,121,49)",
            }
            var spanpStyle = {
            	height:"3vw",
            	lineHeight:"3vw"
            }
            var contactStyle = {
            	width:"30vw",
            	verticalAlign:"top",
            	marginTop:"20px",
            	borderTop:"1px solid #EAEAEA",
            	borderBottom:"1px solid #EAEAEA",
            }
            var linkpStyle = {
            	width:"30vw",
            	color:"#8B8682",
            	fontSize:"1.2vw",
            }
            var linkaStyle = {
            	overflow:"hidden",
                whiteSpace:"nowrap",
                display:"inline-block",
                textOverflow:"ellipsis",
                color:"#8B8682",
                textDecoration:"none",
                display:"inline-block",
                width:"28vw",
            }
            var teleStyle = {
            	fontSize:"2.5vw",
                color:"rgb(225,96,67)",
                marginTop:"10px",

            }
            var likeStyle = {
            	position:"absolute",
            	top:"3vw",
            	right:0,
            	background:"#fff",
            	marginRight:"2vw"

            }
            if(this.props.likeOrNot == 1){
            	var likeButton = (()=>{
            		return <Button style={likeStyle} onClick={this.cancelLike}><i className="fa fa-heart"></i> 已收藏</Button>
            	})();
            }else{
            	var likeButton = (()=>{
            		return <Button style={likeStyle} onClick={this.beLike}><i className="fa fa-heart-o"></i> 收藏</Button>
            	})();
            }
            
            return(
	            <div style={infolistStyle}>
	               <p style={priceStyle}>{this.props.house.rent}<span style={{fontSize:"1.2vw"}}>元/月</span></p>
	               <p style={spanpStyle}><span style={tagTitlegreenStyle}>面积</span><span style={tagContentgreenStyle}>{this.props.house.square}</span><span style={tagContentyellowStyle}>{this.props.house.orientation}</span></p>
	            	<p style={spanpStyle}><span style={tagTitleyellowStyle}>房型</span><span style={tagContentyellowStyle}>{this.props.house.houseType}  {this.props.house.leasingMethod}</span></p>
	            	<p style={spanpStyle}><span style={tagTitleredStyle}>楼层</span><span style={tagContentredStyle}>{this.props.house.floor}</span></p>
	            	<p style={spanpStyle}><span style={tagTitlegreenStyle}>位置</span><span style={tagContentgreenStyle}>{this.props.house.urbanDistrict}  {this.props.house.communityName}</span></p>
	            	<div style={contactStyle}>
	            		<p style={teleStyle}><i className="fa fa-phone-square"></i> {this.props.house.phone}</p>
	            		<p style={linkpStyle}><i className="fa fa-clock-o"></i> {this.props.house.createTime}</p>
	            		<p style={linkpStyle}><a style={linkaStyle} href={this.props.house.url} target="view_window"><i className="fa fa-share-alt"></i> {this.props.house.url}</a></p>
	            	</div>
	            	{likeButton}
	            </div>
            )
        }
    };
module.exports = InfoList;