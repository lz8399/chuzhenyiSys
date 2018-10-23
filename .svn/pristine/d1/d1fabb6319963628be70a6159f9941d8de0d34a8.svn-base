
<template>

<div id="repairelist_id" >

<el-menu :default-active="activeIndex" class="el-menu-demo"  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">全部数据 </el-menu-item>
  <el-menu-item index="2" >已申请</el-menu-item>
  <el-menu-item index="3" >待维修</el-menu-item>
  <el-menu-item index="4" >已维修</el-menu-item>
  <el-menu-item index="5" >待审核</el-menu-item>
  <el-menu-item index="6" >已完成</el-menu-item>
</el-menu>

<div class="line"></div>
<br>





      <div id="repaire_control" >
            <el-row :gutter="20">

              <el-col  :span="3">

                  <el-select v-model="value6" placeholder="请选择">
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
                </el-select>
              </el-col>

              <el-col :span="18">
                <el-input placeholder="请输入内容"  class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>  
              </el-col>
              <el-col :span="3">   
              <el-row>        
                <el-button @click="add_repaire()" type="primary">  新增维修</el-button>
              </el-row>  
              </el-col>  
            </el-row> 
      </div>




      <div id="repaire_table">
          <el-table
              :data="tableData3" 
              border cell-style="padding:5px"  >
               <el-table-column
                prop="id"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
               
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="设备名称"
              >
              </el-table-column>
              <el-table-column
                prop="province"
                label="区域"
                >
              </el-table-column>
              <el-table-column
                prop="city"
                label="部门"
                >
              </el-table-column>
       
              <el-table-column
                prop="zip"
                label="设备状态"
                >
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button 
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"  
                    @click="centerDialogVisible = true">删除</el-button>
                  <el-button
                    size="mini"
                    type="success"  
                    @click="centerDialogVisible = true">详细</el-button>


                </template>
              </el-table-column>
          </el-table>

          <div style="text-align:right" >            
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
      </div>


      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="20%"   
        center   >
        <div style="text-align: center;">你确定要删除这条记录吗？</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          
        </span>
      </el-dialog>


 </div>   

</template>

<script>


 export default {

    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       add_repaire: function(){
            this.$router.push({ name: 'repaire-page-add', params: { id: 123 }});
        }
    },
    data() {
      return {
        cities: [{
          value: '1',
          label: '设备类型'
        }, {
          value: '2',
          label: '设备名称'
        }, {
          value: '3',
          label: '维修人员'
        }, {
          value: '4',
          label: '管理部门'
        }, {
          value: '5',
          label: '设备时间'
        }],
        value6: '1',
        centerDialogVisible: false,

        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        activeIndex:"1",

         tableData3: [{
          id:"1",
          date: '2016-05-03',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"2",
          date: '2016-05-02',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"3",
          date: '2016-05-04',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"4",
          date: '2016-05-01',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"5",
          date: '2016-05-08',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"6",
          date: '2016-05-06',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"7",
          date: '2016-05-07',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"8",
          date: '2016-05-08',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"9",
          date: '2016-05-06',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }, {
          id:"10",
          date: '2016-05-07',
          name: '飞利浦呼吸机V60',
          province: '第一住院大楼',
          city: '麻醉科',
          address: '第一住院大楼市普陀区金沙江路 1518 弄',
          zip: '使用中'
        }]



      }
    }
  }

</script>

<style lang="scss" scoped>

    #repairelist_id {
      height: 100%;
      //margin:10px;

    }

    .el-menu{
      
    }

    #repaire_control{
      margin: 0 10px 10px 10px;
    }

    #repaire_table{
      padding: 0 10px;
      .el-table{

        
      }

    }


    table {
      font-size:12px;
    }

</style>