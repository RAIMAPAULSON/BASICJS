// function countDivisible(left, right, k) {
//   let res = [];
//    for(i=left;i <= right; i++){
//     if(i % k == 0){
//       res .push(i);
//     }
//    }
//    console.log(res.length);
// }
// countDivisible(5, 20, 4);

function countDivisible(left, right, k){
  let count = 0;
  for(let i = left ; i <= right ; i++){
     if(i % k == 0){
      count++;
     }
  }
  return count;
}
console.log(countDivisible(5,20,4));