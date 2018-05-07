<template>
  <div class="food-list">    
     <div v-for="list in lists" :key="list.id">
         <img :src="list.pic" alt="">
         <h4>{{list.name}}</h4>
         <p> {{list.content}}</p>
         <p><strong>用餐人数</strong>:  {{list.peoplenum}}</p>
         <p><strong>特点</strong>:  {{list.tag}}</p>
         <router-link :to="{name:'Detail',query:{id:list.id}}">查看详情</router-link>
     </div>
     <button class=" btn btn-danger btn-block" @click="change()" :class="{disabled:isLoading}">{{btnTxt}}</button>
  </div>
</template>
<script>
import {appkey} from '../utils/config'
import {getFoodsByPage} from '../service/foods'
export default {
  name:'FoodList',
  data(){
      return {
          classid:1,
          num:10,
          start:0,
          lists:[],
          isLoading:false,
          btnTxt:'加载更多'
      }
  },
  created() {
      this.classid = this.$route.query.classid; // 获取分类id
      getFoodsByPage(
         this.classid,
         this.num,
         this.start,
      ).then((res) => {
          console.log(res)
          this.lists = res.data.result.list;
      })
  },
  methods:{
      change(){
        this.isLoading = true;
        this.btnTxt = '正在加载';
        getFoodsByPage(this.classid,this.num,this.start).then((res) => {
        this.btnTxt = '加载更多',
        this.isLoading = false,
        this.lists = this.lists.concat(res.data.result.list);
        this.start = this.start+(res.data.result.num*1);                                                                                                                                           
        })
        }
    }
}
</script>
<style>
*{
    font-family: '微软雅黑'
}
img{
    border-radius: 50%;
    border:5px solid orangered;
    display: block;
    width: 300px;
    margin: 10px auto;
}
 h4{
     text-align: center;
     color: orange;
     margin:10px 0;
     font-weight: bold;
 }
 p{
     text-indent: 32px;
     text-align: left;
 }
</style>


