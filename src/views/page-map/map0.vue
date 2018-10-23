<template>
  <div class="rootdiv">
    <l-map ref="map" style="height: 100%;" 
    :zoom="mapOptions.zoom" 
    :center="mapOptions.center" 
    :minZoom="mapOptions.minZoom" 
    :maxZoom="mapOptions.maxZoom">
      <l-tile-layer :url="outdoormap_opt.url" :tms="outdoormap_opt.tms" :attribution="outdoormap_opt.attribution" ></l-tile-layer>
      <l-marker :lat-lng="marker">
        <l-popup :content="text"></l-popup>
      </l-marker>
    </l-map> 
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import * as L from 'leaflet'
import {config} from '../../components/base_config.js'

export default {
  name: 'vuemap',
  zoomControl:false,
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      mapOptions:{
        zoom: 13,
        center: L.latLng(34.264985092894754,108.87002792029007),
        minZoom:17,
        maxZoom:25,

      },
      //url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      outdoormap_opt:{
        attribution: '',
        url: config.mapurl_outdoor,
        tms: true
      },
      marker: L.latLng(34.264985092894754,108.87002792029007),
      text: '<h2>this is a marker</h2>',
      doubleClickZoom: false,
    }
  },
  computed: {
    map: function(){  // 获取map实例
      return this.$refs.map.mapObject;
    }
  },
  created:function(){
    

  },
  mounted:function(){
    this.map.removeControl(this.map.attributionControl);  // 移除默认的leaflet文字
    console.log(config.mapurl_outdoor);
    
    let outdoorMap = L.tileLayer(this.outdoormap_opt.url, {
        tms: true,
        minZoom:17,
        maxZoom:25
    }).addTo(this.map);
    

  }
}
</script>

<style lang="scss" scoped>
.rootdiv{


}

</style>

