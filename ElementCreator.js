import * as constants from './constants.js'

export default class ElementCreator{
    constructor(height, wight){
        this.maxHeight = height
        this.maxWight = wight
        this.divElem = document.createElement('div')
        this.divElem.classList.add('an')
        this.positionX = this.randomPx(this.maxWight)
        this.positionY = this.randomPy(this.maxHeight)
        this.speedX = this.randomV()
        this.speedY = this.randomV()
        document.body.appendChild(this.divElem)
    }
    randomPx = (wight) => Math.floor(Math.random() * wight)

    randomPy = (height) => Math.floor(Math.random() * height)
    // + 1 for speed != 0 ,  (Math.random() * 2 - 1) for direction
    randomV = () => Math.floor(Math.random() * constants.MAX_SPEED + 1) * (Math.random() * 2 - 1)

    run = () => {
        if(this.positionX > this.maxWight) this.speedX = -this.speedX
        else if(this.positionX < 0) this.speedX = -this.speedX
        if(this.positionY > this.maxHeight) this.speedY = -this.speedY
        else if(this.positionY < 0) this.speedY = -this.speedY
        this.divElem.style.left = this.positionX + 'px'
        this.divElem.style.top = this.positionY + 'px'
        this.positionY += this.speedY
        this.positionX += this.speedX
    }

} 