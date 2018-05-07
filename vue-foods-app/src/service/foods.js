
import {post,get} from '../utils/request';
import {appkey} from '../utils/config';
import qs from 'qs';
/**
 * 获取所有的菜品分类
 */
export function getAllTypes() {
    return get('http://api.jisuapi.com/recipe/class', {
        appkey,
    });
}
/**
 * 根据分类获取数据
 * @param {*} classId 分类id
 * @param {*} start 开始位置
 * @param {*} num 获取的数量
 */
export function getFoodsByPage(classid,start,num) {
    const data = {
        appkey,
        classid,
        start,
        num
    }
    return post('http://api.jisuapi.com/recipe/byclass',qs.stringify(data));
}
/**
 * 根据id获取菜品详情
 * @param {*} id 菜谱id
 */
export function getFoodDetail(id) {
    const data = {
        appkey,
        id,
    };
    return post('http://api.jisuapi.com/recipe/detail',qs.stringify(data));
}
/**
 * 根据关键字检索数据
 * @param {*} keyword 查询的关键字
 * @param {*} num 获取的数量
 */
export function getFoodsByKeyWord(keyword,num) {
    // 服务器端接受的参数必须为 application/xx-www-form-urlencode的格式
    // 使用一下方法处理 使用qs插件进行处理
    // 使用qs插件把参数转换为url编码的形式进行传递
    // axios默认传递的参数使用json格式
   const data = {
       appkey,
       keyword,
       num,
   };
    return post('http://api.jisuapi.com/recipe/search',qs.stringify(data));
}