
function getPrimes(n) {
  var prime_array = [];
  
  for (var numb = 1; numb <= n; numb++) {
    checkPrime(numb);
    
    if (checkPrime(numb) === false) {
      prime_array.push(numb);

    }
  }
  
  return prime_array;
}



function checkPrime(count) {
  var notPrime = false;
  for (var i = 2; i <= count; i++) {
    if (count % i === 0 && i !== count) {
      notPrime = true;
    }
  }
  return notPrime;
}