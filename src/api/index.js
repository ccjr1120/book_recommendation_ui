import axios from './axios'

//get axios.get(url, {params:params})
//post axios.post(url, params)

/**
 * 用户登录
 * @param params 用户名和密码
 */
export const login = params => axios.post('/login', params);

/**
 * 登出
 */
export const logout = ()=>axios.get('/logout');

/**
 * 获取在首页展示的书籍数据
 * @param params 存放页码，页大小和时间、随机、评分的三选一
 */
 export const getHomeBooks = params => axios.get('/books', {params: params})

 /**
  * 获取用户收藏的书籍
  * @param params 页码，页大小
  */
 export const getCollectBooks = params => axios.get('/user/collection', {params:params})
