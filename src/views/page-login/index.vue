<template>
<div class="root">
    <el-row type="flex" justify="space-around" align="middle" class="card-root">
        <el-col :md="6" :sm="5" :xs="3" :lg="7"></el-col>
        <el-col :md="12" :sm="14" :xs="18" :lg="10" style="margin: 0 auto;" class="card-col">
            <el-card :body-style="{ padding: '10px' }" class="card" shadow="always">
                <div class="card-header" >

                </div>
                <!-- card body -->
                <form action="#" method="post">
                    
                    <el-row type="flex" justify="space-around" align="middle">
                        <el-col :span="5"  :xs="3" ></el-col>
                        <el-col :span="4"  :xs="5" >用户名：</el-col>
                        <el-col :span="10" :xs="13" >
                            <el-input
                                name="username"
                                placeholder="请输入用户名"
                                prefix-icon="icon iconfont icon-people"
                                v-model="username"
                                clearable>
                            </el-input>

                        </el-col>
                        <el-col :span="5"  :xs="3" ></el-col>

                    </el-row>

                    <el-row type="flex" justify="space-around" align="middle">
                        <el-col :span="5" :xs="3"></el-col>
                        
                        <el-col :span="4" :xs="5" >密&nbsp;&nbsp;&nbsp;码：</el-col>
                        <el-col :span="10" :xs="13">
                            <el-input
                                name="password"
                                type="password"
                                placeholder="请输入密码"
                                prefix-icon="icon iconfont icon-lock"
                                v-model="password"
                                clearable>
                            </el-input>                    


                        </el-col>
                        <el-col :span="5" :xs="3"></el-col>

                    </el-row> 
                    <el-row type="flex" justify="space-around" align="middle">
                        <el-col :span="9" :xs="8" ></el-col>
                        <el-col :span="10" :xs="13" dir="rtl" >
                            <el-button type="primary" @click="dologin()" >登&nbsp;&nbsp;&nbsp;录</el-button>
                        </el-col>
                        <el-col :span="5" :xs="3" ></el-col>
                        
                    </el-row>
                                       

                </form>

            </el-card>
            
        </el-col>
        <el-col :md="6" :sm="5" :xs="3" :lg="7"></el-col>

    </el-row>
    <div class="note">CopyRight  2018  版权所有</div>

</div>
    
</template>

<script>
export default {
    data: function(){
        return{
            username: null,
            password: null,
        }
    },
    methods: {
        dologin: function(){
            this.$router.push({ name: 'main-page', params: { userId: 123 }});
        }
    }
    
}
</script>

<style lang="scss" scoped>

.root{
    height: 100%;
    //background: linear-gradient(to bottom right,#98c8f0,#2074bb);
    background: #2074bb;
    .card-root{
        height: 90%;

        
    }

    .card-col{
        min-width: 410px;
        max-width: 620px;
    }

    .card{ 
        box-shadow: 0 2px 20px 2px #0e3352;

        .card-header{
            width: 100%;   height: 160px;
            background: url('../../assets/images/login_img.png') no-repeat center;
            background-size: 100% 100%;
        }
        form{
            margin: 2rem 0 3rem 0;
            .el-row{
                margin-top: 1.5rem;
            }
        }

    }

    // note样式
    .note{
        font-size: 0.8rem;
        color: rgb(68, 66, 66);
        text-align: center;

    }

}

</style>

