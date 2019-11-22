function Calculate(){
  var miles = document.getElementById("distance").value;
  var time = document.getElementById("pace").value;
  var sep = time.split(":");
 
  var hour = 0;
  var minTracker = 0;
  for(var i= 1; i <= miles; i++){
    var min = sep[0];
    var sec = sep[1]; 
    min =min*i;
    sec= sec*i;
    //sec PAST 60
    if(sec/60 >= 1){
      minTracker = Math.floor(sec/60);
      sec = (sec%60);
        console.log(sec);
    }
    //sec passed 60
    if(min/60 >=1){
      hour=Math.floor(min/60);
      min = (min +minTracker)%60;
    }
    else{
      min = min + minTracker;

    }
    if(hour != 0){
        var ans = hour +" : "+min+" : "+sec;
        newRow(i,ans);
    }
    else{
        var ans = min +" : "+ sec;
        newRow(i,ans);
    }
    //
  if(1 > (miles - i) && (miles - i) > 0){
    min = sep[0];
    sec = sep[1];
    sec=sec*miles;
    minTracker = Math.floor(sec/60);
    sec = sec%60
    min=(min*miles+minTracker)%60;
    var ans = min +" : "+ sec;
    newRow(miles,ans);
      
     if(hour != 0){
        var ans = hour +" : "+min+" : "+sec;
        newRow(miles,ans);
    }
    else{
       sec = sec * i;
        var ans = min +" : "+ sec;
        newRow(miles,ans);
    }
  }
      
}
}

//new table row
function newRow(count, time) {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = count;
  cell2.innerHTML = time;
}