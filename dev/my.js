import React from "react";
import HouseList from './houselist.js';
import MyTitle from './mytitle.js';
import ProgressBar from './progress.js';
import { CSSTransitionGroup } from 'react-transition-group';
import createHistory from 'history/createHashHistory'
const history = createHistory();
class My extends React.Component{
        constructor(props) {
            super(props);
            this.switchPage = this.switchPage.bind(this);
            this.refreshList = this.refreshList.bind(this);
            this.state = {
                area:props.areanow,
                pagenow:1,
                pagenum:10,
                houses:[
                    // {_id:"1",title:"无中介 近地铁站 温馨卧室 独立卫浴 家具齐全 押一付一",urbanDistrict:"福田",locationPostition:['114.070467','22.529971'],houseType:"三室一厅",leasingMethod:"整租",rent:3000,floor:"中楼层(共12层)",communityName:"花家地小区",orientation:"朝南",
                    // imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
                    // {_id:"2",title:"地铁站精装一房诚心出租",urbanDistrict:"福田",houseType:"三室一厅",leasingMethod:"整租",locationPostition:['114.148249','22.701315'],rent:3000,floor:"中楼层(共6层)",communityName:"金怡华庭",orientation:"朝南",
                    // imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
                    // {_id:"1",title:"直租��80－90之选��上班族��大学生��恩爱情侣��独立厨卫?",urbanDistrict:"福田",locationPostition:[114.080467,22.429971],houseType:"三室一厅",leasingMethod:"整租",rent:3000,floor:"中楼层(共12层)",communityName:"花家地小区",orientation:"朝南",
                    // imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
                    // {_id:"2",title:"地铁站精装一房诚心出租",urbanDistrict:"福田",houseType:"三室一厅",leasingMethod:"整租",locationPostition:[114.108249,22.601315],rent:3000,floor:"中楼层(共6层)",communityName:"金怡华庭",orientation:"朝南",
                    // imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
                ],
                progressnow:15,
            };    
        }
        refreshList(){
            $("#list").hide();
            $("#progress").show();
            var progressnow = this.state.progressnow;
            var that = this;
            var inter = window.setInterval(function(){
                progressnow = progressnow+25;
                if(progressnow>100){
                    progressnow = 100;
                }
                that.setState({progressnow:progressnow+25});
            },50);
            $.ajax({
                type:'post',
                data: {'username':this.props.username,"pages":this.state.pagenow-1},
                url:this.props.urlbase+'userinfo/getTheInterests'
            }).done(function(resp){
                if(resp.status == "success"){
                    var that = this;
                    this.setState({houses:resp.data,pagenum:resp.pageTotal},function(){
                        setTimeout(function () {
                        window.clearInterval(inter);
                        that.setState({progressnow:15});
                        $("#list").show();
                        $("#progress").hide();
                        }, 250);
                    });
                }else{
                    console.log("error");
                    setTimeout(function () {
                       window.clearInterval(inter);
                       that.setState({progressnow:15});
                    $("#list").show();
                    $("#progress").hide();}, 250);
                }
            }.bind(this)).fail(function(){
                setTimeout(function () {
                window.clearInterval(inter);
                }, 500);
            });
        }
        componentDidMount(){
            this.refreshList();
            scroll(0,0);
        }
        switchPage(newpageNow){
            this.setState({pagenow:newpageNow},function(){
                history.push({
                  pathname: "/"+this.state.area+'/my/p'+this.state.pagenow,
                });
                this.refreshList();
                scroll(0,0);
            });   
        }
        render(){
            var myStyle = {
        		width:"100%",
        		paddingTop:"5vw",
        		minHeight:window.screen.availHeight*0.9,
        		background:"rgb(241,241,241)",
        	}
        	var hlStyle = {
        		background:"rgb(241,241,241)",
        		paddingLeft:"5vw",
        		paddingRight:"5vw",
        		paddingBottom:"3vw",
        	}
            var hlStyle2 = {
                background:"rgb(241,241,241)",
                paddingLeft:"5vw",
                paddingRight:"5vw",
                paddingBottom:"3vw",
                marginTop:"-3vw",
                display:"none"
            }
            return(
                <CSSTransitionGroup transitionName="list"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
    	            <div style={myStyle}>
    	            	
    	                <div style={hlStyle} >
    	                	<MyTitle/>
                            <div id="list">
        			        	<HouseList areanow={this.state.area} pagenow={this.state.pagenow} 
                                switchPage={this.switchPage} houses={this.state.houses} username={this.props.username}/>
    			            </div>
                        </div>
                        <div style={hlStyle2} id="progress">
                            <ProgressBar now={this.state.progressnow}/>
                        </div>
    	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = My;