// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
function pattern(n){
let pattern = "";
for(let i = 1; i <= n; i++){
  for(let j = 1; j <= n; j++){
    pattern += j + " ";
  }
  pattern += "\n";
}
return pattern;
}
console.log(pattern(4));