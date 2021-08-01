
//左上 水冶指标-破矿量，磨矿量 柱状图
(function(){
    
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftTop_process .chart"));
    // 2.指定配置项和数据
    var option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}<br/>{a0}: {c0}吨<br />{a1}: {c1}吨',  // 实现单位显示
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        top:"0%",
        data: ['破矿量', '磨矿量'],
        textStyle:{
            color:"rgba(255, 255, 255, 0.5)",
            fontSize:"12"
        }
    },
    // 修改图表大小
    grid: {
        left: '0',
        top:'30px',
        right: '0',
        bottom: '0',
        containLabel: true
    },
            xAxis: [
                {
                    type: 'category',
                    data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 修改刻度标签，相关样式
                    axisLabel:{
                        color:'rgba(255, 255, 255, 0.6)',
                        fontSize:'12',
                        interval:0,
                        rotate:40
                    },
                    // 不显示X坐标轴的样式
                    axisLine:{
                        show:false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    // 修改刻度标签，相关样式
                    axisLabel:{
                        color:'rgba(255, 255, 255, 0.6)',
                        fontSize:'12'
                    },
                    // Y轴的线条改为2像素
                    axisLine:{
                        lineStyle:{
                            color:'rgba(255, 255, 255, 0.1)',
                            width:2
                        }
                    },
                    //Y轴分隔线的颜色
                    splitLine:{
                        lineStyle:{
                            color:'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            ],
            color:['#00F2F1','#ED3F35'],
            series: [
                {
                    name: '破矿量',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: processData[0].data,
                    itemStyle:{
                        //修改柱子圆角
                        barBorderRadius:5
                    }
                },
                {
                    name: '磨矿量',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: processData[1].data,
                    itemStyle:{
                        //修改柱子圆角
                        barBorderRadius:5
                    }
                }
            ]
        };
            // 3.把配置项给实例对象
            myChart.setOption(option);
            // 4.让图表跟随屏幕自动的去适应
            window.addEventListener('resize',function(){
                myChart.resize();
            });
})();   
    
//右上 水冶指标-产品量 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightTop_process .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}吨<br />{a1}: {c1}吨',  // 实现单位显示
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表大小
        grid: {
            left: '0',
            top:'30px',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12',
                    interval:0,
                    rotate:40
                },
                // 不显示X坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12'
                },
                // Y轴的线条改为2像素
                axisLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)',
                        width:2
                    }
                },
                //Y轴分隔线的颜色
                splitLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        ],
        color:['#00F2F1','#ED3F35'],
        series: [
            {
                name: '产品量',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: processData[2].data,
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自动的去适应
    window.addEventListener('resize',function(){
        myChart.resize();
    });
})();

//左中 水冶指标-供矿品位 折线图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftMiddle_process .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}ppm',  // 实现单位显示
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true, //显示边框
            borderColor:'#012F4A', //边框颜色
            containLabel: true //包含刻度文字在内
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:'#4C9BFD', //文本颜色
                interval:0,
                rotate:40
            },
            axisLine:{
                show:false //去除轴线
            },
            boundaryGap:false //去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:'#4C9BFD' //文本颜色
            },
            axisLine:{
                show:false //去除轴线
            },
            splitLine:{
                lineStyle:{
                    color:'#012F4A' //分隔线颜色
                }
            }
        },
        color:['#00F2F1','#ED3F35'],
        series: [
            {
                name: '供矿品位',
                type: 'line',
                smooth:true, //折线修饰为圆滑
                data: processData[3].data
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自动的去适应
    window.addEventListener('resize',function(){
        myChart.resize();
    });
    // 5.点击切换效果
    $(".line h2").on("click","a",function(){
        //点击a之后 根据当前a的索引号找到对应的yearData的相关对象
        var obj = yearData[$(this).index()];
        option.series[0].data= obj.data[0];
        option.series[1].data= obj.data[1];
        //需要重新渲染
        myChart.setOption(option);
    });
})();

//右中 水冶指标-磨机可动率，磨机实动率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightMiddle_process .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}%<br />{a1}: {c1}%',  // 实现百分比显示
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top:"0%",
            data: ['可动率', '实动率'],
            textStyle:{
                color:"rgba(255, 255, 255, 0.5)",
                fontSize:"12"
            }
        },
        // 修改图表大小
        grid: {
            left: '0',
            top:'30px',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12',
                    interval:0,
                    rotate:40
                },
                // 不显示X坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12',
                    formatter: '{value}%'
                },
                // Y轴的线条改为2像素
                axisLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)',
                        width:2
                    }
                },
                //Y轴分隔线的颜色
                splitLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        ],
        color:['#00F2F1','#ED3F35'],
        series: [
            {
                name: '可动率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: processData[4].data,
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            },
            {
                name: '实动率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: processData[5].data,
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自动的去适应
    window.addEventListener('resize',function(){
        myChart.resize();
    });
})();

//左下 水冶指标 - 磨机单位小时处理量 折线图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftBottom_process .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}吨/小时',  // 实现单位显示
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true, //显示边框
            borderColor:'#012F4A', //边框颜色
            containLabel: true //包含刻度文字在内
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:'#4C9BFD', //文本颜色
                interval:0,
                rotate:40
            },
            axisLine:{
                show:false //去除轴线
            },
            boundaryGap:false //去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:'#4C9BFD' //文本颜色
            },
            axisLine:{
                show:false //去除轴线
            },
            splitLine:{
                lineStyle:{
                    color:'#012F4A' //分隔线颜色
                }
            }
        },
        color:['#00F2F1','#ED3F35'],
        series: [
            {
                name: '磨机单位小时处理量',
                type: 'line',
                smooth:true, //折线修饰为圆滑
                data: processData[6].data
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自动的去适应
    window.addEventListener('resize',function(){
        myChart.resize();
    });
    // 5.点击切换效果
    $(".line h2").on("click","a",function(){
        //点击a之后 根据当前a的索引号找到对应的yearData的相关对象
        var obj = yearData[$(this).index()];
        option.series[0].data= obj.data[0];
        option.series[1].data= obj.data[1];
        //需要重新渲染
        myChart.setOption(option);
    });
})();

//右下 水冶指标 - 回收率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightBottom_process .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}%',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表大小
        grid: {
            left: '0',
            top:'30px',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12',
                    interval:0,
                    rotate:40
                },
                // 不显示X坐标轴的样式
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签，相关样式
                axisLabel:{
                    color:'rgba(255, 255, 255, 0.6)',
                    fontSize:'12',
                    formatter: '{value}%'
                },
                // Y轴的线条改为2像素
                axisLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)',
                        width:2
                    }
                },
                //Y轴分隔线的颜色
                splitLine:{
                    lineStyle:{
                        color:'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        ],
        color:['#00F2F1','#ED3F35'],
        series: [
            {
                name: '回收率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: processData[7].data,
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自动的去适应
    window.addEventListener('resize',function(){
        myChart.resize();
    });
})();

