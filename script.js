import ElementCreator from './ElementCreator.js'
import * as constants from './constants.js'

let array = []

window.onload = () => array.push(new ElementCreator(heightScreen,widthScreen))

const widthScreen = document.documentElement.clientWidth - constants.INDENT_FROM_HTMl
const heightScreen = document.documentElement.clientHeight - constants.INDENT_FROM_HTMl
const count = document.getElementById('count')

const counter = () => {
    count.innerHTML = 'Всего элементов: ' + array.length
}


const addElement = () => {
    array.push(new ElementCreator(heightScreen, widthScreen))
    counter()
}

const delElement = () => {
    document.body.removeChild(array.pop().divElem)
    counter()
}

document.getElementById('add').addEventListener('click', addElement);
document.getElementById('del_last').addEventListener('click', delElement);



setInterval(() => {
    array.forEach(e => e.run())
}, 10)