// Tennis

var tennis = function(p1, p2) {
	if (p1 > 2 && p2 > 2) {
		return score (p1, p2);
	}
	return numtotennis(p1) + " - " + numtotennis (p2);
}

var numtotennis = function (number) {
	if (number == 0) {
		return "love"
	}
	if (number == 1) {
		return "15"
	}
	if (number == 2) {
		return "30"
	}
	if (number == 3) {
		return "40"
	}
	if (number == 4) {
		return "50"
	}
	if (number == 5) {
		return "60"
	}
	if (number == 6) {
		return "70"
	}
}

var score = function (p1, p2) {
	if (p1 > 3 && p1 >= (p2 + 2)) {
		return "Player 1 Wins!"
	}
	if (p2 > 3 && p2 >= (p1 + 2)) {
		return "Player 2 Wins!"
	}
	if (p1 > p2 && p1 >= 3 && p2 >= 3) {
		return "Advantage Player 1"
	}
	if (p2 > p1 && p1 >= 3 && p2 >= 3) {
		return "Advantage Player 2"
	}
	if ( p1 == 3 && p2 == 3) {
		return "Deuce!"
	}
}

assertEqual("love - love", tennis(0,0))
assertEqual("love - 15", tennis(0,1))
assertEqual("15 - 15", tennis(1,1))
assertEqual("30 - 15", tennis(2,1))
assertEqual("40 - 30", tennis (3,2))
assertEqual("Deuce!", tennis(3,3))
assertEqual("Advantage Player 1", tennis(4,3))
assertEqual("Advantage Player 2", tennis(3,4))
assertEqual("Player 2 Wins!", tennis (4,6))
assertEqual("Player 1 Wins!", tennis (6,4))
assertEqual("Player 2 Wins!", tennis (5,7))
assertEqual("Player 1 Wins!", tennis(7,5))
