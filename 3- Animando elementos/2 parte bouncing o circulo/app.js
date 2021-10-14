const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

var x = Math.random() * canvas.width //randomização do x
var y = Math.random() * canvas.height
var speedX = 5
var speedY = 5
var radius = 30
const animate = () => {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2, false)
    context.strokeStyle = 'red'
    context.stroke()
    if (x + radius > canvas.width || x + radius < 30){
        speedX = -speedX //recebendo o valor negativo da a direção se inverte
        //x -= x // subtraindo pelo valor dele mesmo o x vira zero e ele volta para o começo
    }
    if (y + radius > canvas.height || y + radius < 30){
        speedY = -speedY
    }
        x += speedX
        y += speedY
    
    

    
    console.log(speedX)
}
animate()
