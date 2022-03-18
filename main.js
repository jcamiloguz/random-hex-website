const getEl = (selector) => document.querySelectorAll(selector)

const randomColor = () =>
  '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')

const change = (item, text) => {
  const color = randomColor()
  item.style = `background-color:${color}`
  text.innerHTML = color
}

const items = getEl('.item')
const texts = getEl('.item__text')
const buttons = getEl('.item__button')

for (var i = 0, len = items.length; i < len; i++) {
  const item = items[i]
  const text = texts[i]
  change(item, text)
  buttons[i].addEventListener('click', () => {
    change(item, text)
  })
}
