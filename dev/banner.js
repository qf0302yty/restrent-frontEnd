import React from "react";
import {Carousel} from 'react-bootstrap'
class Banner extends React.Component{
		constructor(props) {
            super(props);
        }
        componentDidUpdate(){
            this.props.imgs.map(function(item,index){
                document.getElementById('image_kill_referrer'+index).innerHTML = ReferrerKiller.imageHtml(item);
            }.bind(this));
        }
        render(){
        	var bannerStyle = {
                paddingLeft:"2vw",
                paddingRight:"2vw",
                paddingTop:"2vw",
                paddingTop:"2vw",
                width:"50vw",
                height:"37vw",
                boxSizing:"border-box",
                float:"left"
        	}
            //<img style={{width:"46vw",height:"33vw"}} alt="图片" src={item}/>
            var carouselItems = this.props.imgs.map(function(item,index){
                return(
                    <Carousel.Item key={index}>
                        <span id={"image_kill_referrer"+index} style={{width:"46vw",height:"33vw"}} className="image_kill_referrer"></span>
                    </Carousel.Item>
                )
            }.bind(this));
            return(
	            <div style={bannerStyle}>
	               <Carousel>
                     {carouselItems}
                  </Carousel>
	            </div>
            )
        }
    };
module.exports = Banner;