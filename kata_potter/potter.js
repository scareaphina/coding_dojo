
var addToResults = function (text) {
    var div = document.getElementById('results');

    div.innerHTML = div.innerHTML + '<br />' + text;
    console.log(text);
};

var assertEqual = function (x, y) {
    if (x === y) {
        addToResults("True!");
    } else {
        addToResults("Test Failed! " + x + " was not equal to: " + y);
    }
};

//////////////////////////////////

// 1. define total book cost

bookCost = 8

// 2. define types of books

books = ['book1', 'book2', 'book3', 'book4', 'book5']

// 3. find difference between various books

var findDifference = function (bookSent) {

    if (bookSent !== )

};

// 4. determine the appropriate discount to apply to various combos of books

var amount = function (num) {
    if (num === 2) {
        return Math.round((bookCost * 2) * .05)
    } else if (num === 3) {
        return Math.round((bookcost * 3) * .10)
    } else if (num === 4) {
        return Math.round((bookcost * 4) * .20)
    } else if (num === 5) {
        return Math.round((bookcost * 5) * .25)
    } else {
        return Math.round(bookcost * num)
    }
};

// potterDiscount(2 firstBook, 2 secondBook, 2 thirdBook, 1 forthBook, 1 fifthBook)
