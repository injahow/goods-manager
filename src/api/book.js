import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/book/list',
    method: 'get',
    params
  })
}
