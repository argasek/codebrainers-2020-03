const liczbaPytan = 5;

function getRandomInteger() {
   const min = 1;
   const max = 10;
   return Math.floor(Math.random()*(max-min+1)+min);
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


if (poprawneOdpowiedzi>=3){
    alert(`Zdales test! Otrzymales ${poprawneOdpowiedzi} pkt!`);
}else{
    alert(`nie zdales testu otrzymales zaledwie ${poprawneOdpowiedzi} pkt`);
}

const szesc = 100;
const piec = 90;
const cztery = 80;
const trzy = 70;
if(poprawneOdpowiedzi*100/ liczbaPytan === szesc){
    alert('Zdales test na 6!');
} else if (poprawneOdpowiedzi * 100 / liczbaPytan >= piec && poprawneOdpowiedzi * 100 / liczbaPytan < szesc ) { 
    alert('Zdales test na 5!');
} else if (poprawneOdpowiedzi * 100 / liczbaPytan >= cztery && poprawneOdpowiedzi * 100 / liczbaPytan < piec ){
    alert('Zdales test na 4!');
} else if (poprawneOdpowiedzi * 100 / liczbaPytan >= trzy && poprawneOdpowiedzi * 100 / liczbaPytan < cztery ){
    alert('Zdales na 3! ');
}else{
    alert('Zdales na dwa :((');
}
// console.log('Liczba poprawnych odpowiedzi ' + poprawneOdpowiedzi);

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