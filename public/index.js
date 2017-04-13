window.onload = function(){

  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');
  
  var xCoord = 0;
  var yCoord = 0;

  context.beginPath();
  context.moveTo(xCoord, yCoord);
  console.log(context);

  var move = function(x, y){
    xCoord += x;
    yCoord += y;

    if(xCoord < 0){
      xCoord = 0;
    } else if (xCoord > 600) {
      xCoord = 600;
    }

    if(yCoord < 0){
      yCoord = 0;
    } else if (yCoord > 500) {
      yCoord = 500;
    }

    context.lineTo(xCoord, yCoord);
    context.stroke();
  }

  window.addEventListener('keydown', function(event){
    console.log(event);

    switch(event.key){
      case "ArrowUp":
      console.log("up")
        move(0, -10)
        break
      case "ArrowDown":
      console.log("down")
        move(0, 10)
        break
      case "ArrowRight":
      console.log("right")
        move(10, 0)
        break
      case "ArrowLeft":
      console.log("left")
        move(-10, 0)
        break
      default:
        break
    }
  })

}

