// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern(n){
  let pattern = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      pattern += i + " ";
    }
    pattern += "\n";
  }
  return pattern;
  }
  console.log(pattern(5));