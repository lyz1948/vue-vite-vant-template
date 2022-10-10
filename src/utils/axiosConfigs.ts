import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  withCredentials: false, // 跨域请求时是否需要使用凭证
  timeout: 30000,
  validateStatus() {
    return true
  },

  transformResponse: [
    data => {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    },
  ],
})

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // // 获取 token ，并将其添加至请求头中
    // let token = store.state.user.token
    // if (token) {
    //   config.headers.Authorization = token
    //   // config.headers.Authorization = 'Bearer ' + token;
    // }

    return config
  },
  (error: any) => {
    // 错误抛到业务代码
    error.data = {
      message: '服务器异常，请联系管理员！',
    }

    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response:', response)
    const status = response.status
    const decide = status < 200 || status >= 300
    if (decide) {

      // if (typeof response.data === 'string') {
      //   response.data = { message }
      // } else {
      //   response.data.message = message
      // }

      return Promise.reject(response.data)
    }

    return response
  },
  (error: any) => {
    if (axios.isCancel(error)) {
      // TODO:
    } else {
      const message = '请求超时或服务器异常，请检查网络或联系管理员！'
    }

    return Promise.reject(error)
  }
)

export default service
