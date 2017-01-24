import vNode from './vnode'

// const h = (tag, attr, ...children) => {
//   if (typeof tag === 'function') {
//     const instance = tag()

//     if (typeof instance.render === 'function') {
//       return h(instance.render())
//     }
//   }

//   if (typeof tag === 'string') {
//     return vNode(tag, attr, children)
//   }
// }

const h = (tag, attr, children) => {
  if (children && Array.isArray(children) && children.length > 0) {
    return vNode(tag, attr, children)
  }
  if (typeof children === 'string') {
    return vNode(tag, attr, [children])
  }
  return vNode(tag, attr, [])
}

export default h
