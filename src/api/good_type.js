import request from '@/utils/request'

export function getList() {
  return request({
    url: '/good_type/list',
    method: 'get'
  })
}

export function editGood(goodType) {
  return request({
    url: '/good_type/edit',
    method: 'post',
    data: goodType
  })
}

export function addGood(goodType) {
  return request({
    url: '/good_type/add',
    method: 'post',
    data: goodType
  })
}

export function deleteGood(typeId) {
  return request({
    url: '/good_type/del',
    method: 'post',
    data: typeId
  })
}
