<template>
  <div class="detail">
     <div class="row">
         <h2>{{foodList.name}}原材料</h2>
         <div class="material">
            <div v-for="mat in foodList.material" :key="mat.type">
                <span>{{mat.mname}}</span>
                <span>{{mat.amount}}</span>
            </div>     
         </div>
         <h3>烹饪时间： {{foodList.cookingtime}}</h3>
         <div class="step">
            <div  v-for="pro in foodList.process" :key="pro.classid" class="s" > 
             <img :src="pro.pic" alt="">
             <p>{{pro.pcontent}}</p>           
            </div>
         </div>
         <img :src="foodList.pic" alt="">
         <h3>{{foodList.content}}</h3>
         <h2>特点： {{foodList.tag}}</h2>
     </div>
  </div>
</template>
<script>
import { appkey } from "../utils/config";
import { getFoodDetail } from "../service/foods";
export default {
  data() {
    return {
      id: "",
      foodList: []
    };
  },
  created() {
    (this.id = this.$route.query.id),
      getFoodDetail(this.id).then(res => {
        console.log(res);
        this.foodList = res.data.result;
      });
  }
};
</script>
<style>
.material {
  height: 300px;
}
 h2{
    text-align: center;
    color: orangered;
}
.material span{
    color: green;
}
p{
    text-align: center;
}
.s{
    margin: 40px 0;
}
h3{
    text-align: center;
}
</style>


