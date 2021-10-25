window.addEventListener('load', function myDisplay() {
  var cvs = document.querySelector('.mycanvas')
  if (cvs.getContext) {
    var ctx = cvs.getContext('2d')
    console.log(ctx)
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(0, 0, 640, 480)
    ctx.moveTo(0, 0)
    ctx.lineTo(320, 240)
    ctx.stroke()
  }
})
