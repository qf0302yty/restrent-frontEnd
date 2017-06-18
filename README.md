# restrent-frontEnd
一个基于rest的租房信息聚合应用——前端部分
这是一个租房信息聚合平台，从安居客、链家、房天下三个信息门户获取房源，在本应用上同一展示，并附带原房源链接。这里是其前端部分代码，由本人完成。服务端由shanhq96完成，具体服务端项目连接将在下方附上

应用使用rest架构编写，前端使用react+react-router以spa的形式完成。通过ajax和rest接口向服务端完成数据对接。具体信息通过爬虫服务进行获取。


react组件及相关依赖使用webpack打包，实际应用环境只引用打包后的文件bundle.js

其它引用的内容还包括：jquery，react-bootstrap，font-awesome，blueimp-md5，referrer-killer 在使用时为了适应样式，对referrer-killer进行了些许的改动，还请作者谅解

应用中还调用了高德地图的api，进行地理信息上的展示。

友情链接：本项目rest服务端后台及爬虫相关服务代码：https://github.com/shanhq96/restrent 


还要感谢以下项目的作者：

react-bootstrap：https://github.com/react-bootstrap/react-bootstrap

referrer-killer: https://github.com/jpgerek/referrer-killer

blueimp-md5: https://github.com/blueimp/JavaScript-MD5

