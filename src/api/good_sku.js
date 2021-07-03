import request from '@/utils/request'

export function getSameSku(goodId) {
  return request({
    url: '/good_sku/list_same',
    method: 'get',
    params: { goodId }
  })
}

export function deleteSku(skuId) {
  return request({
    url: '/good_sku/del',
    method: 'post',
    data: { skuId }
  })
}

export function getSkuById(skuId) {
  return request({
    url: '/good_sku/find',
    method: 'get',
    params: { skuId }
  })
}

export function editSku(goodSku) {
  return request({
    url: '/good_sku/edit',
    method: 'post',
    data: goodSku
  })
}
export function addSku(goodSku) {
  return request({
    url: '/good_sku/add',
    method: 'post',
    data: goodSku
  })
}

