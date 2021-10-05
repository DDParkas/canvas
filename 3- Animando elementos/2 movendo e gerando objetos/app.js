 canvas = document.getElementById("canvas")
canvas.width = 500
canvas.height = 300
const context = canvas.getContext('2d')

function circle(x, y, r = 20, c = "blue", sX = 5, sY = 5){

    this.circleX = x
    this.circleY = y
    this.radius = r
    this.color = c
    this.speedX = sX
speedY = sY

     draw = () =>{
        context.beginPath()
        context.arc(circleX,circleY, radius, 0,  Math.PI * 2, false)
        context.strokeStyle = color
        context.stroke()
    }
     update= () =>{
        
        requestAnimationFrame(update)
        context.clearRect(0, 0, canvas.width, canvas.height)
        if (circleX + radius > canvas.width || circleX + radius < 30) {
            speedX = -speedX //recebendo o valor negativo da a direção se inverte
            //x -= x // subtraindo pelo valor dele mesmo o x vira zero e ele volta para o começo
        }
        if (circleY + radius > canvas.height || circleY + radius < 30) {
            speedY = -speedY
        }
        circleX += speedX
        circleY += speedY
        draw()
        
    }
    update()
    
    
}


for(i = 0; i <= 10; i++){
   circle(Math.random() * canvas.width, Math.random() * canvas.height)
    
}
