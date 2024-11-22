// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern_4(n){
let pattern = "";
for(let i=n ; i >= 1 ; i--){
  for(let j=1; j <= i ; j++){
    pattern += j + " ";
  }
  pattern += "\n";
}
return pattern;
}
console.log(pattern_4(5));