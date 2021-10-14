 canvas = document.getElementById("canvas")
canvas.width = 500
canvas.height = 300
const context = canvas.getContext('2d')


// Código abaixo cria um objeto circulo individual
function Circle(x, y, radius = 10, speedX = 5, speedY = 5){
    this.x = x
    this.y = y
    this.radius = radius
    this.speedX = speedX
    this.speedY = speedY

    this.draw = () =>{ //desenha o circulo
        context.beginPath()
        context.strokeStyle = '#00ff00'
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        context.stroke()
        context.closePath()
    }

    this.update = () =>{ // verifica a colisao e muda o sinal da velocidade
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.speedX = -this.speedX
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.speedY = -this.speedY
        }
        this.x += this.speedX
        this.y += this.speedY 
        this.draw() //chama o metodo draw
    }
    
}



let circleArr = []

for(let i = 0; i < 100; i++){//a quantidade de loops determina a quantidade de bolinhas
    let radius = 15
    let x = Math.random() * (canvas.width - radius * 2.5) + radius//randomização do x
    let y = Math.random() * (canvas.height - radius * 2.5) + radius
    let speedX = Math.random() * 5
    let speedY = Math.random() * 5
    
    circleArr.push(new Circle(x, y, radius, speedX, speedY))//adiciona um novo circulo a cada posição do array
}




const animate = () => {
    requestAnimationFrame(animate)// faz um loop infinito
    context.clearRect(0, 0, canvas.width, canvas.height) //limpa todo o canvas
    for(let i = 0; i < circleArr.length; i++){
        circleArr[i].update()// tualiza a posição de cada bolinha e desenha ela na tela
    }
    
}

animate()
