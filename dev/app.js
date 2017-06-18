import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,Redirect,Switch,
        } from "react-router-dom";
import Home from './home.js';
import List from './list.js';
import Top from './top.js';
import Detail from './detail.js';
import LogIn from './login.js';
import SignIn from './signin.js';
import My from './my.js';
import Bottom from './bottom.js';
import createHistory from 'history/createHashHistory'
const history = createHistory();
class App extends React.Component{
        constructor(props){
           super(props);
           this.setHome = this.setHome.bind(this);
           this.clearLog = this.clearLog.bind(this);
           this.login = this.login.bind(this);
           this.signin = this.signin.bind(this);
           this.areamenuClick = this.areamenuClick.bind(this);
           this.changeArea = this.changeArea.bind(this);
           var username = localStorage.username;
           if(username==undefined){
                username = "";
            }
           this.state = {
              username:username,
              area:"bj",
              isHome:false,
              urlbase:"",
           }
        }
        setHome(now){
           this.setState({
              isHome:now,
          });
        }
        areamenuClick(e){
            if(e.target.id=="openareamenu"){
              $("#areamenu").toggle("500");
              return false;
            }else{
              document.getElementById("areamenu").style.display = "none";
              return false;
            }
        }
        clearLog(){
          this.setState({
              username:"",});
          localStorage.removeItem("username");
        }
        login(username){
              this.setState({
                  username:username,
              });
              localStorage.username = username;

        }
        signin(username,password){
          $.ajax({
              type:'post',
              url:this.state.urlbase+'userinfo/register',
              data:{username:username,password:password}
          }).done(function(resp){
              if(resp.status == "success"){
                  this.login(username,password);
              }
          }.bind(this))
        }
        changeArea(areanow){
          // var areas = {
          //       'bj':"北京",
          //       'sh':"上海",
          //       'gz':"广州",
          //       'sz':"深圳",
          //   }
          //   for (var item in areas){
          //       if(item == areanow){
          //           areanow = areas[item];
          //       }
          //   }
          this.setState({
              area:areanow,
          });
          
        }
        render(){
          return (
              <div onClick={this.areamenuClick}>
                <HashRouter>
                  <div id="content">
                        <Top userid = {this.state.userid} username = {this.state.username} isHome={this.state.isHome}
                        clearLog = {this.clearLog} area={this.state.area} changeArea={this.changeArea.bind(this)}/> 
                        <Switch>
                            <Route exact path="/:area" render={({ match }) => <Home areanow={this.state.area} setHome={this.setHome}/>}/>
                            <Route path="/:area/list/search/:content" render={({ match }) => <List match={match} username={this.state.username} urlbase={this.state.urlbase}/>}/>
                            <Route path="/:area/detail/:id" render={({ match }) => <Detail match={match} login={this.login} username={this.state.username} urlbase={this.state.urlbase}/>}/>
                            <Route path="/:area/login" render={({ match }) => <LogIn login={this.login} areanow={match.params.area} urlbase={this.state.urlbase}/>}/>
                            <Route path="/:area/signin" render={({ match }) => <SignIn signin={this.signin} areanow={this.state.area} urlbase={this.state.urlbase}/>}/>
                            <Route path="/:area/my" render={({ match }) => <My areanow={this.state.area} username={this.state.username} urlbase={this.state.urlbase}/>}/>
                            <Redirect from="/" to="/bj"/>
                        </Switch>
                  </div>
                </HashRouter>
                <Bottom/>
              </div>
            )
        }
    };
module.exports = App;