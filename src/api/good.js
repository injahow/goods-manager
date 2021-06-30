import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/good/list',
    method: 'get',
    params
  })
}
