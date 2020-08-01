const arr = [1, 5, 7, false, 'stringg', true, 545];

let newArr = arr.map((item) => typeof item === "number" ? item : 0);


console.log(newArr);

// function mapper(item, index, a){
//     return a[a.length - index - 1];
// }
// // const newArr = function(item, index, arra){


// //     console.log(item, index*-1, arra)
// // }

// // arr.map(newArr)

// const arr2 = arr.map(mapper);

// //for (let i = arr.length-1, j = 0; i>=0; i--, j++){
//  //  arr2[j] = arr[i];
//    // console.log(arr[i]);
// // }

// console.log(arr2)

