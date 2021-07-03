import request from '@/utils/request'

export function getList(pageNo, pageSize) {
  return request({
    url: '/comment/list',
    method: 'get',
    params: { pageNo, pageSize }
  })
}

export function deleteCommentById(commentId) {
  return request({
    url: '/comment/del',
    method: 'post',
    data: { commentId }
  })
}

export function deleteCommentsById(commentIds) {
  return request({
    url: '/comment/del_all',
    method: 'post',
    data: commentIds
  })
}
