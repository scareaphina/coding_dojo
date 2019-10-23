#lang sicp

(define (reportmsg msg)
	(display msg)
	(newline))

 (define (reporterr msg)
	(display "ERROR: ")
	(display msg)
	(newline))

 (define (assert msg b)
  ( if ( not b) (reporterr msg)))

 (define (asserteq a b)
  ( assert (string-append (number->string a) " is not equal to " (number->string b)) ( > 0.0001 (abs ( - a b)))))

 (define (assertst a b)
  ( assert (string-append a " is not equal to " b) (equal? a b)))

;;;;;;;;;;;;;;;;;;;

(define (scoring-num a)
  (cond ((= a 0) "love")
        ((= a 1) 15)
        ((= a 2) 30)
        ((= a 3) 40)
        ((= a 4) 50)
        ((= a 5) 60)
        (70)))
         

(define (tennis-score p1 p2)
  (cond ((= p1 p2 3) "deuce!")
        ((and (> p1 3) (> p1 (+ p2 1))) "player 1 wins!")
        ((and (> p2 3) (> p2 (+ p1 1))) "player 2 wins!")
        ((and (> p1 3) (> p2 2) (> p1 p2)) "advantage player 1")
        ((and (> p2 3) (> p1 2) (> p2 p1)) "advantage player 2")
        (else (string-append (scoring-num p1) "-" (scoring-num p2)))))


(assertst "advantage player 1" (tennis-score 4 3))
(assertst "player 1 wins!" (tennis-score 6 4))
(assertst "deuce!" (tennis-score 3 3))
(assertst "love-love" (tennis-score 0 0))
