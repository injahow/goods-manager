import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/good/list',
    method: 'get',
    params
  })
}

export function editGood(params) {
  return request({
    url: '/good/edit',
    method: 'post',
    params
  })
}
