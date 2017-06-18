import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,
        } from "react-router-dom";
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import createHistory from 'history/createHashHistory'
const history = createHistory();
class Signform extends React.Component{
        constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onInputClickU = this.onInputClickU.bind(this);
            this.onInputClickP = this.onInputClickP.bind(this);
            this.onInputClickR = this.onInputClickR.bind(this);
            this.onUserNameBlur = this.onUserNameBlur.bind(this);
            this.onPasswordBlur = this.onPasswordBlur.bind(this);
            this.onRepasswordBlur = this.onRepasswordBlur.bind(this);
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
            if(document.getElementById('repassword').value==''){
                document.getElementById('errmsgrepass').innerHTML = "重复密码不能为空";
                document.getElementById('errmsgrepass').style.display = "block";
                return false;
            }
            if(document.getElementById('repassword').value!=document.getElementById('password').value){
                document.getElementById('errmsgrepass').innerHTML = "两次输入密码不一致";
                document.getElementById('errmsgrepass').style.display = "block";
                return false;
            }
            this.props.signin(document.getElementById('username').value,md5(document.getElementById('password').value));
            history.goBack();
        }
        onInputClickU(e){        
            document.getElementById('errmsgusr').style.display = "none";    
        }
        onInputClickP(e){            
            document.getElementById('errmsgpass').style.display = "none"; 
        }
        onInputClickR(e){        
            document.getElementById('errmsgrepass').style.display = "none"; 
        }
        onUserNameBlur(e){
            var username = e.target.value;
            if(username==''){
                document.getElementById('errmsgusr').innerHTML = "用户名不能为空";
                document.getElementById('errmsgusr').style.display = "block";
                return false;
            }

            var re = /^[a-zA-z]\w{3,15}$/;
            if(re.test(username)){
                
            }else{
                document.getElementById('errmsgusr').innerHTML = "用户名必须仅包括字母/数字/下划线,以字母开头,4-16位";
                document.getElementById('errmsgusr').style.display = "block";
                return false;
            }
            $.ajax({
                  type:'post',
                  url:this.props.urlbase+'userinfo/validUsername',
                  data:{username:username}
              }).done(function(resp){
                  if(resp.status == "success"){
                      if(resp.data>0){
                        document.getElementById('errmsgusr').innerHTML = "用户名已存在";
                        document.getElementById('errmsgusr').style.display = "block";
                      }
                  }
              }.bind(this))
        }
        onPasswordBlur(e){
            var password = e.target.value;
            if(password==''){
                document.getElementById('errmsgpass').innerHTML = "密码不能为空";
                document.getElementById('errmsgpass').style.display = "block";
                return false;
            }
            var patrn=/^(\w){6,20}$/; 
            if (!patrn.exec(password)){
                document.getElementById('errmsgpass').innerHTML = "密码必须仅包括字母/数字/下划线,6-20位";
                document.getElementById('errmsgpass').style.display = "block";
                return false;
            }else{
                
            }

        }
        onRepasswordBlur(e){
            if(document.getElementById('repassword').value==''){
                document.getElementById('errmsgrepass').innerHTML = "重复密码不能为空";
                document.getElementById('errmsgrepass').style.display = "block";
                return false;
            }
            if(document.getElementById('repassword').value!=document.getElementById('password').value){
                document.getElementById('errmsgrepass').innerHTML = "两次输入密码不一致";
                document.getElementById('errmsgrepass').style.display = "block";
                return false;
            }
        }
        render(){
        	var logformStyle = {
        		background:"rgb(243,243,243)",
                borderRadius:"5px",
                width:"33vw",
                margin:"auto",
                height:"28vw",
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
                    <p style={titleStyle}>用户注册</p>
                    <input type="text" placeholder="请输入用户名" style={inputStyle} id="username" 
                    onClick={this.onInputClickU} onBlur={this.onUserNameBlur}/>
                    <p style={errorMsgStyle} id="errmsgusr" >错误信息</p>
                    <input type="password" placeholder="请输入密码" style={inputStyle} id="password" 
                    onClick={this.onInputClickP} onBlur={this.onPasswordBlur}/>
                    <p style={errorMsgStyle} id="errmsgpass">错误信息</p>
                    <input type="password" placeholder="请确认密码" style={inputStyle} id="repassword" 
                    onClick={this.onInputClickR} onBlur={this.onRepasswordBlur}/>
                    <p style={errorMsgStyle} id="errmsgrepass">错误信息</p>
                    <button style={buttonStyle} type="submit">立即注册</button>
                  </form>
	            </div>
            )
        }
    };
module.exports = Signform;