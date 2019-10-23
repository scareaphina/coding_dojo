var addToResults = function(text) {
    var div = document.getElementById('results');

    div.innerHTML = div.innerHTML + '<br />' + text;
    console.log(text);
};

var assertEqual = function(x, y) {
    if(x===y) {
        addToResults("True!");
    } else {
        addToResults("Test Failed! " + x + " was not equal to: " + y + ".");
    }
};
