window.onload = () => {
  const Komp = window.Komp
  const h = Komp.h
  const root = document.querySelector('.app')

  Komp.render(h('div', { color: 'red' }, [h('h1', { color: 'blue' }, [h('b', {}, 'OI')])]), root)
}
