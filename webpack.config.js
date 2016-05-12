module.exports = {
  entry:"./app/index.js", //入口文件
  output:{                //出口文件
    path:'./build/',      //生产的目录
    filename:'bundle.js'  //生产的文件名字
  },
  module:{   //模块的导入方式
    loaders:[ //所有的加载器
        //匹配所有的css进行css和style的配置
        {test:/\.css$/,loaders:["style","css"]}
    ]
  }
}
