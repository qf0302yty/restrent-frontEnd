import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import { DropdownButton,MenuItem } from 'react-bootstrap';
class UserFunc extends React.Component{
        constructor(props){
           super(props);
           this.handleClick = this.handleClick.bind(this);
        }
        handleClick(key,e){
            // if(key==2){
                this.props.clearLog();
            // }
        }
        render(){
        	var ufStyle = {
        		float:"right",
                fontSize:"1vw",
                marginRight:"2vw",
        	}
            var linkStyle = {
                color:"#fff",
                textDecoration:"none"
            }
            var dropDownStyle = {
                background:"rgba(70,160,115,1)",
                height:"3.8vw",
                border:"none",
                boxShadow:"none",
                color:"#Fff",
                textShadow:"none"
            }
            if(this.props.username==""){
                var area = this.props.area;
                var content = (function(){
                    return <span><i className="fa fa-user-circle-o"></i>&nbsp;&nbsp;<Link to={'/'+area+"/login"} style={linkStyle}>登录</Link>  <Link to={'/'+area+"/signin"} style={linkStyle}>注册</Link>&nbsp;&nbsp;&nbsp;</span>;
                })();
            }else{
                var username = this.props.username;
                var handleClick = this.handleClick;
                var area = this.props.area;
                var content = (function(){
                    return(
                        <DropdownButton title={"欢迎, "+username} id="bg-nested-dropdown" style={dropDownStyle}>
                          <MenuItem eventKey="1"><Link to={'/'+area+"/my"} style={{color:"#000",textDecoration:"none"}}><i className="fa fa-heart"></i> 我的收藏</Link></MenuItem>
                          <MenuItem eventKey="2" onClick={handleClick}><i className="fa fa-sign-out"></i> 退出登录</MenuItem>
                        </DropdownButton>
                    );
                })();
            }
            return(
	            <div style={ufStyle}>
	                {content}
	            </div>
            )
        }
    };
module.exports = UserFunc;