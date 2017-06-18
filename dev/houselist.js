import React from "react";
import HouseListItem from './houselistitem.js';
import ToTopButton from './totopbutton.js';
import Map from './map.js';
import EmptyList from './emptylist.js';
import {Pagination} from 'react-bootstrap';
class HouseList extends React.Component{
		constructor(props) {
            super(props);
            this.handleMapHover = this.handleMapHover.bind(this);
            this.handleMapOut = this.handleMapOut.bind(this);
            this.handleSelect = this.handleSelect.bind(this);
            this.state = {area:props.areanow,
            markers:[]};
            this.markers = [];
            this.map = "";
        }
        handleMapHover(e){
            var marker = this.markers[e.target.id];
            marker.setAnimation('AMAP_ANIMATION_BOUNCE');
            marker.setIconStyle('orange');
            this.map.setCenter(this.props.houses[e.target.id].locationPostition);
        }
        handleMapOut(e){
            var marker = this.markers[e.target.id];
            marker.setAnimation('AMAP_ANIMATION_NONE');
            marker.setIconStyle('blue');
        }
        handleSelect(eventKey){
            this.props.switchPage(eventKey);
        }
        componentDidMount(){
            var map = new AMap.Map('map', {
                resizeEnable: true,
                zoom:10,
                // center: this.props.houses[0].locationPostition,
                mapStyle:'amap://styles/fresh'
            });
            // var houses = this.props.houses;
            // var markers = this.state.markers;
            // AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
            //     for(var x in houses){    
            //         var marker = new SimpleMarker({
            //             //前景文字
            //              iconLabel: {
            //                 innerHTML:parseInt(x)+1,
            //                 style: {
            //                     color: "#fff"
            //                 }
            //             },
            //             //背景图标样式
            //             iconStyle: 'blue',
            //             //...其他Marker选项...，不包括content
            //             map: map,
            //             position: houses[x].locationPostition,
            //         });
            //         markers.push(marker);
                    
            //     }
            // });
            // this.setState({
            //     markers:markers,
            //     map:map,
            // });
            this.map = map;
            var maptop = $("#mapparent").offset().top;
            $(window).scroll(function(){
                if($(this).scrollTop()>maptop){
                    $("#mapparent").css({"position":"fixed","top":"4vw",left:"65vw"});
                }else{
                    $("#mapparent").css({"position":"absolute","top":0,left:"60vw"});
                }
            })
        }
        componentDidUpdate(){
            var map = this.map;
            var houses = this.props.houses;
            var markers = [];
            var marker;
            // var map = new AMap.Map('map', {
            //     resizeEnable: true,
            //     zoom:10,
            //     // center: houses[0].locationPostition,
            //     mapStyle:'amap://styles/fresh'
            // });
            if(houses.length>0){
                map.setCenter(houses[0].locationPostition);
            }
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                map.clearMap();
                for(var x in houses){    
                    marker = new SimpleMarker({
                        //前景文字
                         iconLabel: {
                            innerHTML:parseInt(x)+1,
                            style: {
                                color: "#fff"
                            }
                        },
                        //背景图标样式
                        iconStyle: 'blue',
                        //...其他Marker选项...，不包括content
                        map: map,
                        position: houses[x].locationPostition,
                    });
                    markers.push(marker);
                    
                }
            });
            // this.setState({
            //     markers:markers,
            //     map:map,
            // });
            this.markers = markers;
            this.map = map;
        }
        // shouldComponentUpdate(nextProps, nextState){
        //     return this.state.markers !== nextState.markers;
        // }
        render(){
            
        	var houselistStyle = {
        		background:"#fff",
                fontSize:"1.1vw",
                boxShadow:"0px 0px 3px grey",
                position:"relative",
                minHeight:"22vw"
        	}
            var mapparentStyle = {
                position:"absolute",
                width:"29vw",
                top:0,
                left:"60vw",
                boxSizing:"border-box",
                padding:"15px",
            }

            if(this.props.houses.length==0){
                var houses = (function(){
                    return <EmptyList></EmptyList>
                })();
                var map = (function(){
                    return <Map height="20vw" />
                })();
            }else{
                var houses = this.props.houses.map(function(item,index){
                    return <HouseListItem key={index} index={index+1} house={item} username={this.props.username}
                    handleHover={this.handleMapHover} handleOut={this.handleMapOut} areanow={this.state.area}/>
                }.bind(this));
                var map = (function(){
                    return <Map height="20vw"/>
                })();
            }
        	
            if(this.props.pagenum>1){
                var pageC = (
                    <div style={{width:"60vw",textAlign:"center"}}>
                          <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={this.props.pagenum}
                            maxButtons={5}
                            activePage={this.props.pagenow}
                            onSelect={this.handleSelect} />
                        </div>
                )
            }else{
                var pageC = "";
            }
            return(
                
    	            <div style={houselistStyle}>
    	                   {houses}
                      <div style={mapparentStyle} id="mapparent">
                        {map}
                      </div>
                        {pageC}
                        <ToTopButton/>
                    </div>
                      
                
            )
        }
    };
module.exports = HouseList;