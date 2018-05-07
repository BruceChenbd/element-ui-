<template>
  <div class="home">
    <div class="row food" v-for="item in typeList" :key="item.classid">
      <div class="col-md-12">
            <router-link :to="{name:'FoodList',query:{classid:item.classid}}"  class="parent">{{item.name}}</router-link>
            <div class="children">
               <router-link :to="{name:'FoodList',query:{classid:c.classid}}"  v-for="c in item.list" :key="c.classid" class="child">{{c.name}}</router-link>
            </div>
      </div>   
    </div>
  </div>
</template>

<script>
import {appkey} from '../utils/config'
import {getAllTypes} from '../service/foods'
export default {
  name: 'Home',
  data () {
    return {
     typeList:[]
    }
  },
  created() {
    getAllTypes({
     appkey,
    }).then((res) => {
      console.log(res) 
      this.typeList = res.data.result;                                                                                                                                           
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food{
  border: 1px solid #aaa;
  padding: 0.5rem;
}
.food .parent{
  font-size: 20px;
  color: orangered;
}
.food .children{
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.food .child{
  color: #333;
  margin: 5px;
}
</style>
