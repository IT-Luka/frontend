function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num > 2 && num % 2 == 0) return false;
  else{
    for (let i = 2; i < Math.sqrt(num) + 1; i++){
      if (num % i == 0) return false;
    }
    return true;
  }
}
