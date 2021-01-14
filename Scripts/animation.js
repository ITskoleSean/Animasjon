var canvas = document.getElementById('circleFactory');

function draw(){
    if(canvas.getContext){
        var pen = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 70;

        pen.beginPath();
        pen.arc(x, y, radius, 0, 2 * Math.PI, false);
        pen.lineWidth = 3;
        pen.strokeStyle = '#5257f2';
        pen.stroke();
        pen.fillStyle = '#5257f2'
        pen.fill();
    }
}