// Tennis

var tennisMatch = function(p1, p2) {
	if (p1 > 2 && p2 > 2) {
		return score (p1, p2);
	}
	return tennisScoring(p1) + " - " + tennisScoring (p2);
}

var tennisScoring = function (number) {
	if (number == 0) {
		return 'love';
	} if (number == 1) {
		return 15;
	} if (number == 2) {
		return 30;
	} if (number == 3) {
		return 40;
	} if (number == 4) {
		return 50;
	} if (number == 5) {
		return 60;
	} if (number == 6) {
		return 70;
	}
}

var score = function (p1, p2) {
	if ((p1 == 3) && (p2 == 3)) {
		return 'Deuce!';
	} if ((p1 == 0) && (p2 == 0)) {
        return "love-love";
    } if ((p1 > 3) && (p1 >= p2 + 2)) {
        return 'Player 1 Wins!';
    } if ((p2 > 3) && (p2 >= p1 + 2)) {
        return 'Player 2 Wins!';
    } if ((p1 > 3) && (p1 >= p2 + 1)) {
        return 'Advantage Player 1';
    } if ((p2 > 3) && (p2 >= p1 + 1)) {
        return 'Advantage Player 2';
    }
}

assertEqual("Deuce!", tennisMatch(3,3))
assertEqual("love - love", tennisMatch(0,0))
assertEqual("love - 15", tennisMatch(0,1))
assertEqual("Player 2 Wins!", tennisMatch (4,6))
assertEqual("Player 1 Wins!", tennisMatch (6,4))
assertEqual("Player 2 Wins!", tennisMatch (5,7))
assertEqual("Player 1 Wins!", tennisMatch(7,5))
assertEqual("Advantage Player 1", tennisMatch(4,3))
assertEqual("Advantage Player 2", tennisMatch(3,4))
assertEqual("15 - 15", tennisMatch(1,1))
assertEqual("30 - 15", tennisMatch(2,1))
assertEqual("40 - 30", tennisMatch (3,2))
