function loop(n){}
function logEvenOrOdd(n){}

function loop(n){
    if (n>1) {
      logEvenOrOdd(--n)
    }
  }
  
function logEvenOrOdd(n) {
console.log(n, n % 2 ? 'Odd' : 'Even')
loop(n)
}

loop(10)


console.log(a);
var a = 5;

