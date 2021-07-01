import request from '@/utils/request'

export function getList() {
  return request({
    url: '/good/list',
    method: 'get'
  })
}

export function getDetail(goodId) {
  return request({
    url: `/good/detail/${goodId}`,
    method: 'get'
  })
}

export function editGood(Good) {
  return request({
    url: '/good/edit',
    method: 'post',
    data: Good
  })
}

export function addGood(Good) {
  return request({
    url: '/good/add',
    method: 'post',
    data: Good
  })
}

export function deleteGood(goodId) {
  return request({
    url: '/good/del',
    method: 'delete',
    data: goodId
  })
}
