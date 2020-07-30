const liczbaPytan = 5;

function getRandomInteger() {
    return 5;
}

let poprawneOdpowiedzi = 0;

for (let i = 0; i < liczbaPytan; i++) {
    let a = getRandomInteger();
    let b = getRandomInteger();
    let wynik = prompt('Ile jest ' + a + ' * ' + b + '?'); 
    wynik = parseInt(wynik);
    let ab = a * b;
    if (wynik === ab) {
        poprawneOdpowiedzi++;
    }
}
console.log('Liczba poprawnych odpowiedzi ' + poprawneOdpowiedzi);

/*
Zadanie 1. Metodą kopiuj-wklej odnajdź w internetach algorytm
generowania liczby -całkowitej- z zakresu od 1..10.

Zadanie 2. Po wykonaniu kopiuj wklej przenalizuj ten algorytm
(ten = tj. algorytm losujący) i zastanów się, w jaki sposób on
działa. W dokumentacji na stronie MDN sprawdź jak działa funkcja
Math.random().

Zadanie 3. Wypisz na ekran czy użytkownik zaliczył test (musi mieć
co najmniej 6 poprawnych odpowiedzi)

Zadanie 4*. Wypisz ocenę na podstawie udzielonych odpowiedzi, zakładając
że 60% = 2 (dopuszczająca) a 100% oznacza szkolną "szóstkę".
 */
