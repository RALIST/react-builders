import * as pages from '../pages'

const main = {
  name: 'Главная',
  url: '/',
  component: pages.MainPage }
const building = {
  name: 'Строительство',
  url: '/stroitelstvo-domov',
  component: pages.Building
}
const project = {
  name: 'Проектирование',
  url: '/proektirovanie-domov',
  component: pages.Projects
}
const communications = {
  name: 'Комуникации',
  url: '/kommunikacii-dlya-doma',
  component: pages.Communications
}
const contacts = {
  name: 'Контакты',
  url: '/kontakty',
  component: pages.Contacts
}
const services = {
  name: 'Вутренняя отделака',
  url: '/vnutrenya-otdelka-doma',
  component: pages.Services
}

const urls = [
  main,
  building,
  project,
  communications,
  services,
  contacts
  ]

export default urls;
