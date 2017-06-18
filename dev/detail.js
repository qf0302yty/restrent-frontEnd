import React from "react";
import InfoDetail from './infodetail.js';
import { CSSTransitionGroup } from 'react-transition-group';
class Detail extends React.Component{
		constructor(props) {
            super(props);
            this.refreshDetail = this.refreshDetail.bind(this);
            this.state = {
        		id:props.match.params.id,
                area:props.match.params.area,
        		house:
                {
        			_id:"1",
        			title:"加载中",
        			urbanDistrict:"",liked:"false",
        			phone:"加载中",locationPostition:['20.070467','99.529971'],
        			createTime:"加载中",square:"加载中",
        			url:"加载中",
        			houseType:"加载中",leasingMethod:"加载中",rent:"加载中",floor:"加载中",
        			communityName:"加载中",orientation:"加载中",
        			imgPath:['加载中']
        	    },
                likeOrNot:0,
            };    
        }
        componentWillReceiveProps(nextProps){
            // console.log(this.props.username);
            // console.log(nextProps.username);
            if(this.props.username!=""){
                if(nextProps.username==""){
                    this.setState({likeOrNot:0});
                }
            }
        }
        refreshDetail(){
            var username = this.props.username;
            //console.log(username);
            // if(username==undefined){
            //     username = "";
            // }
            $.ajax({
                type:'post',
                data: {'_id':this.state.id,'username':username},
                url:this.props.urlbase+'rentdata/getonedata'
            }).done(function(resp){
                if(resp.status == "success"){
                    this.setState({house:resp.data.roomInfo,likeOrNot:resp.data.likeOrNot});
                    this.props.login(username);
                    // console.log(resp.data.locationPostition)
                }else{
                    console.log("error");
                }
            }.bind(this));
            // this.setState({house:{
            //         _id:"1",
            //         title:"地铁站精装一房诚心出租",
            //         urbanDistrict:"福田",liked:"false",
            //         phone:"18846039285",locationPostition:['114.270467','22.329971'],
            //         createTime:"2017/6/4",square:"72平米",
            //         url:"http://zu.sh.fang.com/chuzu/1_54457855_-1.htm",
            //         houseType:"三室一厅",leasingMethod:"整租",rent:3000,floor:"中楼层(共12层)",
            //         communityName:"金怡华庭",orientation:"朝南",
            //         imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']
            //     }});
        }
        componentDidMount(){
            this.refreshDetail();
            scroll(0,0);
        }
        render(){
        	var detailStyle = {
        		background:"rgb(241,241,241)",
        		paddingTop:"5vw",
        		paddingLeft:"5vw",
        		paddingRight:"5vw",
        		
        	}
            return(
                <CSSTransitionGroup transitionName="list"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
    	            <div style={detailStyle}>
    	              <InfoDetail house={this.state.house} username={this.props.username}
                      refreshDetail={this.refreshDetail} likeOrNot={this.state.likeOrNot} urlbase={this.props.urlbase}/>
    	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = Detail;