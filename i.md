theme: blue
transition: newspaper


[slide]
##Webpack简介
Webpack是一款用户打包前端模块的工具。主要是用来`打包`在浏览器端使用的javascript的。同时也能转换、捆绑、打包其他的静态资源，包括`css、image、font file、template`等，并且支持AMD/CMD  

[webpack官网](http://webpack.github.io)
[slide]
#Webpack的安装
- 初始化`package.json` {:&.moveIn}
- 安装webpack  

    ```
    //全局安装  
    npm install -g webpack
    ```
    ```
    //本地安装
    npm install webpack --save-dev
    ```
[slide]
# 打包命令
- webpack命令   {:&.moveIn}

    ```
    webpack 入口文件 出口文件
    ```

[slide]
#  加载器
- css加载器 {:&.moveIn}
- 安装:style-loader&css-loader 
    ```
    //处理css
    npm install style-loader css-loader less-loader --save-dev
    ```

[slide]
# webpack配置
```
         entry: 入口文件 Object/string
    output: 配置打包结果object
    path：定义输出文件路径
    file：指定打包文件名称
    module：对模块的处理
    loaders:[
        {   
            test：正则,
            loader/loaders: string|Array,
            include:String|Array,
            exclude:String|Array,
        }
        {
            test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000"
        }
    ],
    plugins:[],
    resolve:{
      extensions:['','.js','.css','.jsx']
    },
```
[slide]
# 处理图片
- 图片加载base64
- 安装:url-loader
    ```
    //处理图片
    npm install url-loader --save-dev
    ```
[slide]
# 多文件入口
- 配置多入口文件 {:&.moveIn}
```
entry: {
            entry1: './src/entry1.js',
            entry2: './src/entry2.js',
}
```
[slide]
# alias 配置别名& extensions去掉扩展名
```
resolve: {
      extensions: ["", ".js", ".jsx", ".css", ".json"], 
      alias: {   
        'abc':path, 
      }
}
```
[slide]
# 自动刷新
- 需要去更改html页面上的文件  内存中打包 不是io读写 {:&.moveIn}
    ```
    //全局安装
    npm install webpack-dev-server -g
    ```
    ```
    //本地安装
    npm install webpack-dev-server --save-dev
    ```
    ```
    //实现动态加载
    webpack-dev-server --hot --inline //更改端口 --port
    
    entry: [
          'webpack-dev-server/client?http://localhost:3000',
           path.resolve(__dirname, 'src/index.js')
    ],
    
    ```
    
   
    
  


[slide]
#  自动生成HTML
- 安装:html-webpack-plugin   {:&.moveIn}
    
    ```
     npm install html-webpack-plugin --save-dev
    ```

    ```
        new htmlWebpackPlugin({
          title:"欢迎",
          filename:'class.html',
          chunks:["abc"]
})
    ```
    
[slide]
# 启动浏览器
- 自动打开浏览器
    ```
    npm install open-browser-webpack-plugin --save-dev
    ```
    
    ```
    new open-browser-webpack-plugin({url:http://localhost:8080})
    ```    
[slide]

# 文件单独加载
- 安装:extract-text-webpack-plugin   {:&.moveIn}
    
    ```
     npm install extract-text-webpack-plugin --save-dev
    ```
    
    ```
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    ```
    
    ```
{
      test: /\.css/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
},
{
      test: /\.less/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
}
    ```

- 打包生成的css文件名  

    ```
    new ExtractTextPlugin("bundle.css");
    ```
[slide]
# 分离并抽取
- 提取出应用中公共的代码   {:&.moveIn}

    ```
     new webpack.optimize.CommonsChunkPlugin('common.js');
    ```
[slide]
# 添加hash值
- 通过`?[hash]`进行添加hash后缀 {:&.moveIn}
[slide]
# 文件的压缩
- 实现压缩代码 {:&.moveIn}
```
new  webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
}),
```
```
 // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
  new webpack.optimize.DedupePlugin(),
  // 按引用频度来排序 ID，以便达到减少文件大小的效果
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
  })
```
[slide]
# babel的使用
- 将es6代码转换成es5 [官网](http://babeljs.io) {:&.moveIn}
- 安装babel
```
//全局安装
npm install babel-cli -g
```

    ```
    //本地安装
    npm install babel-cli --save-dev
    ```

    ```
    //编译文件
    babel ./es6/index.js -o a.js
    ```
[slide]
# 编译es6
- 安装编译器和加载器 {:&.moveIn}
    ```
    npm install --save-dev babel-preset-es2015
    ```
    ```
    npm install --save-dev babel-loader
    //对js进行加载
    {test:/\.js$/,loader:"babel-loader"}
    ```
    
    ```
    npm install --save babel-polyfill
    ```
    ```
    //导入polyfill 
    import "babel-polyfill";
    ```
- 创建.babelrc 进行编译
    ```
    {
      "presets":["es2015"]
    }
    ```

[slide]
# es中的模块化
- 模块的导出 `export` {:&.moveIn}
    - export var firstName = 'jw';
    - export{Btn as b, firstName,fn,
      }
    - export default function (){}
- 模块的导入 `import`
   import {firstName} from './a.js';
   import * as util from './a.js';
   import {filename,fn} from './a.js';
[slide]
# 代码调试
```
devtool: 'cheap-module-source-map'
```