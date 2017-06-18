import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route, 
        } from "react-router-dom";
import createHistory from 'history/createHashHistory'
const history = createHistory();
class Search extends React.Component{
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            if(props.content){
                if(props.content!='all'){
                    this.state = {searchContent:props.content,};
                }else{
                    this.state = {searchContent:"",};
                }  
            }else{
                this.state = {searchContent:"",};
            }
        }
        handleChange(e){
             this.setState({searchContent:e.target.value})   
        }
        handleSubmit(e){
            e.preventDefault();
            var searchContent = this.state.searchContent;
            if(this.state.searchContent==""){
                //return false;
                searchContent = "all";
            }
            history.push({
              pathname: "/"+this.props.area+'/list/search/'+searchContent,
              state: { searchContent: this.state.searchContent,area:this.props.area }
            })
            if(this.props.changeSearch){
                this.props.changeSearch(searchContent);
            }
        }
        componentDidMount(){
            document.getElementById("search").value = this.state.searchContent;
        }
        render(){
        	var searchStyle = {
        		width:"100%",
                height:"6vw",
                paddingTop:"1vw",
                paddingBottom:"1vw",
                boxSizing:"border-box",
        	}
            var inputStyle={
                height:"4vw",
                outline:"none",
                borderTop:"1px solid grey",
                borderLeft:"1px solid grey",
                borderBottom:"1px solid grey",
                borderRight:"none",
                float:"left",
                width:"55vw",
                boxSizing:"border-box",
                paddingLeft:"15px",
                fontSize:"1.2vw"
            }
            var buttonStyle={
                height:"4vw",
                float:"left",
                border:"none",
                background: "rgba(70,160,115,1)",
                color:"#fff",
                width:"10vw",
                boxSizing:"border-box",
                fontSize:"1.2vw"
            }
            var spanStyle={
                height:"4vw",
                lineHeight: "4vw",
                float:"left",
                boxSizing:"border-box"
            }
            return(
	            <div style={searchStyle}>
                <form onSubmit={this.handleSubmit}>
	              <span style={spanStyle}>
                    <input onChange={this.handleChange} id="search" style={inputStyle}
                    placeholder="请输入区域、商圈或小区名开始找房" />
                  </span>
                  <span style={spanStyle}>
                    <button type="submit" style={buttonStyle}>搜索</button>
                  </span>
                </form>
	            </div>
            )
        }
    };
module.exports = Search;