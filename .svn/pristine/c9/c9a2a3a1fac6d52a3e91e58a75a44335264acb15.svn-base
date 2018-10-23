<template>
<div id="map" ref="lmap" style="height: 100%;">
    <div class="floor-nav" v-if="isIndoor">
        <div class="btn-nav" @click="back()">返回</div>
        <div class="btn-nav" data-fl="一楼" @click="gofloor($event)">一楼</div>
        <div class="btn-nav" data-fl="二楼" @click="gofloor($event)">二楼</div>
        <div class="btn-nav" data-fl="三楼" @click="gofloor($event)">三楼</div>
        <div class="btn-nav" data-fl="四楼" @click="gofloor($event)">四楼</div>

    </div>
    <div class="floor-marker" v-if="isIndoor">
        {{room}} {{floor_num}}
    </div>

    <div :style="{visibility: rukou_popShow}" ref="rukou_popup"  class="regionPopup">
            <div class="regionPopup_title">{{data_rukou['name']?data_rukou['name']:''}}</div>
            <table class="regionPopup_tab">
                <tr>
                    <td>设备总数:</td>
                    <td>
                        <a href="#" id="equip_totality" onclick="equipmentsState_detail()">{{equip_info.total}} </a>台
                    </td>
                </tr>
                <tr>
                    <td>正在维修:</td>
                    <td>
                        <a href="#" id="equip_repair" onclick="equipmentsState_detail()">{{equip_info.repair}} </a>台
                    </td>
                </tr>
                <tr>
                    <td>故障申报:</td>
                    <td>
                        <a href="#" id="equip_apply" onclick="equipmentsState_detail()">{{equip_info.declare}} </a>台
                    </td>
                </tr>
                <tr>
                    <td><button type="button" @click="goEqlist()" >查看详情</button></td>
                    <td><button type="button" @click="goIndoor(data_rukou['name']?data_rukou['name']:'')">进入室内</button></td>
                </tr>
            </table>
        
    </div>    

</div>
    
</template>

<script>
import * as L from 'leaflet'
import {config} from '../../components/base_config.js'

// // leaflet插件
// import {mapkey} from '../../assets/plugins/leaflet-mapkey-icon-master/dist/L.Icon.Mapkey.js'

