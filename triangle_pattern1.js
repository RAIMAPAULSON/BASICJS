// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern(n){
  let pattern = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
      pattern += j + " ";
    }
    pattern += "\n";
  }
  return pattern;
  }
  console.log(pattern(5));