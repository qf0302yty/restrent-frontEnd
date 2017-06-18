import React from "react";
import Banner from "./banner.js";
import InfoList from "./infolist.js";
import Map from './map.js';
class InfoDetail extends React.Component{
		constructor(props) {
            super(props);
        }
        // componentDidMount(){
        //     var locationPostition = this.props.house.locationPostition;
        //     var district = this.props.house.communityName;

        //     var map = new AMap.Map('map', {
        //         resizeEnable: true,
        //         zoom:15,
        //         center: locationPostition,
        //         mapStyle:'amap://styles/fresh'
        //     });
        //     var marker = new AMap.Marker({
        //         position: locationPostition
        //     });
        //     marker.setMap(map);

        //     var infowindow;
        //     var infoWindowContent = '<div class="info-title">高德地图</div><div class="info-content">' +
        //     '小区名称：'+district+'<br/>';

        //     map.plugin('AMap.AdvancedInfoWindow', function () {

        //       infowindow = new AMap.AdvancedInfoWindow({
        //         placeSearch: true,
        //         asOrigin: true,
        //         asDestination: true,
        //         content: infoWindowContent,
        //         offset: new AMap.Pixel(0, -30),
        //       });
        //       infowindow.open(map, locationPostition);

        //     });
        // }
        componentDidUpdate(){
            var locationPostition = this.props.house.locationPostition;
            var district = this.props.house.communityName;

            var map = new AMap.Map('map', {
                resizeEnable: true,
                zoom:15,
                center: locationPostition,
                mapStyle:'amap://styles/fresh'
            });
            var marker = new AMap.Marker({
                position: locationPostition
            });
            marker.setMap(map);

            var infowindow;
            var infoWindowContent = '<div class="info-title">高德地图</div><div class="info-content">' +
            '小区名称：'+district+'<br/>';

            map.plugin('AMap.AdvancedInfoWindow', function () {

              infowindow = new AMap.AdvancedInfoWindow({
                placeSearch: true,
                asOrigin: true,
                asDestination: true,
                content: infoWindowContent,
                offset: new AMap.Pixel(0, -30),
              });
              infowindow.open(map, locationPostition);

            });
        }
        render(){
        	var infodetailStyle = {
        		background:"#fff",
                fontSize:"1.1vw",
                boxShadow:"0px 0px 3px grey",
                position:"relative",

        	}
        	var titleStyle = {
        		color:"rgb(70,153,184)",
                fontSize:"2vw",
                textDecoration:"none",
                textOverflow : "ellipsis",
                width:"55vw",
        	}
        	var titleparentStyle = {
        		height:"6vw",
        		lineHeight:"6vw",
        		paddingLeft:"2vw",
        		borderBottom:"1px solid #EAEAEA"
        	}
        	var mapparentStyle = {
                paddingLeft:"2vw",
                paddingRight:"2vw",
                paddingTop:"2vw",
                paddingBottom:"3vw"

            }
            return(
	            <div style={infodetailStyle}>
	            	<div style={titleparentStyle}>
	            		<p style={titleStyle}>{this.props.house.title}</p> 
	            	</div>
	            	<div style={{borderBottom:"1px solid #EAEAEA"}}>
		               <Banner imgs={this.props.house.imgPath}/>
		               <InfoList house={this.props.house} username={this.props.username} urlbase={this.props.urlbase}
                       refreshDetail={this.props.refreshDetail} likeOrNot={this.props.likeOrNot}/>
		               <div style={{clear:"both"}}></div>
		            </div>
		            <div style={mapparentStyle}>
	                   <Map height="26vw"/>
	                </div>
	               <div style={{clear:"both"}}></div>
	            </div>
            )
        }
    };
module.exports = InfoDetail;