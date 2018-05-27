# Node-Monitor 1.0

## I. 简介
首先感谢Easy-Monitor项目，这个项目是在Easy-Monitor基础上，将其按实际需要分解成更适合部署的两个项目。
使项目更加轻量，并各自关注自身重点。后续会根据实际需要进行更多的改造和优化。
Easy-Monitor github 地址：
https://github.com/hyj1991/easy-monitor/

轻量级的 Node.js 项目内核性能监控 + 分析工具

### - 功能特点

* 服务器状态概览信息展示
* 实时 CPU 函数性能分析，帮助定位程序的性能瓶颈点
* 实时 Memory 堆内内存结构分析，帮助定位到内存疑似泄漏点

###  项目分成两部分：
1. Node-Monitor 包括监控页面的http服务，与nmProfiler通讯的tcp服务
2. nmProfiler 包括profiler和tcp客户端
当前项目即为Node-Monitor部分。

### 部署

修改根index.js，设置http和tcp服务端口，如：

nodeMonitor({

    dashboard: {
    
     port_http: 20000,
     
     port_tcp: 30000
     
     }
     
})


node或pm2启动。
打开你的浏览器，访问http://localhost:20000,即可看到监控界面。

