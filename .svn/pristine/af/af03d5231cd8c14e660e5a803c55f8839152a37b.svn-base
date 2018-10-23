<template>
    <div id="pswd-cg" class="padding20" >
        <el-card>
            <div slot="header" >
                <span class="card-title-text">修改密码</span>
                <el-button style="float: right; padding: 3px 0" @click="backHome()" type="text">返回</el-button>
            </div>
            <div class="card-content padding20" >
                <el-form label-position="left" label-width="80px" :model="userinfo" >
                    <el-form-item label="用户名称">
                        <el-input v-model="userinfo.name" clearable ></el-input>
                    </el-form-item>
                    <el-form-item label="原始密码" >
                        <el-input v-model="userinfo.pswOld" clearable placeholder="请输入您的原始密码"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="userinfo.pswNew" clearable placeholder="请输入您的新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="userinfo.psw_confirm" clearable placeholder="请确认您的新密码"></el-input>
                    </el-form-item>    
 
                    <el-form-item style="text-align: center">
                        <el-button type="primary" @click="onSubmit">保 存</el-button>
                        <el-button style="margin-left: 2rem;" @click="backHome()" >取 消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            userinfo:{
                name: 'admin',
                pswOld: null,
                pswNew: null,
                psw_confirm: null
            },

        }
    },
    methods: {
        backHome: function(){
            this.$router.push({path: '/main/home'});
        },
        onSubmit: function(){
            console.log(this.userinfoNew);
            
        }
    }

    
}
</script>

<style lang="scss">
#pswd-cg{
    .card-content{
        width: 55%;
        margin: auto;
    }
}

</style>
