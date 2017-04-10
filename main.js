var limites = document.getElementById("limites");
var vibora = document.getElementById("vibora");
document.addEventListener("keydown", movimiento);

var posicionX = 200;
var posicionY = 200;

function movimiento(event){
  var flecha = event.keyCode;

  switch (flecha) {
    case 37:
      posicionX -= 100;
      if (posicionX < 0) {
         alert("Oops, you lose!");
      }else
      {
        vibora.style.marginLeft = posicionX + "px";
      }
      break;

    case 38:
      posicionY -= 100;
      if (posicionY < 0) {
         alert("Oops, you lose!");
      }else
      {
        vibora.style.marginTop = posicionY + "px";
      }
      break;

    case 39:
      posicionX += 100;
      if (posicionX > 400) {
         alert("Oops, you lose!");
      }else
      {
        vibora.style.marginLeft = posicionX + "px";
      }
      break;

    case 40:
      posicionY += 100;
      if (posicionY > 400) {
         alert("Oops, you lose!");
      }else
      {
        vibora.style.marginTop = posicionY + "px";
      }
      break;
    default:
  }
}