export default {
    data: function(){
        return{
            huaxi_info: null,
            map: null,
            room: null,    // 记录楼层
            floor_num: '一楼',

            isIndoor: false,    // 判别是否是室内
            data_rukou: {   // 室内入口数据
                name: null
            },  
            rukou_popShow: 'hidden',

            mapOptions:{
                zoom: 18,
                center: [34.264985092894754,108.87002792029007],
                minZoom:17,
                maxZoom:25,
            },
            outdoormap_opt:{    // 园区图层
                attribution: '',
                url: config.mapurl_outdoor,
                tms: true
            },
            tooltips_rukou: L.layerGroup(),   // 室内入口tooltip
            markers_rukou: L.layerGroup(),  // 室内入口marker
            outdoor_layers: L.layerGroup(), // 室外图层组
            indoor_layers: L.layerGroup(),  // 室内图层组
            indoor1: null,
            indoor1_popData: null,    
            indoor1_layers: L.layerGroup(),  // 室内图1楼图层组

            indoor2: null,
            indoor2_layers: L.layerGroup(),  // 室内图2楼图层组


            equip_info:{
                total: 17,
                repair: 1,
                declare: 2,
            }
        }
    },
    created: function(){
        this.huaxi_info = `四川大学华西医院（West China Hospital，Sichuan University）是中国西部疑难危急重症诊疗的国家级中心，也是世界规模第一的综合性单点医院，
        拥有中国规模最大、最早整体通过美国病理家学会（CAP）检查认可的医学检验中心。`
        this.indoor1_popData = [
                {"jieshao": this.huaxi_info,"img_url":"../../assets/images/hos1.jpg","state":0,"DeviceNo":"reader_one","name":"内科门诊一","x": -0.015621185109197576, "y": 0.011115074157714845, "spatialReference": {"wkid": 3395 },"layerIDArr":[],"room":[] },
                {"jieshao": this.huaxi_info,"img_url":"../../assets/images/hos2.jpg","state":1,"DeviceNo":"reader_three","name":"内科门诊二","x":-0.01051425927936087, "y": 0.016608238220214847, "spatialReference": {"wkid": 3395 },"layerIDArr":[],"room":[] },
                {"jieshao": this.huaxi_info,"img_url":"../../assets/images/hos3.jpg","state":0,"DeviceNo":"reader_two","name":"内科门诊三","x": -0.014526843869012342, "y": 0.03014802932739258, "spatialReference": {"wkid": 3395 },"layerIDArr":[],"room":[] },
                {"jieshao": this.huaxi_info,"img_url":"../../assets/images/hos4.jpg","state":0,"DeviceNo":"L020","name":"外科门诊一","x": -0.0195908542630379, "y": 0.029311180114746097, "spatialReference": {"wkid": 3395 },"layerIDArr":[],"room":[] },
                {"jieshao": this.huaxi_info,"img_url":"../../assets/images/hos5.jpg","state":0,"DeviceNo":"L020","name":"外科门诊二","x": -0.00549316405408165, "y":0.03044843673706055, "spatialReference": {"wkid": 3395 },"layerIDArr":[],"room":[] },
            ];
    
    },
    mounted: function(){
        this.createMap();


    },
    computed: {

    },
    methods: {
        randomNum: function(min, max){
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        createMap: function(){
            this.map = L.map("map", {
                center: this.mapOptions.center,
                zoom: this.mapOptions.zoom,
                attributionControl: false,
                minZoom: this.mapOptions.minZoom,
                maxZoom: this.mapOptions.maxZoom,
                doubleClickZoom: false,
            });

            let outdoorMap = L.tileLayer(this.outdoormap_opt.url, {
                tms: true,
                minZoom:17,
                maxZoom:25
            });
            this.outdoor_layers.addLayer(outdoorMap);
            this.map.addLayer(this.outdoor_layers);

            this.rukou_render();

            // 地图点击事件
            this.map.on('click', (e)=>{
                console.log(e);
                
            });


        },
        // 渲染室内入口
        rukou_render: function(){   
            this.$http.post(process.env.API_HOST + config.url_rukou, {}, {emulateJSON:true}).then((response)=>{
                let arr_rukou = response.body;
                console.log(arr_rukou);
                let tooltip_option ={direction:"top",permanent:true,offset:[0,-9],className:"cls-outdoor-tooltip",opacity:0.9};

                for(let i=0; i < arr_rukou.length; i++){
                    if(arr_rukou[i].name!='篮球场' && arr_rukou[i].name!='彩印车间' && arr_rukou[i].name!='水处理总站' && arr_rukou[i].name!='物业楼'){
                    switch(arr_rukou[i].state){                        
                        case 0:		//正常状态设备
                            let pic= L.icon.mapkey({icon:"mki mki-home",size:25,background:false,color:"#d84d09",borderRadius: 8});
                            let popup = L.popup({className: 'popup-margin0'}).setContent(this.$refs.popup);
                                
                            let state_normal= L.marker([arr_rukou[i].x, arr_rukou[i].y],{icon:pic,id:i})
                                .bindPopup(this.$refs.rukou_popup);
                            let tooltip=state_normal.bindTooltip(`<div style='margin: 0px;color: #000000'>${arr_rukou[i].name}-<span style="font-size: 15px; color: blue">${this.randomNum(30,120)}</span> 台</div>`,tooltip_option);
                            // 鼠标经过事件
                            state_normal.on('mouseover', (e)=>{
                                state_normal.openPopup();
                                state_normal.closeTooltip();
                                
                            });
                            // popup打开事件
                            state_normal.on('popupopen', ()=>{
                                this.rukou_popShow = 'visible';
                                this.data_rukou = arr_rukou[i];
                                
                            })

                            // 鼠标点击事件
                            state_normal.on('click', (e)=>{
                                console.log(e);
                                this.goIndoor(arr_rukou[i].name);
                                
                            });

                            state_normal.on('popupclose',()=>{
                                state_normal.openTooltip();
                            })


                            this.tooltips_rukou.addLayer(tooltip);
                            this.markers_rukou.addLayer(state_normal);
                        //  break;
                    }                    
                    }
                }
                this.tooltips_rukou.addTo(this.outdoor_layers);
                            
            }, (response)=>{
                console.log('室内入口数据获取失败');
                return response.json();

            });            

        },

        // 进入室内
        goIndoor: function(param){
            
            //let quyu_name = param._tooltip._container.innerText;
            //this.floor = quyu_name.substring(0, quyu_name.indexOf('-')) + '一楼';
            this.room = param;

            this.isIndoor = true;
            this.map.setMinZoom(13);
            this.map.setMaxZoom(17);
            this.map.panTo([-0.015707015794464818,0.02124309539794922]);
            this.map.setZoom(15);
            this.map.removeLayer(this.outdoor_layers);  //移除室外地图
            
            this.indoor1 = L.tileLayer.wms(config.mapurl_indoor.indoor1, {
                layers: 'floor1',
                format: 'image/png'
            });


            this.indoor2 = L.tileLayer.wms(config.mapurl_indoor.indoor1, {
                layers: 'floor_1' + '',
                format: 'image/png'
            });

            this.indoor1_layers.addLayer(this.indoor1);
            this.indoor2_layers.addLayer(this.indoor2);

            this.indoor1Pop_render();   // 一楼pop渲染
            this.map.addLayer(this.indoor1_layers);
        },
        goIndoor1: function(){
            this.map.setMinZoom(13);
            this.map.setMaxZoom(17);
            this.map.setView([-0.015707015794464818,0.02124309539794922],15);
            this.map.addLayer(this.indoor1_layers);
        },
        indoor1Pop_render(){    // 楼层1popup渲染
           if(this.indoor1_layers.getLayers().length==1){ // 数据不变的情况下，如果已经渲染过了就不再重新渲染
            let layers = L.layerGroup();
            let pic= L.icon.mapkey({icon:"mki mki-home",size:25,background:false,color:"#1075af",borderRadius: 8});

            for(let i=0; i<this.indoor1_popData.length; i++){
                let tooltip_opt ={direction:"top",permanent:true,offset:[0,-2],className:"indoor1-tooltip",opacity: 1};
                let tooltip_str = `<div style='margin: 0px;color: #ffffff'>${this.indoor1_popData[i].name}-<span style="font-size: 15px; color: blue">${this.randomNum(1,15)}</span> 台</div>`
                let popup_str = `<div class="indoor1-popup" >
                    <h4>${this.indoor1_popData[i].name}</h4>
                    <div style="color: #3a4755; ">&nbsp;&nbsp;&nbsp;&nbsp;${this.indoor1_popData[i].jieshao}</div>      
                    <img alt="图片加载失败" style="" src="${this.indoor1_popData[i].img_url}">
                </div>`
                let marker= L.marker([this.indoor1_popData[i].x, this.indoor1_popData[i].y],{icon:pic,id:i})
                    .bindTooltip(tooltip_str, tooltip_opt)
                    .bindPopup(popup_str);
                
                layers.addLayer(marker);

            }

            this.indoor1_layers.addLayer(layers);
            
            }
        },

        goIndoor2: function(){
            this.map.removeLayer(this.indoor1_layers)
            this.map.setMinZoom(13);
            this.map.setMaxZoom(17);
            this.map.setView([-0.011887550268712247,0.019354820251464847], 15);
            this.map.addLayer(this.indoor2_layers);

        },
        indoor2Pop_render(){    // 楼层2popup渲染

        },

        // 楼层导航栏点击函数
        gofloor: function(e){
            if(e.target.dataset.fl!=this.floor_num){
                // 移除所有图层
                this.map.eachLayer((layer)=>{
                    this.map.removeLayer(layer);
                });

                switch(e.target.dataset.fl){
                    case '一楼':
                        this.floor_num = '一楼';
                        this.goIndoor1();
                        break;
                    case '二楼':
                        this.floor_num = '二楼';
                        this.goIndoor2();
                        break;
                    case '三楼':
                        this.floor_num = '三楼';
                        break;
                    case '四楼':
                        this.floor_num = '四楼';
                        break;

                }

            }
            
        },

        back: function(){
            // this.indoor1_layers.clearLayers();
            // 移除所有图层
            this.map.eachLayer((layer)=>{
                this.map.removeLayer(layer);
            });
            this.isIndoor = false;
            this.map.setMinZoom(this.mapOptions.minZoom);
            this.map.setMaxZoom(this.mapOptions.maxZoom);
            this.map.panTo(this.mapOptions.center);
            this.map.setZoom(this.mapOptions.zoom);
            
            this.map.addLayer(this.outdoor_layers);


        },
        goEqlist: function(){    // 跳转至设备查询页面
            this.$router.push({path:'eqList'});


        }

        




    },



}
</script>

<style lang="scss" >
#map{
    background: #ffffff;

    // 地图样式
    .indoor1-tooltip{
        //background-color: #e41a04;
        background: linear-gradient(#65b6f8,#4494c2);
    }
    .indoor1-popup{
        padding: 10px;
        padding-top: 0; 
        h4{
            padding-bottom: 5px;
            margin-bottom: 10px;
            border-bottom: 1px solid rgb(216, 216, 216);
        }
        img{
            margin-top: 5px;
            width: 290px;height: 180px;
            // background: url('../../assets/images/hos1.jpg') no-repeat center ;
            // background-size: 100% 100%;
        }

    }

// leaflet插件
    .popup-margin0{     // popup中margin为0
        .leaflet-popup-content{ // popup样式
            margin: 0!important;
        }
    }

        .leaflet-popup-content{ // popup样式
            margin: 0!important;
        }


    .nameTooltip{
        padding: 0px 5px 0px 5px;
        margin: 0;
        width: auto;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 3px;
        color: white;
        background: linear-gradient(#6fb979,#3f934b);
    }

    .cls-outdoor-tooltip{
        padding: 0px 5px 0px 5px;
        margin: 0;
        width: auto;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 3px;
        color: #000000;
        /*background: linear-gradient(#2d9cdc,#007dc4);*/
        /*background: linear-gradient(#d7b600,#e78d00);*/
        background: linear-gradient(#ffffff,#bcbcbc);
        box-shadow: 3px 3px 4px rgba(0,0,0,.4);
    }

    /*医院图标popup样式*/
    .regionPopup{
        width: 180px;height: auto;
        visibility: hidden;
    }
    .regionPopup_title{
        font-size: 15px; border-collapse:collapse;text-align: center; 
        color: #553814;font-weight: bold; height: 40px;line-height: 40px; 
        background: linear-gradient(#d6762c,#ee9e3b);
        border-radius: 10px 10px 0 0;
    }
    .regionPopup_tab{
        color: #444444; border-collapse:collapse;font-size: 13px; 
        width: 100%;height: auto;background-color: #def0f2;
        border-radius:0 0 10px 10px;
    }
    .regionPopup_tab a{
        text-decoration: none;
        font-size: 15px;
    }
    .regionPopup_tab tr{
        border-bottom: 2px solid white;height: 27px;
    }
    .regionPopup_tab tr:last-child{
        height: auto;text-align: center;
        border: none;
    }			
    .regionPopup_tab tr td:first-child{
        width: 50%;text-align: center;
        border-right: 2px solid white;
    }
    .regionPopup_tab tr td:last-child{
        text-align: center;
        border-left: 2px solid white;
    }
    .regionPopup_tab tr:last-child td{
        width: 50%;height:28px; text-align: center;
        vertical-align: middle;border: none;
    }
    .regionPopup_tab tr:last-child button{
        //color: #f6efdf;
        color: #346bbd;
        //font-weight: 600; 
        width: 72px;height: 23px;
        border-radius: 5px;background: linear-gradient(#faaf72,#f9a45f);
    }

    // 楼层导航
    .floor-nav{
        $bd-radius: 10px;
        font-size: 15px;
        z-index: 998;
        position: absolute;
        right: 1%; top: 10%;
        width: 75px;
        background: #fafafa;
        border-bottom-left-radius: $bd-radius;
        border-bottom-right-radius: $bd-radius;
        .btn-nav{
            height: 35px;
            text-align: center;
            line-height: 35px;
            border: 1px solid rgb(220, 223, 230);
            border-top: none;
        }
        .btn-nav:first-child{
            border-top: 1px solid rgb(220, 223, 230);
            border-top-left-radius: $bd-radius;
            border-top-right-radius: $bd-radius;
        }
        .btn-nav:last-child{
            border-bottom-left-radius: $bd-radius;
            border-bottom-right-radius: $bd-radius;
        }
        .btn-nav:hover{
            color: rgba(62, 152, 241,.8);
            background: rgba(62, 152, 241,.2);
        }


    }

    // 室内地图标题
    .floor-marker{
        z-index: 999;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%,0);
        color: white;
        text-align: center;
        width: 40%;
        padding: .4rem;
        background: linear-gradient(#66b1f3,#337ab7);
        font-size: 16px;
        border-radius: 20px;
    }



}
		

</style>
