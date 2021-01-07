import * as constants from './constants.js'


export default class Sphere{
    constructor(height, wight, mass){
        this.maxHeight = height
        this.maxWight = wight
        this.mass = mass
        this.container = document.createElement('div')
        this.container.classList.add('sphere')
        document.body.appendChild(this.container);
        this.positionX = this.randomPx(this.maxWight)
        this.positionY = this.randomPy(this.maxHeight - 100)
        this.speedX = this.randomV(Math.random() * 30) 
        this.speedY = this.randomV(0)
        this.run()
    }

    randomPx = (wight) => Math.floor(Math.random() * wight) 

    randomPy = (height) => Math.floor(Math.random() * height)
    // + 1 for speed != 0 ,  (Math.random() * 2 - 1) for direction
    randomV = (a) => Math.floor(Math.random() * constants.MAX_START_SPEED + 1) * (Math.random() * 2 - 1) + a * (Math.random() * 2 - 1)

    run = () => {
        setInterval(this.move, 25)  
    }

    move = () => {
        if(this.positionY < this.maxHeight){
            this.speedY += constants.ACCELERATION_OF_GRAVITY
        }
        if(this.positionX > this.maxWight) {
            this.speedX = -this.speedX
        }
        else if(this.positionX < 0) {
            this.speedX = -this.speedX
        }
        if(this.positionY > this.maxHeight) {
            this.speedY = 0
            this.speedX = 0
        }
        else if(this.positionY < 0) {
            this.speedY = constants.ACCELERATION_OF_GRAVITY
        }
        this.container.style.left = this.positionX + 'px'
        this.container.style.top = this.positionY + 'px'
        this.positionY += this.speedY
        this.positionX += this.speedX
    }
}