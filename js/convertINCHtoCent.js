function changeInch(){
    document.getElementById("results").innerHTML= "Inches";
}

function changeCent(){
    document.getElementById("results").innerHTML= "Centimeters";
}


function convert(){
    var input = document.getElementById('input').value;
    var units = document.getElementById('results').innerHTML;
    var answer= 0;
    if(units == "Inches"){
        answer = input * 2.54;
    }
    else if(units == "Centimeters"){
        answer = input / 2.54;
    }
    else{
    window.alert("Select Units!");
  }
    document.getElementById("ans").innerHTML = answer;
    console.log(answer);
}