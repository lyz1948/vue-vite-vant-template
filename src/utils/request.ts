import service from './axiosConfigs'
import { IGet, IPost } from '@/types' // 接口泛型

const get: IGet = async (url, config) => {
  const response = await service.get(url, { ...config })
  return response.data.data
}

const post: IPost = async (url, params, config) => {
  const response = await service.post(url, params, { ...config })
  return response.data.data
}

// 使用 request 统一调用
const request = {
  get,
  post,
}

export default request
