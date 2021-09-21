var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var context = canvas.getContext('2d')

//square
context.fillStyle = 'red'
context.fillRect(100, 100, 100, 100) // x, y, width, height

//line
context.beginPath()
context.moveTo(100, 300)
context.lineTo(000, 100)
context.strokeStyle = 'red'
context.stroke()

//arc
context.beginPath()
context.arc(300, 300, 30, 0, Math.PI * 2, false)
context.stroke()


for (let i = 0; i < 10; i++) {
    let randX = Math.random() * window.innerWidth
    let randY = Math.random() * window.innerHeight
    context.beginPath()
    context.arc(randX, randY, 30, 0, Math.PI * 2, false)
    context.strokeStyle = 'blue'
    context.stroke()
}
