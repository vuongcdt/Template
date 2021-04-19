let str = "";
function clickSo(value) {
  str = str + value;
  
  let result = document.getElementById("result");
  result.innerText = str;
  return str;
}
function ketqua() {
  let ketqua = document.getElementById("ketqua");
  let result = document.getElementById("result");
  result.innerText = eval(str)
  console.log(str);
}
function clickAC() {
  let result = document.getElementById("result");
  str=""
  result.innerText = eval(0);
  console.log(eval("012"));
  
}