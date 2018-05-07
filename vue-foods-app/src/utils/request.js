import  axios from 'axios';

/**
 * 发送get请求
 * @param {*} url 请求的url地址
 * @param {*} data 请求时传递的参数
 */
export const get = (url,data) => axios.get(url,{params:data});

/**
 * 发送post请求直接传递data不用改成对象
 * @param {*} url 请求的url地址
 * @param {*} data 请求时传递的参数
 */

export const post = (url,data) => axios.post(url,data);

