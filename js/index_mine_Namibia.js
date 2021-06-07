//左上 采矿指标-剥采量，矿石量 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftTop_mine .chart"));
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
        data: ['剥采量', '矿石量'],
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
                    data: xTime,
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
                    name: '剥采量',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[0].data,
                    itemStyle:{
                        //修改柱子圆角
                        barBorderRadius:5
                    }
                },
                {
                    name: '矿石量',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[1].data,
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


//右上 采矿指标-贫化率 损失率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightTop_mine .chart"));
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
        data: ['贫化率', '损失率'],
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
                    data: xTime,
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
                    name: '贫化率',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[2].data,
                    itemStyle:{
                        //修改柱子圆角
                        barBorderRadius:5
                    }
                },
                {
                    name: '损失率',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[3].data,
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


//左中 采矿指标-液压铲设备可动率，液压铲设备实动率 柱状图
(function(){    
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftMiddle_mine .chart"));
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
                    data: xTime,
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
                    data: mineData[6].data,
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
                    data: mineData[7].data,
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


//右中 采矿指标-电铲设备可动率，电铲设备实动率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightMiddle_mine .chart"));
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
        data: ['电铲可动率', '电铲实动率'],
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
                    data: xTime,
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
                    name: '电铲可动率',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[6].data,
                    itemStyle:{
                        //修改柱子圆角
                        barBorderRadius:5
                    }
                },
                {
                    name: '电铲实动率',
                    type: 'bar',
                    //修改柱子宽度
                    barWidth: '35%',
                    data: mineData[7].data,
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


//左下 采矿指标 - 液压铲装载效率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftBottom_mine .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}%',  // 实现百分比显示
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
                data: xTime,
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
                name: '液压铲装载效率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: mineData[8].data,
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

//右下 采矿指标 - 电铲装载效率 柱状图
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightBottom_mine .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}%',  // 实现百分比显示
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
                data: xTime,
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
                name: '电铲装载效率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: mineData[9].data,
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