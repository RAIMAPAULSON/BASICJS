// 1
// 2 3
// 4 5 6
// 7 8 9 10

function pattern3(n){
  let pattern = "";
  let num = 1;
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <=i; j++){
      pattern += num + " ";
      num++;
    }
    pattern+= "\n";
  }
  return pattern;
}
console.log(pattern3(4));