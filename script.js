function showTime() {
  document.getElementById("currentTime").innerHTML = new Date();
}
showTime();
setInterval(function () {
  showTime();
}, 1000);
let countEl = document.getElementById("num");
let cnt = 0;
function increment() {
  cnt = cnt + 1;
  countEl.innerText = cnt;
}
function decrement() {
  cnt = cnt - 1;
  countEl.innerText = cnt;
}
function reset() {
  cnt = 0;
  countEl.innerText = cnt;
}
