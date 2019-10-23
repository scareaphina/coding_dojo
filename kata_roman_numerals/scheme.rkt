#lang simply-scheme

(define (assert-equal x y)
  (if (equal? x y)
      #t
      (string-append "failed: expected " (symbol->string y) " was "  (symbol->string x))))

(define (tests a . b)
  (display (foldl (lambda (x acum)
                    (if (equal? #t x)
                        (string-append acum ".")
                        (string-append acum  x " F\n")))
                  ""
                  (cons a b))))

; function to change numeral to letter
; dictionary of number and letter equivilants

(define (map fn list)
  (if (empty? list)
      '()
      (se (fn (first list)) (map fn (bf list)))))

(define (filter pred list)
  (if (empty? list)
      '()
      (if (equal? (pred (first list)) #t)
          (se (first list) (filter pred (bf list)))
          (filter pred (bf list)))))

; number -> (symbol | fail)

(define (checker exact exact-sym upper-bound)
  (lambda (numeral)
    (cond ((equal? numeral exact) exact-sym)
          ((and (> numeral exact) (< numeral upper-bound))
           (word exact-sym (roman (- numeral exact))))
          ('fail))))

(define (loop-and-test numeral checks)
  (if (empty? checks) 'fail
      (let ((possible-roman ((first checks) numeral)))
        (if (equal? possible-roman 'fail)
            ;; not first check, but recur with the rest of checks
            (loop-and-test numeral (bf checks))
            possible-roman
            ))))

(define (roman numeral)
  (let ((checks (list (checker 1 'i 5)
                      (checker 5 'v 10)
                      (checker 10 'x 50)
                      (checker 50 'l 100)
                      (checker 100 'c 500))))
    ;; (loop-and-test numeral checks)
    (first (filter (lambda (x) (not (equal? x 'fail)))
            (map (lambda (check) (check numeral)) checks)))))


;; [list].filter(x->x+1).map(x->x.id).filter(x->x!=0)



(tests
 (assert-equal (roman 1) 'i)
 (assert-equal (roman 2) 'ii)
 (assert-equal (roman 3) 'iii)
 (assert-equal (roman 5) 'v)
 (assert-equal (roman 6) 'vi)
 (assert-equal (roman 7) 'vii)
 (assert-equal (roman 10) 'x)
 (assert-equal (roman 11) 'xi)
 (assert-equal (roman 50) 'l)
 (assert-equal (roman 100) 'c))
