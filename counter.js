function createCounter(n) {
  let count = -1;
function inner(){
    count++;
    return (n+count)
}
return inner;
}