import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import createHistory from 'history/createHashHistory'
const history = createHistory();
class LogForm extends React.Component{
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
        	this.onInputClickU = this.onInputClickU.bind(this);
            this.onInputClickP = this.onInputClickP.bind(this);
            this.onUserNameBlur = this.onUserNameBlur.bind(this);
            this.onPasswordBlur = this.onPasswordBlur.bind(this);
        }
        handleSubmit(e){
            e.preventDefault();

            if(document.getElementById('username').value==''){
            	document.getElementById('errmsgusr').innerHTML = "用户名不能为空";
            	document.getElementById('errmsgusr').style.display = "block";
            	return false;
            }
            if(document.getElementById('password').value==''){
            	document.getElementById('errmsgpass').innerHTML = "密码不能为空";
            	document.getElementById('errmsgpass').style.display = "block";
            	return false;
            }
            var password = md5(document.getElementById('password').value);
            var username = document.getElementById('username').value;
            $.ajax({
                  type:'post',
                  url:this.props.urlbase+'userinfo/signIn',
                  data:{username:username,password:password}
              }).done(function(resp){
                  if(resp.status == "success"){
                      if(resp.data.count==1){
                          this.props.login(resp.data.username); 
                          history.go(-1);  
                      }else{
                          document.getElementById('errmsgpass').innerHTML = "用户名或密码错误";
                          document.getElementById('errmsgpass').style.display = "block";
                      }
                  }
              }.bind(this))          
        }
        onInputClickU(e){     	
        	document.getElementById('errmsgusr').style.display = "none"; 	
        }
        onInputClickP(e){          
            document.getElementById('errmsgpass').style.display = "none"; 
        }
        onUserNameBlur(e){
            if(e.target.value==''){
                document.getElementById('errmsgusr').innerHTML = "用户名不能为空";
                document.getElementById('errmsgusr').style.display = "block";
                return false;
            }
        }
        onPasswordBlur(e){
            if(e.target.value==''){
                document.getElementById('errmsgpass').innerHTML = "密码不能为空";
                document.getElementById('errmsgpass').style.display = "block";
                return false;
            }
        }
        render(){
        	var logformStyle = {
        		background:"rgb(243,243,243)",
                borderRadius:"5px",
                width:"33vw",
                margin:"auto",
                height:"25vw",
        	}
            var formStyle = {
                width:"80%",
                margin:"auto",
                paddingTop:"3vw",
            }
            var titleStyle = {
                fontSize:"1.5vw",

            }
            var inputStyle = {
                height:"3vw",
                outline:"none",
                border:"none",
                width:"100%",
                marginTop:"1vw",
                fontSize:"1.2vw",
                paddingLeft:"15px",
            }
            var buttonStyle = {
                height:"3vw",
                float:"left",
                border:"none",
                background: "rgba(70,160,115,1)",
                color:"#fff",
                width:"100%",
                marginTop:"2vw",
                fontSize:"1.2vw"
            }
            var errorMsgStyle = {
            	color:"rgb(230,70,70)",
            	fontSize:"1vw",
            	marginTop:"0.5vw",
            	marginBottom:"-0.5vw",
            	display:"none",
            }
            return(
	            <div style={logformStyle}>
	               <form style={formStyle} onSubmit={this.handleSubmit}>
                    <p style={titleStyle}>用户登录</p>
                    <input type="text" placeholder="请输入用户名" style={inputStyle} id="username" 
                    onClick={this.onInputClickU} onBlur={this.onUserNameBlur}/>
                    <p style={errorMsgStyle} id="errmsgusr">错误信息</p>
                    <input type="password" placeholder="请输入密码" style={inputStyle} id="password" 
                    onClick={this.onInputClickP} onBlur={this.onPasswordBlur}/>
                    <p style={errorMsgStyle} id="errmsgpass">错误信息</p>
                    <button style={buttonStyle} type="submit">立即登录</button>
                  </form>
	            </div>
            )
        }
    };
module.exports = LogForm;