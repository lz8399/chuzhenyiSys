<template>
    <div class="homepage-rootdiv ">
        <el-row :gutter="10" class="row1">
            <el-col :span="8" >
                <el-card :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">设备数量统计</span>
                        <el-button style="float: right; padding: 3px" type="primary  ">设备总数：820台</el-button>
                    </div>
                    <div id="div_chart1" class="div-chart"  >
                        内容
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8"  >
                <el-card class="box-card" :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">每月维修统计</span>
                        <el-button style="float: right; padding: 3px 0" type="primary">2018年总维修次数：65次</el-button>
                    </div>
                    <div id="div_chart2" class="div-chart" >
                        内容
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" class="mg-col">
                <el-card class="box-card" :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">设备品牌统计</span>
                        <el-button style="float: right; padding: 3px 0" type="primary">类型数：4个</el-button>
                    </div>
                    <div id="div_chart3" class="div-chart" >
                        内容
                    </div>
                </el-card>
            </el-col>
        </el-row>
        
        <el-row :gutter="10" class="row2" >
            <el-col :span="24" >
                <el-card class="box-card" :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">数据汇总</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="margin10 ">
                        <el-row >
                            <el-col :span="1"><span style="visibility: hidden">123</span></el-col>
                            <el-col :span="22" class="col-center" >
                                <el-button plain size="medium">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-survey"></use>
                                    </svg>
                                    设备总数
                                    <span class="row2-num">214</span>
                                </el-button>
                                <el-button plain size="medium" >
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-flash_on"></use>
                                    </svg>
                                    报警提示
                                    <span class="row2-num">2 </span>
                                </el-button>  
                                <el-button plain size="medium" >
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-combo_chart"></use>
                                    </svg>
                                    呼吸机
                                    <span class="row2-num">214</span>
                                </el-button>  
                                <el-button plain size="medium">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-idea"></use>
                                    </svg>
                                    监护仪
                                    <span class="row2-num">214</span>
                                </el-button>    
                                <el-button plain size="medium">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-flow_chart"></use>
                                    </svg>
                                    CT数量
                                    <span class="row2-num">214</span>
                                </el-button>    
                                <el-button plain size="medium">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-landscape"></use>
                                    </svg>
                                    备品备件
                                    <span class="row2-num">214</span>
                                </el-button>    
                                <el-button plain size="medium">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-pie_chart"></use>
                                    </svg>
                                    设备种类
                                    <span class="row2-num">214</span>
                                </el-button>     

                            </el-col>

                            <el-col :span="1"><span style="visibility: hidden">123</span></el-col>
                        </el-row>
                        
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="10" class="row3" >
            <el-col :span="12" >
                <el-card class="box-card" :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">待处理任务</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <div class="margin10">
                        <el-table
                            :data="data_tabTaskDCL" cell-class-name="cell-cls6"
                            style="width: 100%;" highlight-current-row >
                            <el-table-column label="状态" width="100" >
                                <template slot-scope="scope">
                                    <span class="task-state" 
                                    :class="{'task-state-dpg': scope.row.state=='待派工', 'task-state-yqx': scope.row.state=='已取消', 'task-state-jxz': scope.row.state=='进行中'}" >
                                    {{ scope.row.state }}</span>
                                </template>
                            </el-table-column>
                            
                            <el-table-column label="日期" >
                                <template slot-scope="scope">
                                    <i class="el-icon-time"></i>
                                    <span >{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="任务名称" :show-overflow-tooltip=true >
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="任务进度" width="100" >
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="text"
                                    @click="handleDelete(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" >
                <el-card class="box-card" :body-style="{padding: 0}">
                    <div slot="header" >
                        <span class="card-title-text">已完成任务</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <div class="margin10">
                        <el-table
                            :data="data_tabTaskYWC" cell-class-name="cell-cls6" 
                            style="width: 100%" highlight-current-row >
                            <el-table-column label="状态" width="100" >
                                <template slot-scope="scope">
                                    <span class="task-state" 
                                    :class="{'task-state-dpg': scope.row.state=='待签字', 'task-state-yqx': scope.row.state=='已签字', 'task-state-jxz': scope.row.state=='已归档'}" >
                                    {{ scope.row.state }}</span>
                                </template>
                            </el-table-column>
                            
                            <el-table-column label="日期" >
                                <template slot-scope="scope">
                                    <i class="el-icon-time"></i>
                                    <span >{{ scope.row.date }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column label="任务名称" :show-overflow-tooltip=true >
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="任务进度" width="100">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    type="text"
                                    @click="handleDelete(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>                        

                    </div>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            chart_coloropt:['#2f4554','#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            data_chart1:[
                ['设备类型', '设备总数', '正在维修', '报修数量'],
                ['1号门诊楼', 27, 1, 3],
                ['2号门诊楼', 25, 2, 4],
                ['第一住院大楼', 30, 1, 2],
                ['第二住院大楼', 22, 5, 1],
                ['第三住院大楼', 19, 3, 1],
                ['第四住院大楼', 35, 3, 2]
            ],
            data_chart2:[
                ['月份', '维修数量'],
                ['十二月', null],
                ['十一月', null],
                ['十月', 1],
                ['九月', 18],
                ['八月', 1],
                ['七月', 20],
                ['六月', 4],
                ['五月', 6],
                ['四月', 2],
                ['三月', 9],
                ['二月', 5],
                ['一月', 15],
                
            ],
            data_chart3:[
                ['品牌', '数量'],
                ['迈瑞', 271],
                ['欧美达', 190],
                ['瑞思迈', 100],
                ['飞利浦', 68],

            ],
            data_tabTaskDCL: [  // 待处理
                { state: '待派工', date: '2018-10-25', name: '呼吸机供电异常', progress: '24%'},
                { state: '待派工', date: '2018-10-26', name: '过滤器损坏', progress: '24%'},
                { state: '已取消', date: '2018-10-15', name: '电源线损坏', progress: '0%'},
                { state: '进行中', date: '2018-10-22', name: '除震仪电异常', progress: '66%'},
                { state: '进行中', date: '2018-10-23', name: '除震仪电源线损坏', progress: '70%'},
            ],
            data_tabTaskYWC: [  // 已完成
                { state: '待签字', date: '2018-10-21', name: '呼吸机供电异常', progress: '24%'},
                { state: '待签字', date: '2018-10-21', name: '过滤器损坏', progress: '24%'},
                { state: '已签字', date: '2018-10-23', name: '电源线损坏', progress: '0%'},
                { state: '已归档', date: '2018-10-11', name: '除震仪电异常', progress: '66%'},
                { state: '已归档', date: '2018-10-13', name: '除震仪电源线损坏', progress: '70%'},
            ]

        }
    },
    computed: {

    },
    mounted: function(){
        this.render_chart1();
        this.render_chart2();
        this.render_chart3();    
        
    },
    methods: {
        render_chart1: function(){    
            let myChart1 = this.$echarts.init(document.getElementById('div_chart1'));
            let option = {
                tooltip: {},
                dataset:{
                    source: this.data_chart1
                },
                legend: {
                    
                },
                color: this.chart_coloropt,
                xAxis: {
                    type: 'category',
                    axisLabel:{
                        show: true,
                        //fontSize: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
           
                },
                yAxis: {
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine:{     // 垂直网格
                        show: true,
                        lineStyle:{
                            type: 'dotted'
                        }
                        
                    }                    
                },
                grid:{
                    show: true,
                    left: '10%', right: '5%', top: 40, bottom: 40,                   
                    backgroundColor: '#ededed'
                },
                series: [
                    {   
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'insideTop',
                        }
                    },
                    {
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top',
                        }                        
                    },
                    {
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top',
                        }                        
                    }
                ],
                dataZoom:{
                    type: 'inside',
                }            
            }

            myChart1.setOption(option);

        },
        render_chart2: function(){    
            let myChart2 = this.$echarts.init(document.getElementById('div_chart2'));
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }   
                },
                color: this.chart_coloropt,
                dataset:{
                    source: this.data_chart2
                },
                legend: {
                    show: false
                },
                xAxis: {
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine:{     // 垂直网格
                        show: true,
                        lineStyle:{
                            type: 'dotted'
                        }
                        
                    }   

                    
           
                },
                yAxis: {
                    type: 'category',
                    axisLabel:{
                        show: true,
                        fontSize: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },                 
                },
                grid:{
                    show: true,
                    left: '12%', right: '3%', top: 10, bottom: 40,                   
                    //backgroundColor: '#ededed'
                },
                series: [
                    {
                        type: 'bar',
                        color: '#61a0a8',
                        label: {
                            show: true,
                            position: 'insideRight',
                        },
                    
                    }
                  
                ],
                dataZoom:{
                    type: 'inside',
                }            
            }

            myChart2.setOption(option);

        },
        render_chart3: function(){    
            let myChart3 = this.$echarts.init(document.getElementById('div_chart3'));
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{c}台 ({d}%)"  
                },
                dataset:{
                    source: this.data_chart3
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },

                series: [
                    {
                        name:'设备类型统计',
                        type:'pie',
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#737272'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: '#c8c6c6'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                  
                ],
       
            }

            myChart3.setOption(option);

        },
    }

    
}
</script>

