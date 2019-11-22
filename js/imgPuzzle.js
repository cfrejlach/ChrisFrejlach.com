var black = 8;


function moveTile(n) {
    if (((black - 1) == n && black % 3 != 0) || ((black + 1) == n && black % 3 != 2) || ((black - 3) == n) || ((black + 3) == n)) {
        var temp;
        temp = n;
        swap(black, n);
        black = temp;
    }
}

function swap(a, b) {
    var temp = document.images[a].src;
    document.images[a].src = document.images[b].src;
    document.images[b].src = temp;
}

/*function shuffle(c, d) {
    for (var i = 0; i < 7; i++) {

        swap()

    }
}*/
