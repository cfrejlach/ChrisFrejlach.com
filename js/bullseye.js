function drawBullseye(){
    var canvas = document.getElementById('canvasElement');
    var canvasContext = canvas.getContext('2d');
    var startPt = 0;
    var endPt = 2 * Math.PI;
    canvasContext.beginPath();
    canvasContext.arc(400, 150, 100, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,255,0)";
    canvasContext.fill();
    canvasContext.closePath();
    
    canvasContext.beginPath();
    canvasContext.arc(400, 150, 70, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,245,0)";
    canvasContext.fill();
    canvasContext.closePath();
    
    canvasContext.beginPath();
    canvasContext.arc(400, 150, 35, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,235,0)";
    canvasContext.fill();
    canvasContext.closePath();
}

function changeShade() {
    var sliderValue= parseInt(document.getElementById("shades").value);
    var canvas = document.getElementById('canvasElement');
    var canvasContext = canvas.getContext('2d');
    var startPt = 0;
    var endPt = 2 * Math.PI;
    var circle2= sliderValue-10;
    var circle3 =sliderValue-20;
    
    if(sliderValue != "0"){
        canvasContext.beginPath();
        canvasContext.arc(400, 150, 100, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+sliderValue+",0)";
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 70, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+circle2+",0)";
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 35, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+circle3+",0)";
        canvasContext.fill();
        canvasContext.closePath();
        }
    }