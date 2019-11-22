window.onload = function () {
    //register an on click event for the calculate button
    var computeBtn = document.getElementById("calculate");
    computeBtn.onclick = processMPG;
    //place the focus on the miles driven field
    var milesDrivenField = document.getElementById("milesdriven");
    milesDrivenField.focus();
}


var processMPG = function () {
    //task 1: collect the input for miles driven
    var milesDrivenText = document.getElementById("milesdriven");
    var miles = parseFloat(milesDrivenText.value);
    //task2: collect the input for gallons used
    var gallonsText = document.getElementById("ngallons");
    var gallons = parseInt(gallonsText.value);
    //task3: validate the input
    if (isNaN(miles) || isNaN(gallons)) {
        alert("One or more entries is invalid. Try again.")
    } else if (miles <= 0 || gallons <= 0) {
        alert('One or more of your entries is invalid. try again.')
    } else {
        //task4: compute and display miles per gallon
        var mpg = miles / gallons;
        var mpgTextField = document.getElementById('milespergallon');
        mpgTextField.value = mpg.toFixed(1);
    }



}
