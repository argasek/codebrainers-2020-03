const arr = [1, 5, 7, false, 'stringg', true, 545];

// const newArr = function(item, index, arra){


//     console.log(item, index*-1, arra)
// }

// arr.map(newArr)

const arr2 = [];

for (let i = arr.length-1, j = 0; i>=0; i--, j++){
    arr2[j] = arr[i];
    console.log(arr[i]);
}

console.log(arr2)