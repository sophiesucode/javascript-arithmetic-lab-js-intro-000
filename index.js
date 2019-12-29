var a, b

(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function add(a,b){
  return a+b
};
function subtract(a,b){
return a-b
};
function multiply(a,b){
  return a*b
};
function divide (a,b){
  return a/b
};
function inc(a){
  return ++a
};
function dec(a){
  return --a
};
function makeInt(a){
  return a.toString
};
function makeInt(n){
  return parseInt(n, 10)
};
function makeInt(NaN){
  return parseInt(NaN)
};
function preserveDecimal('2.222'){
  return parseFloat('2.222');
