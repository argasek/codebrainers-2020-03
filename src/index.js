const liczbaPytan = 10;

function getRandomInteger() {
    return Math.floor(Math.random()*10 +1);
}

let poprawneOdpowiedzi = 0;
let czyZaliczony, ocena;

alert('Witaj na sprawdzianie z tabliczki mnożenia. Przed Tobą 10 pytań. Wciśnij OK aby zacząć. ');

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

function obliczOcenę() {
    if (poprawneOdpowiedzi < liczbaPytan * 0.75) {
        ocena = 'Twoja ocena to 2 (dopuszczający).';
    } 
    else {
        if (poprawneOdpowiedzi < liczbaPytan * 0.8) {
            ocena = 'Twoja ocena to 3 (dostateczny).';
        } else {
            if (poprawneOdpowiedzi < liczbaPytan * 0.9) {
            ocena = 'Twoja ocena to 4 (dobry).';
            } else { 
                if (poprawneOdpowiedzi < liczbaPytan) {
                ocena = 'Twoja ocena to 5 (bardzo dobry).';
                } else {
                ocena = 'Twoja ocena to 6 (celujący).';
                }
            }
        }
    }
    return ocena;
}

if (poprawneOdpowiedzi >= liczbaPytan * 0.6) {
    czyZaliczony = 'Gratulacje! Zaliczyłeś sprawdzian. ';
    obliczOcenę();
} else {
    czyZaliczony = 'Niestety nie zaliczyłeś zprawdzianu. ';
    ocena = 'Twoja ocena to: 1 (niedostateczny).';
};

alert('Liczba poprawnych odpowiedzi: ' + poprawneOdpowiedzi + '\nLiczba błędnych odpowiedzi: ' + (10 - poprawneOdpowiedzi)+ '\n' + czyZaliczony + '\n' + ocena);


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