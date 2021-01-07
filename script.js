import Sphere from './Sphere.js'
import * as constants from './constants.js'

const widthScreen = document.documentElement.clientWidth - constants.INDENT_FROM_HTMl
const heightScreen = document.documentElement.clientHeight - constants.INDENT_FROM_HTMl

//window.onload = () => new Sphere(heightScreen,widthScreen)

let array = []

for(let i = 0; i < 100; i++){
    array.push(new Sphere(heightScreen,widthScreen,5))
}