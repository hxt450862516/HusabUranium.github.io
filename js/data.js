
var curDate = new Date();

var preDate1 = new Date(curDate.getTime() - 1 * 3600 * 24 * 1000);
var preDate2 = new Date(curDate.getTime() - 2 * 3600 * 24 * 1000);
var preDate3 = new Date(curDate.getTime() - 3 * 3600 * 24 * 1000);
var preDate4 = new Date(curDate.getTime() - 4 * 3600 * 24 * 1000);
var preDate5 = new Date(curDate.getTime() - 5 * 3600 * 24 * 1000);
var preDate6 = new Date(curDate.getTime() - 6 * 3600 * 24 * 1000);
var preDate7 = new Date(curDate.getTime() - 7 * 3600 * 24 * 1000);

var curMonth = curDate.getMonth() + 1;
var curDay = curDate.getDate();
var t = curMonth + '月' + curDay + '日';

var preMonth1 = preDate1.getMonth() + 1;
var preDay1 = preDate1.getDate();
var t1 = preMonth1 + '月' + preDay1 + '日';

var preMonth2 = preDate2.getMonth() + 1;
var preDay2 = preDate2.getDate();
var t2 = preMonth2 + '月' + preDay2 + '日';

var preMonth3 = preDate3.getMonth() + 1;
var preDay3 = preDate3.getDate();
var t3 = preMonth3 + '月' + preDay3 + '日';

var preMonth4 = preDate4.getMonth() + 1;
var preDay4 = preDate4.getDate();
var t4 = preMonth4 + '月' + preDay4 + '日';

var preMonth5 = preDate5.getMonth() + 1;
var preDay5 = preDate5.getDate();
var t5 = preMonth5 + '月' + preDay5 + '日';

var preMonth6 = preDate6.getMonth() + 1;
var preDay6 = preDate6.getDate();
var t6 = preMonth6 + '月' + preDay6 + '日';

var preMonth7 = preDate7.getMonth() + 1;
var preDay7 = preDate7.getDate();
var t7 = preMonth7 + '月' + preDay7 + '日';

var xTime = [t7, t6, t5, t4, t3, t2, t1];

// 全局参数
var titleName = ["湖山铀矿生产指标", "谢米兹拜伊矿山生产指标", "伊尔科利矿山生产指标", "加拿大矿山指标", "EME矿山指标", "麻楼矿山指标", "萨瓦甫齐矿山指标"]
var titleNav = ["Namibia", "Semizbai", "Ileley", "Canada", "Australia", "Guangdong", "Xinjiang"]

// 湖山铀矿采矿数据
var mineData = [
    {
        name: '剥采量',
        data: [20000, 18608, 24752, 25164, 37826, 27078, 23224]
    },
    {
        name: '矿石量',
        data: [6408, 42260, 20000, 23060, 39542, 26036, 18932]
    },
    {
        name: '贫化率',
        data: [18.3, 18.2, 20.5, 19.1, 15.3, 16.9, 24.8]
    },
    {
        name: '损失率',
        data: [15, 10, 12.5, 13.1, 9.3, 6.9, 4.8]
    },
    {
        name: '液压铲可动率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    },
    {
        name: '液压铲实动率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    },
    {
        name: '电铲可动率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    },
    {
        name: '电铲实动率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    },
    {
        name: '液压铲装载效率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    },
    {
        name: '电铲装载效率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    }
];

// 湖山铀矿水冶数据
var processData = [
    {
        name: '破矿量',
        data: [15086, 18608, 24752, 25164, 37826, 27078, 23224]
    },
    {
        name: '磨矿量',
        data: [6408, 42260, 18064, 23060, 39542, 26036, 18932]
    },
    {
        name: '产品量',
        data: [15.06, 14.93, 14.72, 13.49, 12.19, 14.81, 10.38]
    },
    {
        name: '供矿品味',
        data: [430, 435, 440, 438, 441, 440, 439]
    },
    {
        name: '磨机可动率',
        data: [95.3, 90, 83, 92, 81, 96, 70]
    },
    {
        name: '磨机实动率',
        data: [95, 86, 78, 88, 70, 92, 50]
    },
    {
        name: '磨机单位小时处理量',
        data: [1705, 1801, 1780, 1640, 1710, 1800, 1750]
    },
    {
        name: '回收率',
        data: [89.3, 88.2, 87.5, 89.1, 88.3, 87.9, 89.8]
    }
];

// 谢米兹拜伊矿山数据
var data_Semizbai = [
    {
        name: '备采储量 2020年', // tU
        data: [320, 410, 430, 405, 415, 398, 370]
    },
    {
        name: '备采储量 2021年', // tU
        data: [420, 450, 430, 455, 485, 398, 470]
    },
    {
        name: '浸出液铀浓度', // mg/L
        data: [30, 31, 33, 29, 28, 32, 32]
    },
    {
        name: '地浸回收率', // %
        data: [85.2, 84.1, 88.6, 87.2, 85.6, 83.3, 82.2]
    },
    {
        name: '水冶回收率', // %
        data: [99.1, 98.3, 98.1, 97.3, 99.0, 96.9, 96.8]
    },
    {
        name: '浸出酸耗', // kg/kgU
        data: [120, 115, 128, 129, 131, 117, 115]
    },
    {
        name: '水冶车间处理量', // m3/月
        data: [604386, 813506, 780394, 758393, 739490, 698272, 708282]
    },
    {
        name: '成品铀量', // tU
        data: [89.3, 88.2, 77.5, 79.1, 88.3, 77.9, 89.8]
    }
];

// 伊尔科利矿山数据
var data_Ileley = [
    {
        name: '备采储量 2020年', // tU
        data: [320, 410, 430, 405, 415, 398, 370]
    },
    {
        name: '备采储量 2021年', // tU
        data: [420, 450, 430, 455, 485, 398, 470]
    },
    {
        name: '浸出液铀浓度', // mg/L
        data: [65, 61, 63, 69, 68, 62, 62]
    },
    {
        name: '地浸回收率', // %
        data: [90.2, 92.1, 91.6, 89.2, 90.6, 91.3, 88.2]
    },
    {
        name: '水冶回收率', // %
        data: [99.1, 98.3, 98.1, 97.3, 99.0, 96.9, 96.8]
    },
    {
        name: '浸出酸耗', // kg/kgU
        data: [70, 75, 78, 79, 71, 77.7, 75]
    },
    {
        name: '水冶车间处理量', // m3/月
        data: [604386, 813506, 780394, 758393, 739490, 698272, 708282]
    },
    {
        name: '成品铀量', // tU
        data: [59.3, 58.2, 47.5, 49.1, 48.3, 57.9, 49.8]
    }
];


