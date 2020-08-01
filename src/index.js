const arr = ['dy', 'Hello', 'Roman', false, 'glowa', 'stringg', true, 'cyrlyca',''];

// let newArr = arr.filter((item) => typeof item === "string" && );



function checkForMultiple(s, letter, count) {
    let a = s.split('');
    let newArr = a.filter((item) => item === letter );

    
    return newArr.length>=count;
}

console.log(checkForMultiple('cyrlyca', 'c', 2));

// console.log(newArr);

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

