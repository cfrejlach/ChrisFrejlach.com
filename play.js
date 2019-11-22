function fetchTerm() {
    
    var myXMLRequest = new XMlHttpRequest();
    myXMLRequest.open("GET", "play.php", true);
    myXMLRequest.send();
}

function createRandomWordDefin(){
    
    var json = JSON.parse(this.resonseText);
    
    document.getElementById("defin").innerHTML= json.defintion;
    document.getElementById("word").innerHTML= json.word;
}