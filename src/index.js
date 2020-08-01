const arr = ['dy', 'Hello', 'Roman', false, 'glowa', 'stringg', true, 'cyrlyca',''];

// let newArr = arr.filter((item) => typeof item === "string" && );


let z = 0
function chceckForDoubleY(s) {
    for(let i = 0; i<s.length; i++){
        if (s[i]==='w'){
            z++
        }
    }
    if (z===2){
        return s
    }
}

console.log(chceckForDoubleY('glowwa'))

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

