import request from '@/utils/request'

export function getList() {
  return request({
    url: '/good_type/list',
    method: 'get'
  })
}

export function getNameList() {
  return request({
    url: '/good_type/list_name',
    method: 'get'
  })
}

export function getGoodTypeById(typeId) {
  return request({
    url: '/good_type/find',
    method: 'get',
    params: { typeId }
  })
}

export function editGoodType(goodType) {
  return request({
    url: '/good_type/edit',
    method: 'post',
    data: goodType
  })
}

export function addGoodType(goodType) {
  return request({
    url: '/good_type/add',
    method: 'post',
    data: goodType
  })
}

export function deleteGoodType(typeId) {
  return request({
    url: '/good_type/del',
    method: 'post',
    data: { typeId }
  })
}
