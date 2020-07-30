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
