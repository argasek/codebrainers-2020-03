const liczbaPytan = 5;

function getRandomInteger(){
    return 0;
}

let poprawneOdp = 0;

for (let i = 0; i < liczbaPytan; i++) {
    let a = getRandomInteger();
    let b = getRandomInteger();
    prompt('Ile jest ' + a + ' * ' + b + '?');
    let wynik = prompt('Ile jest ' + a + ' * ' + b + '?');
    let ab = a * b;
    if (wynik === ab) {
        poprawneOdp++;
    }
     

}
