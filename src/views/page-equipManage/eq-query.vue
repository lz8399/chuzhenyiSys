<template>
<div id="eq_query" class="margin20">
    <el-row :gutter="10">
        <el-col :span="4">
            <el-select class="row1-sl" v-model="tj_lx" clearable placeholder="请选择设备类型">
                <el-option
                v-for="item in opt_lx"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="4">
            <el-select class="row1-sl" v-model="tj_ssks" clearable placeholder="请选择所属科室">
                <el-option
                v-for="item in opt_ssks"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

        </el-col>
        <el-col :span="12">
            <el-input clearable 
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="tj_gjz">
            </el-input>
        </el-col>
        <el-col :span="4" >
            <el-button type="primary">设备查询</el-button>
        </el-col>
    </el-row>

    <el-card style="margin-top: 10px;">
        <div slot="header" >
            <span class="card-title-text">设备信息</span>
            <el-button style="float: right; padding: 3px 0;" type="text  ">设备总数：820台</el-button>
        </div>
        
        <el-table :data="eq_list" cell-class-name="cell-cls6" border style="padding: 0 10px; width: 100%; margin-top: 10px;">
            <el-table-column prop="number" label="编 号" width="100%"></el-table-column>
            <el-table-column prop="name" label="名 称"> </el-table-column>
            <el-table-column prop="type" label="类 型"></el-table-column>
            <el-table-column prop="brand" label="品 牌" width="150%"></el-table-column>
            <el-table-column prop="model" label="型号规格"  width="150%"></el-table-column>
            <el-table-column prop="owner" label="所属科室"></el-table-column>
            <el-table-column prop="position" label="当前位置"></el-table-column>
            <el-table-column label="操作"  width="100%">
                <template slot-scope="scope">
                    <el-button size="mini" type="text"
                    @click="goDetails(scope.row)">查看详情</el-button>

                </template>
            </el-table-column>
        </el-table>   
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>         

       
    </el-card>   

    



</div>

</template>

<script>
export default {
    data: function(){
        return{
            tj_lx: null,    // 设备类型
            opt_lx:[    // 设备类型选项
                {label: '超声机', value: 'csj'},
                {label: '呼吸机', value: 'hxj'},
                {label: '监护仪', value: 'jhy'},
                {label: 'CT', value: 'ct'},
            ],
            tj_ssks: null,  // 所属科室
            opt_ssks: [
                {label: '超声科', value: 'csk'},
                {label: '麻醉科', value: 'mzk'},
                {label: '门诊部', value: 'mzb'},
                {label: '急救室', value: 'jjs'},
            ],
            tj_gjz: null,  // 关键字模糊搜索
            eq_list: null,  // 设备列表

        }
    },
    created: function(){
        this.eq_list = [
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },  
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },
            { number: 'hx1102', name: '飞利浦多功能呼吸机', type: '呼吸机V60', 
                brand: '飞利浦', model: 'V001', owner: '门诊部', position: '一号门诊大楼',
            },

                        
            ]

    },
    mounted: function(){

    },
    methods: {
        goDetails: function(param){  // 跳转至设备详情页，参数为该行数据       
            this.$router.push({ name: 'page-equipmentDetails', params: param});
        }

    }

    
}
</script>

<style lang="scss">
#eq_query{
    //background: #fff;
    .row1-sl{
        width: 100%;
    }

    .el-card{
        .block{
            float: right;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }

}

</style>
