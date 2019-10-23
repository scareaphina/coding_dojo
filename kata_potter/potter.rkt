; potter kata

; if you buy 4 books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR

(define full-price 8)

; helper procedure defining discounts

(define (discount amount)
  (cond ((equal? amount 2) .95)
        ((equal? amount 3) .9)
        ((equal? amount 4) .8)
        ((equal? amount 5) .75)
        (else '(purchase does not qualify for discount))))

(check-equal? (discount 2) .95)
(check-equal? (discount 1) '(purchase does not qualify for discount))

; helper procedure defining each title

(define book1 '(Harry Potter and the Sorcerer's Stone))
(define book2 '(Harry Potter and the Chamber of Secrets))
(define book3 '(Harry Potter and the Prisoner of Azkaban))
(define book4 '(Harry Potter and the Goblet of Fire))
(define book5 '(Harry Potter and the Order of the Phoenix))

; procedure iterating over all the variables and returning a total

;(define (total-purchase amount edition)
