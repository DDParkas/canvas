window.addEventListener('load', () => {
    //canvas
    const canvas = document.getElementById('draw')
    const context = canvas.getContext('2d')
    canvas.height = 460
    canvas.width = 790
    //painting
    let painting = false

    const startPosition = (e) => {
        painting = true
        draw(e)
    }
    const finishedPosition = () => {
        painting = false
        context.beginPath()
    }
    const draw = (e) => {
        if (!painting) {
            return
        }
        context.lineWidth = 5
        context.lineCap = 'round'

        context.lineTo(e.layerX, e.layerY)
        context.stroke()
        context.beginPath()
        context.moveTo(e.layerX, e.layerY)
        console.log(e)

    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})
