import request from '@/utils/request'

export function getList(pageNo, pageSize) {
  return request({
    url: '/good/list',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function getGoodById(goodId) {
  return request({
    url: `/good/${goodId}`,
    method: 'get'
  })
}

export function getDetail(goodId) {
  return request({
    url: `/good/detail/${goodId}`,
    method: 'get'
  })
}

export function editGood(good) {
  return request({
    url: '/good/edit',
    method: 'post',
    data: good
  })
}

export function addGood(good) {
  return request({
    url: '/good/add',
    method: 'post',
    data: good
  })
}

export function deleteGood(goodId) {
  return request({
    url: '/good/del',
    method: 'post',
    data: goodId
  })
}