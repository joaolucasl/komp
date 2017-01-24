const fromVNode = (vNode) => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }
  const node = document.createElement(vNode.name)
  Object.keys(vNode.attr).forEach(key => node.setAttribute(key, vNode.attr[key]))

  const children = vNode.children || []
  children.forEach(child => node.appendChild(fromVNode(child)))
  return node
}


export default fromVNode
