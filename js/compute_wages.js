function compute(){
//TASK 1:  COLLECT INPUT FROM THE WEBPAGE
    var mRate= document.getElementById('rate').value;
    var mHours = document.getElementById('hours').value;
    
//TASK2: DETERMINE NORMAL AND OVERTIME RATE OF PAY 
     var normal;
     var overtime;
     if(mHours > 40){
         normal = 40* mRate;
         overtime = (mHours - 40)* mRate * 1.5;
     }
    else{
        normal = mHours *mRate;
        overtime= 0;
    }
    
//TASK 3: DISPLAY ALL OUTPUT
    document.getElementById('normalHrsDisplay').innerHTML= 
        '$' + normal;
    document.getElementById('overtimeDisplay').innerHTML= 
        '$' + normal;
    document.getElementById('totalDisplay').innerHTML= 
        '$' + normal;
}
