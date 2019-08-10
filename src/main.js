import Vue from 'vue'
import App from './App'
import router from './router'

//引mui的样式
import "../src/lib/mui/css/mui.min.css"

//引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局设置post发送时的数据格式
Vue.http.options.emulateJSON = true;


//引入mint的需要的模块
// import { Swipe, SwipeItem , Button, Lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//引入提示信息的模块
// import { Toast } from 'mint-ui';

import MintUI from 'mint-ui';
Vue.use(MintUI)
import "./lib/mui/css/style.css"



//引入模块需要的样式
import '../src/lib/mui/css/style.css'
// import '../src/lib/mui/js/index'

Vue.config.productionTip = false

//引入时间对象
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = 
  "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)

})

//引入缩略图插件
import VuePreview from 'vue-preview'
Vue.use( VuePreview)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state : {
      car : car
  },
  mutations : {
    addCar(state,shopif){

      var flag =false


      state.car.some(item=>{
        if(item.id==shopif.id){
          item.count += parseInt(shopif.count)
          flag = true
          return true
        }
      })

      if(!flag){
        state.car.push(shopif)
      }

      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataCar(state,shopif){
        state.car.some(item=>{
          if(item.id==shopif.id){
            item.count = parseInt(shopif.count)
            return true
          }
          
        })
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeCar(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataCarSele(state,info){
      state.car.some((item,i)=>{
        if(item.id==info.id){
            item.selected = info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))

    }
  },
  getters : {
      getAll (state){
        var c= 0
        state.car.forEach(item=> {
            c += item.count
        });
        return c
      },
      getallshop(state){
          var o = {}
          state.car.forEach(item=>{
            o[item.id] = item.count
          })
          return o
      },
      getCarSelected(state){
        var o={}
        state.car.forEach(item=>{
          o[item.id] = item.selected
        })
        return o;
      },
      getAllCarSel(state){
        var o={
          count : 0,
          amount : 0
        }
        state.car.forEach(item=>{
          o.count  += item.count
          o.amount += item.price * item.count

        })
        return o
      }
      
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
