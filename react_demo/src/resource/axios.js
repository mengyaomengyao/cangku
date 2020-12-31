import axios from 'axios'
import { message } from 'antd';
var instance = axios.create()
instance.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded'

instance.defaults.timeout = 8000
// instance.defaults.baseURL =	'https://www.fastmock.site/mock/fa8a771554dfd181a46f8e1b742dd651/test'

// 添加请求拦截器
instance.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config
	},
	function (error) {
        // 对请求错误做些什么
        message.info('This is a normal message')
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export function gets(url, params,isMock=true) {
    if(isMock){
        instance.defaults.baseURL = 'https://www.fastmock.site/mock/94867ed68bcfbfc0571a59bb336319f2/qw';
    }else{
        // 这里写你实际的后台地址
        // instance.defaults.baseURL = 'xxxx.php'
    }
	return instance
		.get(url, params)
		.then((res) => {
			return res
		})
		.catch((error) => {
			return error
		})
}

