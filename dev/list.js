import React from "react";
import Search from './search.js';
import HouseList from './houselist.js';
import Filter from './filter.js';
import Sorter from './sorter.js';
import ProgressBar from './progress.js';
import { CSSTransitionGroup } from 'react-transition-group';
import createHistory from 'history/createHashHistory';

const history = createHistory();
class List extends React.Component{
		constructor(props) {
            super(props);
            this.changeFilter = this.changeFilter.bind(this);
            this.changeSorter = this.changeSorter.bind(this);
            this.switchPage = this.switchPage.bind(this);
            this.changeSearch = this.changeSearch.bind(this);
            this.refreshList = this.refreshList.bind(this);
            this.state = {
        		searchContent:props.match.params.content,
	        	area:props.match.params.area,
                filters:{
                    areas:"",
                    types:"",
                    shapes:"",
                    squares:"",
                    prices:""
                },
                sorter:"normal",
                pagenow:1,
                pagenum:1,
                filterOrigins:{
                    bj :{content:{
                     "全部":"","东城":"dongcheng","西城":"xicheng","朝阳":"chaoyang","海淀":"haidian","丰台":"fengtai","通州":"tongzhou","石景山":"shijingshan","昌平":"changping","大兴":"daxing","顺义":"shunyi","房山":"fangshan","门头沟":"mentougou","平谷":"pinggu","怀柔":"huairou","密云":"miyun","延庆":"yanqing","北京周边":"beijingzhoubian"
                    },type:"areas"},
                    sz :{content:{
                     "全部":"","龙岗":"longgang","南山":"nanshan","福田":"futian","宝安":"baoan","罗湖":"luohu","坪山":"pingshan","盐田":"yantian","光明新区":"guangmingxinqu","大鹏新区":"dapengxinqu","深圳周边":"shenzhenzhoubian"
                    },type:"areas"},
                    sh :{content:{
                     "全部":"","浦东":"pudong","闵行":"minhang","徐汇":"xuhui","宝山":"baoshan","松江":"songjiang","嘉定":"jiading","普陀":"putuo","杨浦":"yangpu","长宁":"changning","虹口":"hongkou","静安":"jingan","黄浦":"huangpu","闸北":"zhabei","奉贤":"fengxian","青浦":"qingpu","金山":"jinshan","崇明":"chongming","上海周边":"shanghaizhoubian"
                    },type:"areas"},
                    gz :{content:{
                     "全部":"","白云":"baiyun","海珠":"haizhu","天河":"tianhe","番禺":"panyu","越秀":"yuexiu","花都":"huadu","增城":"zengcheng","荔湾":"liwan","南沙":"nansha","黄埔":"huangpu","从化":"conghua","广州周边":"guangzhouzhoubian"
                    },type:"areas"},
                    types :{content:{
                        "全部":"","整租":"t1","合租":"t2"
                        },type:"types"
                    },
                    shapes :{content:{
                        "全部":"","一室":"r1","两室":"r2","三室":"r3","四室":"r4","四室以上":"r5"},type:"shapes"
                    },
                    squares :{content:{
                        "全部":"","30平以下":"s1","30到50":"s2","50到70":"s3","70到90":"s4","90到120":"s5","120以上":"s6"},type:"squares"
                    },
                    prices :{content:{
                        "全部":"","1500以下":"p1","1500到2500":"p2","2500到3500":"p3","3500到5000":"p4","5000以上":"p5"},type:"prices"
                    },
                },
                houses:[
                    // {_id:"1",title:"加载中",urbanDistrict:"加载中",locationPostition:['20','99.529971'],houseType:"加载中",leasingMethod:"加载中",rent:"加载中",floor:"加载中",communityName:"加载中",orientation:"加载中",
                    // imgPath:['加载中']},
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
            var areafilterOrigins = this.state.filterOrigins[this.state.area].content;
            for(var areafilterOrigin in areafilterOrigins){
                if(this.state.filters.areas==areafilterOrigins[areafilterOrigin]){
                    var areapara = areafilterOrigin;
                }
            }
            var typefilterOrigins = this.state.filterOrigins.types.content;
            for(var typefilterOrigin in typefilterOrigins){
                if(this.state.filters.types==typefilterOrigins[typefilterOrigin]){
                    var typepara = typefilterOrigin;
                }
            }
            // var shapefilterOrigins = this.state.filterOrigins.shapes.content;
            // for(var shapefilterOrigin in shapefilterOrigins){
            //     if(this.state.filters.shapes==shapefilterOrigins[shapefilterOrigin]){
            //         var shapepara = shapefilterOrigin;
            //     }
            // }
            var shapepara = this.state.filters.shapes.replace(/[^0-9]/ig,"");
            if(shapepara==""){
               shapepara = "0";  
            }
            shapepara = parseInt(shapepara);
            var squarepara = this.state.filters.squares.replace(/[^0-9]/ig,"");
            if(squarepara==""){
               squarepara = "0";  
            }
            var pricepara = this.state.filters.prices.replace(/[^0-9]/ig,"");
            if(pricepara==""){
               pricepara = "0";  
            }

            //console.log(squarepara);
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
                data: {
                        'cityShortName':this.state.area,
                        'urbanDistrict':areapara,
                        "leasingMethod":typepara,
                        "bedroomNum":shapepara,
                        "square":squarepara,
                        "rent":pricepara,
                        "sorters":this.state.sorter,
                        "title":this.state.searchContent,
                        "pages":this.state.pagenow-1,},
                url:this.props.urlbase+'rentdata/getdata'
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
                    // console.log(resp.data);
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
            
            // this.setState({houses:[
            //     {_id:"1",title:"无中介 近地铁站 温馨卧室 独立卫浴 家具齐全 押一付一",urbanDistrict:"福田",locationPostition:['114.070467','22.529971'],houseType:"三室一厅",leasingMethod:"整租",rent:3000,floor:"中楼层(共12层)",communityName:"花家地小区",orientation:"朝南",
            //         imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
            //         {_id:"2",title:"地铁站精装一房诚心出租",urbanDistrict:"福田",houseType:"三室一厅",leasingMethod:"整租",locationPostition:['114.148249','22.701315'],rent:3000,floor:"中楼层(共6层)",communityName:"金怡华庭",orientation:"朝南",
            //         imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
            //         {_id:"1",title:"直租��80－90之选��上班族��大学生��恩爱情侣��独立厨卫?",urbanDistrict:"福田",locationPostition:[20.070467,'99.529971'],houseType:"三室一厅",leasingMethod:"整租",rent:3000,floor:"中楼层(共12层)",communityName:"花家地小区",orientation:"朝南",
            //         imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
            //         {_id:"2",title:"地铁站精装一房诚心出租",urbanDistrict:"福田",houseType:"三室一厅",leasingMethod:"整租",locationPostition:[114.108249,22.601315],rent:3000,floor:"中楼层(共6层)",communityName:"金怡华庭",orientation:"朝南",
            //         imgPath:['https://pic1.ajkimg.com/display/hj/54a2914f7611af84749d181a96027127/600x450.jpg?t=1','https://pic1.ajkimg.com/display/hj/a2eb64e4dae8383a451deddab67a109a/600x450.jpg?t=1','http://img11.soufunimg.com/viewimage/rent/2017_06/03/M1A/06/11/ChCE4lkyv72IMUFjAATX4mX0eOsAAfGIALg-N8ABNf6676/722x542.png']},
            //         ]
            // })
        }
        changeFilter(filterType,filterContent){
            var filtersnow = this.state.filters;
            filtersnow[filterType] = filterContent;
            this.setState({filters:filtersnow},function(){
                var filterString = "";
                for(var item in this.state.filters){
                    filterString += this.state.filters[item];
                }
                if(filterString!=""){
                    filterString += "-";
                }
                filterString += this.state.sorter;
                filterString += "-p"+this.state.pagenow;
                history.push({
                  pathname: "/"+this.state.area+'/list/search/'+this.state.searchContent+'/'+filterString,
                })
                this.refreshList();
            });
            
        }
        changeSorter(newsorter){
            this.setState({sorter:newsorter},function(){
                var filterString = "";
                for(var item in this.state.filters){
                    filterString += this.state.filters[item];
                }
                if(filterString!=""){
                    filterString += "-";
                }
                filterString += this.state.sorter;
                filterString += "-p"+this.state.pagenow;
                history.push({
                  pathname: "/"+this.state.area+'/list/search/'+this.state.searchContent+'/'+filterString,
                })
                this.refreshList();
            });
            
        }
        switchPage(newpageNow){
            this.setState({pagenow:newpageNow},function(){
                var filterString = "";
                for(var item in this.state.filters){
                    filterString += this.state.filters[item];
                }
                if(filterString!=""){
                    filterString += "-";
                }
                filterString += this.state.sorter;
                filterString += "-p"+this.state.pagenow;
                history.push({
                  pathname: "/"+this.state.area+'/list/search/'+this.state.searchContent+'/'+filterString,
                });
                this.refreshList();
                scroll(0,0);
            });   
            
        }
        changeSearch(searchContentnow){
            this.setState({searchContent:searchContentnow},function(){
                this.refreshList();
            })
        }
        componentDidMount(){
            this.refreshList();
            scroll(0,0);
        }
        render(){
        	var searchStyle = {
        		background:"#fff",
        		paddingTop:"4vw",
        		paddingLeft:"5vw",
        		borderBottom:"1px solid #EAEAEA",
        	}
        	var filterStyle = {
        		background:"rgb(241,241,241)",
        		paddingTop:"1vw",
        		paddingLeft:"5vw",
        		paddingRight:"5vw",
        		
        	}
        	var sorterStyle = {
        		background:"rgb(241,241,241)",
        		paddingLeft:"5vw",
        		paddingRight:"5vw",
        		paddingBottom:"1vw",
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
                display:"none"
            }
            return(
                <CSSTransitionGroup transitionName="list"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
                	<div style={{minHeight:window.screen.availHeight*0.9,}}>
    		            <div style={searchStyle} >
    		              <Search content={this.state.searchContent} area={this.state.area} changeSearch={this.changeSearch}/>
    		            </div>
    		            <div style={filterStyle}>
    		            	<Filter content={this.state.searchContent} area={this.state.area} 
                            changeFilter={this.changeFilter} filters={this.state.filters} filterOrigins={this.state.filterOrigins}/>
    		            </div>
    		            <div style={sorterStyle}>
    			        	<Sorter content={this.state.searchContent} area={this.state.area}
                            changeSorter={this.changeSorter} sorter={this.state.sorter}/>
    			        </div>
    			        <div style={hlStyle} id="list">
    			        	<HouseList areanow={this.state.area} pagenow={this.state.pagenow} username={this.props.username}
                            pagenum={this.state.pagenum} switchPage={this.switchPage} houses={this.state.houses}/>
    			        </div>
                        <div style={hlStyle2} id="progress">
                            <ProgressBar now={this.state.progressnow}/>
                        </div>
    	            </div>
                </CSSTransitionGroup>
            )
        }
    };
module.exports = List;