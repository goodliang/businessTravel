$(document).ready(function() {

//
var refundChart = echarts.init(document.getElementById('refund-chart'));
var refundChartData={
    refund:[13, 12, 11, 10, 9.1, 2, 16,14, 14, 15, 14, 90],//退签率
    change:[12, 13, 11, 14, 90,12, 82, 12, 11, 22, 11, 10] //签率
}
//机票消费金额
var airportAmount = echarts.init(document.getElementById('airportAmount-chart'));
var airportAmountData={
    x:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月','九月','十月','十一月','十二月',],//月
    y:[12, 13, 11, 14, 90,12, 82, 12, 11, 22, 11, 10] //数值
}

//机票消费张数
var airportCount = echarts.init(document.getElementById('airportCount-chart'));
var airportCountData={
    x:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月','九月','十月','十一月','十二月',],//月
    y:[12, 13, 11, 14, 90,12, 82, 12, 11, 22, 11, 10] //数值
}
//月平均折扣
var airportDiscount = echarts.init(document.getElementById('airportDiscount-chart'));
var airportDiscountData={
    x:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月','九月','十月','十一月','十二月',],//月
    y:[12, 13, 11, 14, 90,12, 82, 12, 11, 22, 11, 10] //数值
}

//热门航线占比
var hotLinePercent = echarts.init(document.getElementById('hotLinePercent-chart'));


var airportDepartMentTop5 = echarts.init(document.getElementById('airportDepartMentTop5-chart'))





var airportDepartMentTop5Option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

var refundOption = {
 
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['退签率','改签率']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                formatter: '{value} %'
            }
        }
    ],
    series : [
        {
            name:'退签率',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: refundChartData.refund
        },
        {
            name:'改签率',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:refundChartData.change
        }
    ]
}

var airportAmountOption = {
  
    xAxis: {
        data: airportAmountData.x,
        axisLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ccc'
            }
        }
    },
    series: [

        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            // {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                }
            },
            data: airportAmountData.y
        }
    ]
}

var airportCountOption = {
  
    xAxis: {
        data: airportCountData.x,
      
        axisLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ccc'
            }
        }
    },
    series: [

        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                }
            },
            data: airportCountData.y
        }
    ]
}

var airportDiscountOption = {
  
    xAxis: {
        data: airportDiscountData.x,
      
        axisLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ccc'
            }
        }
    },
    series: [

        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                }
            },
            data: airportDiscountData.y
        }
    ]
}

var hotLinePercentOption = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
           data: ['中国航空', '东方航空','海南航空','南方航空','上海航空']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['北京－上海','上海－北京','北京－上海','北京－上海','北京－上海']
    },
    series: [
        {
            name: '中国航空',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 30, 20, 20]
        },
        {
            name: '东方航空',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 20, 20, 20]
        },
        {
            name: '海南航空',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 20, 20, 20]
        },
        {
            name: '南方航空',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 10, 20, 20]
        },
        {
            name: '上海航空',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 20, 5, 20, 20]
        }
    ]
}






refundChart.setOption(refundOption)
airportAmount.setOption(airportAmountOption)
airportCount.setOption(airportCountOption)
airportDiscount.setOption(airportDiscountOption)
airportDepartMentTop5.setOption(airportDepartMentTop5Option)

hotLinePercent.setOption(hotLinePercentOption)

$(window).on('resize',function(){
    console.log('resize',airportAmount)
    refundChart.resize()
})

    
//end
})