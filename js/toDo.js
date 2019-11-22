function initialize() {
    //load from local storage
    loadList();
}

function loadList() {
    //task `1: get the number of key-value pairs stored in local storage
    var length = localStorage.length;

    //task 2: create an array to hold the eventual list of items
    myTodoList = [];

    //task 3: collect each key item and store in the array
    for (var i = 0; i < length; i++) {
        myTodoList[i] = localStorage.key(i);
    }
    myTodoList.sort();

    //task4: build the html code display
    //     (A) add the text element (B) add a delete button
    var markup = "<ul>";
    for (var keyIndex in myTodoList) {
        markup += "<li><span>" + myTodoList[keyIndex] + "</span></li>";
    }
    markup += "</ul>";

    //task 5: add string to Document
    document.getElementById('searchList').innerHTML = markup;
}


function saveSearch() {
    var keyName = document.getElementById('todoTag');
    var keyValue = "to do item";
    localStorage.setItem(keyName.value, keyValue);

    keyName.value = "";
    loadList();
}

function clearAllItems() {
    localStorage.clear();
    loadList();
}
