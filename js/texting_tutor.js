var secondStart;
var finalmSeconds;


function start() {
    var date = new Date();
    secondStart = date.getMilliseconds();
    if (document.getElementById("beginner").checked) {
        document.getElementById("givenText").innerHTML = "car hat fish dog";
    }
    if (document.getElementById("advanced").checked) {
        document.getElementById("givenText").innerHTML = "document picture carpenter institution";
    }
    return secondStart;

}

function stop() {
    //GET SECONDS
    var date = new Date();
    var secondEnd = date.getMilliseconds();
    finalmSeconds = (secondEnd - secondStart);
    var realSeconds = millisToMinutesAndSeconds(finalmSeconds);
    //CHECK IF TYPING IS CORRECT AND PUT APPROPRIATE IMAGE
    var userInput = document.getElementById("usersText").toString();
    var userArray = userInput.split(" ");
    var correctBeginner = ['car', 'hat', 'fish', 'dog'];
    var correctAdvanced = ['document', 'picture', 'carpenter', 'institution'];
    var flag = true;
    var img1 = document.createElement("img1")
    img1.src = "./images/thumb-down-smiley.png";
    var img2 = document.createElement("img2")
    img2.src = "./images/thumb-up-smiley.png";
    var src = document.getElementById("emoji");
    while (flag == true) {

        if (document.getElementById("beginner").checked) {
            for (var i = 0; i <= correctBeginner.length; i++) {
                if (userArray[i] != correctBeginner[i]) {
                    document.getElementById("emoji").src = "./images/thumb-down-smiley.png";
                    document.getElementById("out").innerHTML = "Sorry you typed " + userArray + "you were supposed to type " + correctAdvanced;
                    flag = false;
                } else {
                    flag = true;
                }
            }
        }

        if (document.getElementById("advanced").checked) {
            for (var i = 0; i <= correctAdvanced.length; i++) {
                if (userArray[i] != correctAdvanced[i]) {
                    document.getElementById("emoji").src = "./images/thumb-down-smiley.png";
                    document.getElementById("out").innerHTML = "Sorry you typed " + userArray + "you were supposed to type " + correctAdvanced;
                    flag = false;
                } else {
                    flag = true;
                }
            }
        } else {
            document.getElementById("emoji").src = "./images/thumb-up-smiley.png";
            document.getElementById("out").innerHTML = "Congratulations! You typed correctly, you time is " + realSeconds + " seconds."
        }
    }
}

function millisToMinutesAndSeconds() {
    var minutes = Math.floor(finalmSeconds / 60000);
    alert(minutes);
    var seconds = (finalmSeconds / 1000);
    alert(seconds);
    return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}
