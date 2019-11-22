function populate(){
    //task 1:construct an array of friends
    var friends = ["Charlie", "Odie", "Nellie", "Pooky", "Jony"]
    //task 2: for each friend in the array 
    //        create a dom Element. Append
    //        The Dom element to the friend
    for (var i=0; i<friends.length; i++){
        var name = document.createElement("option");
        name.innerHTML = friends[i];
        document.getElementById("friendList").appendChild(name);
    }
    //task 3: attach a listener event to the friend 
    document.getElementById("friendList").onchange = hiFriends;
}

function hiFriends(){
    var friendName = this.value;
    //task: modify the name by adding the first letter and A Y to the back
    var firstChar = friendName.charAt(0);
    document.getElementById("greeting").innerHTML= "Hi " + friendName +" "+ firstChar;
}