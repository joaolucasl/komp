import diff from './vdom/diff'

const render = (vnode, root) => diff(vnode, root)

export default render
