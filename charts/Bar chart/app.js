const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 300
canvas.style.background = '#cecece'
data = [ 10, 100, 200, 50, 80, 140, 23, 77, 54, 80, 92, 11, 200, 50, 199, 10]


let height = 0
let x = 0
let y = 300


context.fillStyle = 'red'


for(i = 0; i < data.length; i++){
    let width = (canvas.width/ data.length) -5 // da a margin entre eles
    height = -data[i]// inverte o sinal
    context.fillRect(x, y, width, height)
    x = x + (canvas.width / data.length)// posiciona para pegar todos o canvas
}