var canvas = document.getElementById('circleFactory');
var pen = canvas.getContext('2d');
var x = canvas.width;
var xVel = 5;
var y = canvas.height / 2;
var radius = 8;
var color = '#abc123';
var flashLight = canvas.getContext('2d');
var flashLightImage = document.getElementById('FL')
flashLightImage.style.transform = 'scaleX(-1)';



const draw = ()=>{
    if(canvas.getContext){
        pen.beginPath();
        pen.arc(x, y, radius, 0, 2 * Math.PI, false);
        pen.lineWidth = 3;
        pen.strokeStyle = color;
        pen.stroke();
        pen.fillStyle = color;
        pen.fill();
    }
}

const move = () =>{
    for(let i = 0; i < 10; i++){
        x = x - 10;
        radius = radius + 2;
        draw();
    }

  
}

