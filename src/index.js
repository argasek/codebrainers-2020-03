const arr = ['głowa', 'komputer', 'cyrylica', false, 'stringg', true, ''];

let newArr = arr.filter((item) => typeof item === 'string' && item % 2 === 0);


function checkForDoubleY(s, letter) {
  for ( let i = 0; i < s.length; i++ ){
  //  console.log(s[i]);
    if (s[i] === letter) {
        return true;
    } 
  } 
  return false;
}


console.log(checkForDoubleY('komputer', 'y'));

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

