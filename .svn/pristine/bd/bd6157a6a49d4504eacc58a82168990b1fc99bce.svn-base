<template>
<div class="root">
    <el-row type="flex" align="middle" >
        <span class="logo"></span>
        <el-col :span="10">
            <span class="title" >医疗设备综合管理系统</span>
        </el-col>
        <el-col :offset="10" :span="8" class="icons-col" >
            <!-- <div class="icons" ></div> -->
            <!-- <el-button class="btn-tuichu" type="text" plain icon="icon iconfont icon-tuichu" >
                <span style="margin-left: 3px;">退出</span> 
            </el-button> -->
            <div class="btn-tuichu" @click="exit()" >
                <i class="icon iconfont icon-tuichu"></i>
                <span>退出</span> 
            </div>
        </el-col>
    </el-row>
    
</div>
    
</template>

<script>
export default {
    data: function(){
        return{

        }
    },
    methods: {
        exit: function(){
            this.$router.push({path: '/login'});
        },
    }
}
</script>

<style lang="scss" scoped>
.root{
    $head-pd: 20px;
    height: 100%;
    padding-left:  $head-pd;
    .el-row{
        height: 100%;
    }
}

.icons-col{
    .btn-tuichu{    // 退出按钮样式
        float: right; 
        color: rgb(149, 151, 151);
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        border-radius: 0;
    }    
    .btn-tuichu:hover{
        color: rgb(131, 133, 133);
        background: rgba(196, 195, 195,.3);
    }

}

.title{
    display: inline-block;
    min-width: 324px;
    font-weight: bold;
    font-size: 1.2rem;
}
.logo{
    display: inline-block;
    min-width: 2.5rem;
    width: 2.5rem; height: 2.5rem;
    margin-right: .5rem;
}

.icons{
    display: inline-block;
}

</style>
