let age; 

do {
    age = parseInt(prompt("What's your age"));
} while(isNaN(age) === true);


if (age >= 18) {
    alert(`Nice to meet you, you have ${age}!`);
} else {
    alert('You are not have 18 years old');
}