<style lang="scss" scoped>

.homepage-rootdiv{
    $row-padding: 5px 10px;
    height: 100%;    
    .el-row{
        margin: 0!important;
        // .el-col{
        //     height: 100%;
        //     .el-card{
        //         height: 100%;
        //     }
        // }

    }

    // iconfont大小
    .icon {
        width: 1.5em; height: 1.5em;
        vertical-align: -0.35em;
        fill: currentColor;
        overflow: hidden;
    }   

    // card样式

        .el-col{
            height: 100%;
            .el-card__body{
                height: 100%;
            }
            .el-card{
                height: 100%;
                
            }
        }

    // 三行高度设置
    .div-chart{
        height: 280px;
    }
    .row1{      
        //height: 40%;
        padding: 15px 10px 5px 10px;

    }
    .row2{
        padding: 5px 10px;
        .col-center{
            text-align: center;
            .el-button{
                margin-top: 5px;
                margin-bottom: 5px;
            }
            .el-button+.el-button {
                margin-left: 5px!important;
            }

        }
        .row2-num{
            font-weight: 600;
            display: inline-block;
            padding: .4rem .6rem;
            background: #d1dade;
            border-radius: 10%;
        }

    }
    .row3{
        //height: 40%;
        //margin-bottom: 20px;
        padding: 5px 10px 0 10px;

    }

    // 任务不同状态样式
    .task-state{
        color: white;
        display: inline-block;
        padding: 0 5px;
        border-radius: 5px;
    }

    .task-state-dpg{ // 待派工
        background: #1c84c6;
    }
    .task-state-yqx{ // 已取消
        background: #f8ac59;
    }
    .task-state-jxz{ // 进行中
        background: #23c6c8;
    }

    



}

</style>
