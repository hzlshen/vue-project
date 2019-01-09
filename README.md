
#基于vue-cli构建的财务后台管理系统(`vue2`+`vuex`+`axios`+`vue-router`+`element-ui`+`echarts`+`websocket`+`vue-i18n`)

## 注意：当前代码为vue-cli2.0搭建的程序


-------

###安装

项目地址：（`git clone`）

```shell
git clone https://github.com/hzlshen/vue-project.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

启动服务(http://localhost:8080)

```
npm run dev
```

发布代码
```
npm run build
```

###开发

###目录结构
<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── axios          // ajax url 放置
│   ├── components     // 各种组件
│   ├── images         // 图片文件夹
│   ├── i18n           // 国际化文件夹
│   ├── page           // 各种页面
│   ├── router         // 页面路由
│   ├── store          // vuex状态管理器
│   ├── style          // 样式文件
│   └── main.js        // Webpack 预编译入口
</pre>

<br/>
###项目截图
<br/>
![](https://github.com/hzlshen/Imgage_box/blob/master/vue-project1.png)

![](https://github.com/hzlshen/Imgage_box/blob/master/vue-project2.png)
