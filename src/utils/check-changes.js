/**
 * 判断对象是否修改，返回修改项的键
 * @param {Object} form
 * @param {Object} old_form
 */
export function compareForm(form, old_form) {
  let is_changed = false
  // const changes = []
  // 判断修改项
  for (const i in old_form) {
    // 注意引用类型 object !
    if (typeof form[i] === 'object') {
      if (form[i].toString() !== old_form[i].toString()) {
        is_changed = true
        break
      }
    } else {
      if (form[i] !== old_form[i]) {
        is_changed = true
        break
      }
    }
  }
  return {
    is_changed
  }
}
