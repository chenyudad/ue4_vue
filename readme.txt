###安装npm及打包插件
npm install -g
npm install babel-cli browserify -g 
npm install babel-preset-es2015 --save-dev 

####打包
babel Scripts/src -d Scripts/lib
browserify Scripts/lib/app.js -o Scripts/dist/bundle.js
###初始化
git init
###添加到暂存区
git add .
###暂存区里的改动提交到本地的版本库
git commit -m 'first commit'
###关联远程库
git remote add origin https://github.com/chenyudad/vd-openapi.git
###提交到远程库master分支
git push  origin master
###提交到远程库main分支
git push origin main
###删除暂存区或分支上的文件, 但本地又需要使用, 只是不希望这个文件被版本控制
git rm -r --cached 目录名
###删除暂存区或分支上的文件,
git rm -rf 文件夹名

错误解决办法：
fatal: Unable to create 'xxxx/.git/index.lock': File exists.
del .git/index.lock


node.js  ---npm    java maven ;c# nuget
========================
webpack  手动搭建 vue.js
vue-cli  vue脚手架 （3.0以上忽略大量webpack的配置,支持更新）


npm config set prefix "d:\nodejs\node_global"
npm config set cache "d:\nodejs\node_cache"
npm config set registry="https://registry.npm.taobao.org"
npm config list
配置文件    .npmrc
npm info vue  查询vue信息
npm install vue -g       安装正式版本
npm install vue-lic -g   安装正式版本

vue 2.x版本创建项目，vue3.x版本改为vue create命令
vue init webpack my-project


环境变量
NODE_PATH  D:\nodejs\node_global\node_modules	 
path 	D:\nodejs\node_global

vue create vue03
npm uninstall -g vue-cli
npm i @vue/cli -g    安装新版本

spa   single page application
vue-router  路由     
VueX状态管理   
Vuex与全局变量的区别 
Vuex是响应式的
vue3.x以上使用 provide、inject 替代Vuex

eslint 语法 检查
unit tests 按空间切割，对每个组件 都进行测试
e2e test按时间事件，对每个流程进行测试 
yarn 和npm类似 ,需要配置全局环境变量

vue2.x版本命令
npm run build    参数 webpack-dev-server支持热更新  --progress运行进度条 
config/index.js     build: assetsPublicPath:'./'


vue3.x以上使用vue create xxx命令来创建项目  
安装 最新版本脚手架 
npm i @vue/cli -g 
vue create testopenapi 


npm i element-ui -S
npm install axios