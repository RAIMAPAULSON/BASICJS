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