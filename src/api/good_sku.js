import request from '@/utils/request'

export function getSameSku(goodId) {
  return request({
    url: '/good_sku/list_same',
    method: 'get',
    params: { goodId }
  })
}
