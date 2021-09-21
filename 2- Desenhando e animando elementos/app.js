const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')


context.beginPath()
context.arc(200, 200, 30, 0, Math.PI * 2, false)
context.strokeStyle = 'blue'
context.stroke()

var x = 200
var speed = 1
const animate = () => {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)
    context.beginPath()
    context.arc(x, 200, 30, 0, Math.PI * 2, false)
    context.strokeStyle = 'red'
    context.stroke()
    x += speed
    console.log("fps")
}
animate()
