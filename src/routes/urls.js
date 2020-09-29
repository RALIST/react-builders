import * as pages from '../pages'
const main = { name: 'Главная', url: '/', component: pages.MainPage }
const building = {name: 'Строительство', url: '/stroitelstvo-domov', component: pages.Building }
const project = {name: 'Проектирование', url: '/proektirovanie-domov', component: null }
const communications = { name: 'Комуникации', url: '/kommunikacii-dlya-doma', component: null }
const contacts = {name: 'Контакты', url: '/kontakty', component: null  }
const services = { name: 'Вутренняя отделака', url: '/vnutrenya-otdelka-doma', component: null }

const urls = [
  main,
  building,
  project,
  communications,
  services,
  contacts
  ]

export default urls;
