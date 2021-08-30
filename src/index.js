import menu from './menu.json'
import menuCard from './template/menuList.hbs'

const menuList = document.querySelector('.js-menu')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}
const checkBodyThem = document.body.classList
function bildMenu(item) {
  return menuList.insertAdjacentHTML('beforeend', menuCard(item))
}
bildMenu(menu)
const input = document.querySelector('#theme-switch-toggle')

checkBodyThem.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'))

if (checkBodyThem.value === Theme.DARK) {
  input.checked = true
}
function changeTheme(event) {
  if (event.target.checked) {
    checkBodyThem.replace(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('theme', Theme.DARK)
    return
  }
  checkBodyThem.replace(Theme.DARK, Theme.LIGHT)
  localStorage.setItem('theme', Theme.LIGHT)
}

input.addEventListener('change', changeTheme)
