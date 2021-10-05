const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 300
canvas.style.background = '#cecece'

let data = [100, 200, 400, 300, 500, 10, -500, 200, -200]
let distance = 0
const start = canvas.height/ 2 //ponto de inicio

context.beginPath()
context.moveTo(0, start) //0 em x e o ponto de start em y
// context.lineTo(50,100)
// context.lineTo(100,150)
// context.lineTo(150,50)
// context.lineTo(200,50)

for(i = 0 ; i < data.length; i++){
    distance = distance + (canvas.width / data.length) // deixa responsivo pois divide o tamanho da tela pelo tanto de posições no array  
    data[i] = -data[i] + start * 5 //inverte o sinal e multiplica por 5 para calibrar não sei porque 
   context.lineTo(distance, data[i] / 5) // divide por 5 para diminuir o tamanho do pico
}

context.strokeStyle = 'red'
context.stroke()