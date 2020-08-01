/*const liczbaPytan = 5;

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

HOMEWORK!!

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


 /*Math.random() zwraca Liczbę zmiennoprzecinkową, pseudolosowa z przedziału od 0(włącznie) do 1 (wyłącznie).*/




/*const numberOfQuestions = 10;
let correctAnswer = 0;
for (let i = 0; i < numberOfQuestions; i++) {
    let computerAnswer = Math.floor(Math.random() * 10) + 1; // 1 - od ktorej liczby zakres; 10 - do której liczby zakres; Math.floor() zaokrągla liczby w dol< Math.ceil() do góry
    console.log(computerAnswer);
    let userAnswer = prompt('Enter a number from 1 to 10');
    userAnswer = parseInt(userAnswer);
    if (userAnswer === computerAnswer) {
        correctAnswer++;
    }
  }

if (correctAnswer >= 6) {
    console.log('You passed the test!!You have ' + correctAnswer + ' correct answers');
} else {
    console.log('You didn\'t pass =( Try again!');
}

function gradeCalc(correctAnswer) { // oblicza %
    return (correctAnswer / numberOfQuestions) * 100;   
}
let a = gradeCalc(correctAnswer); //przechowuje %
console.log(a + ' %');

if (a < 60) {
    console.log('Your grade is 1');
} else if (a >= 60 && a < 100) {
    console.log('Your grade is 2');
} else if (a === 100) {
    console.log('Your grade is 6!!Congratulations!!!=)');
}

// 6 = 100%
// 2 = 60%
//poprawna odpowiedz/6 * 100*/



