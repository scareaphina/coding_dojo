/******************
 * Roman Numerals
 * 1 = I        11 = XI     50 = L
 * 2 = II       12 = XII    100 = C
 * 3 = III      13 = XIII   500 = D
 * 4 = IV       14 = XIV    1000 = M
 * 5 = V        15 = XV     2000 = MM
 * 6 = VI       16 = XVI    3000 = MMM
 * 7 = VII      17 = XVII
 * 8 = VIII     18 = XVIII
 * 9 = IX       19 = XIX
 * 10 = X       20 = XX
 */

function numeralMaker(number) {
    return 'The Roman numeral for ' + number + 'is ' + transNumeral + ' .';
}

var number = (1);
function transNumeral(number) {
    return transNumeralIter (number, '');
}

function transNumeralIter (number, romanNumeral) {
    if (number == 1){
        return(romanNumeral + 'I');
    } if (number > 1 && number < 5){
        return transNumeralIter(number - 1, romanNumeral + 'I');
    } if (number == 5){
        return(romanNumeral + 'V');
    } if (number > 5 && number < 10){
        return transNumeralIter(number - 5, romanNumeral + 'V');
    } if (number == 10){
        return(romanNumeral + 'X');
    } if (number > 10 && number < 50){
        return transNumeralIter(number - 10, romanNumeral + 'X');
    } if (number == 50){
        return transNumeralIter(romanNumeral + 'L');
    } if (number > 50 && number < 100){
        return transNumeralIter(number - 50, romanNumeral + 'L');
    } if (number == 100){
        return transNumeralIter(romanNumeral + 'C');
    }
}

assertEqual('I', transNumeral(1))
assertEqual('II', transNumeral(2))
assertEqual('III', transNumeral(3))
assertEqual('IIII', transNumeral(4))
assertEqual('V', transNumeral(5))
assertEqual('VI', transNumeral(6))
assertEqual('VII', transNumeral(7))
assertEqual('VIII', transNumeral(8))
assertEqual('VIIII', transNumeral(9))
assertEqual('X', transNumeral(10))
assertEqual('XII', transNumeral(12))
assertEqual('XV', transNumeral(15))
assertEqual('XVI', transNumeral(16))
assertEqual('XX', transNumeral(20))
assertEqual('L', transNumeral(50))
assertEqual('LX', transNumeral(60))
assertEqual('C', transNumeral(100))
assertEqual('CXXI', transNumeral(121))
//assertEqual('D', transNumeral(500))
//assertEqual('M', transNumeral(1000))
//assertEqual('MM', transNumeral(2000))
//assertEqual('MMM', transNumeral(3000)) 


////////////////////

// second attempt

setTimeout(() => window.location = window.location, 2000);

function roman(n) {
  return "The Roman numeral for " + n + " is " + transNumeral + " .";
}

function transNumeral(n) {
  return transNumerIter(n, "");
}

function transNumerIter(n, numeral) {
  if (n == 1) {
    return(numeral + "I");
  } if (n > 1 && n < 5) {
    return transNumerIter(n - 1, numeral + "I");
  } if (n == 5) {
    return(numeral + "V");
  } if (n > 5 && n < 10) {
    return transNumerIter(n - 5, numeral + "V");
  }
}

assertEqual('I', transNumeral(1));
assertEqual('II', transNumeral(2));
assertEqual('III', transNumeral(3));
assertEqual('IIII', transNumeral(4));
assertEqual('V', transNumeral(5));
assertEqual('VI', transNumeral(6));
assertEqual('VII', transNumeral(7));
assertEqual('VIII', transNumeral(8));
assertEqual('VIIII', transNumeral(9));
assertEqual('X', transNumeral(10));
assertEqual('XII', transNumeral(12));
assertEqual('XV', transNumeral(15));
assertEqual('XVI', transNumeral(16));
assertEqual('XX', transNumeral(20));
// assertEqual('L', transNumeral(50));
// assertEqual('LX', transNumeral(60));
// assertEqual('C', transNumeral(100));
// assertEqual('CXXI', transNumeral(121));
//assertEqual('D', transNumeral(500))
//assertEqual('M', transNumeral(1000))
//assertEqual('MM', transNumeral(2000))
//assertEqual('MMM', transNumeral(3000))
