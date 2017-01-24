import DOMNode from '../dom/node'

const diff = (newNode, root /* , oldNode = vNode()*/) => {
  const dom = DOMNode(newNode)
  root.parentNode.replaceChild(dom, root)
}

export default diff
