let count = 0; // 建立一個變數來儲存分數

function addCount() {
  count = count + 1; // 每次執行就把數字加 1
  document.getElementById("counter").innerText = count; // 把新的數字顯示在網頁上
}

function resetCount() {
  count = 0; // 把數字變回 0
  document.getElementById("counter").innerText = count; // 更新網頁顯示
}