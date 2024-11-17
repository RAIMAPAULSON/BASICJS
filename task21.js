function primeOrNot(num){
  if(num < 2){
    return `No`;
  }
  for(let i=2; i <= Math.sqrt(num) ; i++){
    if(num % i === 0){
      return `No`;
    }
  }
  return `Yes`
}
console.log(primeOrNot(9));