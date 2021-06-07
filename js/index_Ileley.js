
// 左上 地质指标-备采储量 折线图line
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftTop .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}吨铀',  // 实现单位显示
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
                name: '备采储量',
                type: 'line',
                smooth:true, //折线修饰为圆滑
                data: data_Ileley[0].data
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
    $(".leftTop h2").on("click","a",function(){
        //点击a之后 根据当前a的索引号找到对应的data_Semizbai的相关对象
        var obj = data_Semizbai[$(this).index()];
        console.log(obj)
        option.series[0].data= obj.data;
        //需要重新渲染
        myChart.setOption(option);
    });
})();

// 右上 地浸指标-浸出液铀含量 柱状图bar
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightTop .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}mg/L',  // 实现单位显示
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
                name: '浸出液铀浓度',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: data_Ileley[2].data,
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

// 左中 地浸/水冶指标-地浸回收率 水冶回收率 柱状图bar
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftMiddle .chart"));
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
            data: ['地浸回收率', '水冶回收率'],
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
                name: '地浸回收率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: data_Ileley[3].data,
                itemStyle:{
                    //修改柱子圆角
                    barBorderRadius:5
                }
            },
            {
                name: '水冶回收率',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: data_Ileley[4].data,
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

// 右中 地浸指标-浸出酸耗 折线图line
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightMiddle .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}kg/kg U',  // 实现单位显示
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
                name: '浸出酸耗',
                type: 'line',
                smooth:true, //折线修饰为圆滑
                data: data_Ileley[5].data
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

// 左下 水冶指标-水冶车间处理量 折线图line
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".leftBottom .chart"));
    // 2.指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}m3/月',  // 实现单位显示
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
        color:['#ED3F35'],
        series: [
            {
                name: '水冶车间处理量',
                type: 'line',
                smooth:true, //折线修饰为圆滑
                data: data_Ileley[6].data
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

// 右下 水冶指标-成品铀量 柱状图bar
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".rightBottom .chart"));
    // 2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}: {c0}吨铀',  // 实现单位显示
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
        color:['#ED3F35'],
        series: [
            {
                name: '成品铀量',
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                data: data_Ileley[7].data,
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










