import React from "react";
import { BrowserRouter ,Link,HashRouter,
        Route,NavLink
        } from "react-router-dom";
class Sorter extends React.Component{
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.state = {searchContent:props.content,area:props.area};    
        }
        handleClick(e){
            this.props.changeSorter(e.target.id);
        }
        render(){
        	var sorterStyle = {
        		background:"#fff",
                fontSize:"1.1vw",
                boxShadow:"0px 1px 3px grey",
                background:"rgb(251,251,251)",
        	}
            var linkStyle = {
                color:"#000",
                textDecoration:"none",
                paddingLeft:"1vw",
                paddingRight:"1vw",
                height:"3.5vw",
                lineHeight:"3.5vw",
                display:"inline-block",
                cursor:"pointer",
            }
            var linkAStyle = {
                color:"#000",
                textDecoration:"none",
                paddingLeft:"15px",
                paddingRight:"15px",
                height:"3.5vw",
                lineHeight:"3.5vw",
                display:"inline-block",
                background:"rgb(255,255,255)",
                borderLeft:"1px solid #EAEAEA",
                borderRight:"1px solid #EAEAEA",
                cursor:"pointer",
            }
            var sorters = {
                "默认":"normal","最新":"new","租金低":"price"
            }
            var sorteritems = [];
            for(var item in sorters){
                if(this.props.sorter==sorters[item]){
                    var sorteritem = <span  key={sorters[item]} id={sorters[item]}
                    style={linkAStyle} onClick={this.handleClick}>{item}</span>;
                }else{
                    var sorteritem = <span  key={sorters[item]} id={sorters[item]}
                    style={linkStyle} onClick={this.handleClick}>{item}</span>;
                }
                sorteritems.push(sorteritem);
            }
            return(
	            <div style={sorterStyle}>
                    {sorteritems}
                </div>
            )
        }
    };
module.exports = Sorter;