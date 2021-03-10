// 當前輪播圖的編號，從零開始
var index = 0;
// 下一張按鈕
var nextBtn = document.querySelector("#slider-next");
var prevBtn = document.querySelector("#slider-prev");
// 取得所有的輪播項目
var items = document.getElementsByClassName("slider-item");
// 輸出輪播項目的數量
// console.log("輪播項目的數量：" + items.length);

// 下一張按鈕的功能
function next() {
    index++;
    // 如果編號是 項目的數量 就將編號改為 零
    if (index == items.length) index = 0;

    //console.log("編號：" + index);
    showItem();
    showDot();
    resetTimer();
}

function prev() {
    index--;
    // 如果編號是 項目的數量 就將編號改為 零
    if (index == - 1) index = item.length - 1;
    showItem();
    showDot();
    resetTimer();
}

//下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.onclick = next;
prevBtn.onclick = prev;

function showItem() {
    for (let i = 0; i < items.length; i++) {
        //  刪除每一個項目的 啟動模式
        items[i].classList.remove("slider-active");
    }

    // 指定目前要顯示的項目 添加 啟動模式

    items[index].classList.add("slider-active");
}

var dots= document.getElementsByClassName("slider-dot");

function showDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("slider-dot-active");   
    }

    dots[index].classList.add("slider-dot-active"); 
}

// 點擊點點(接收點點的編號)
function clickDot(i) {
    // 更新編號
    index = i;
    showItem();
    showDot();
    resetTimer();
}

// 利用迴圈指定每一個點點 按下去 傳編號給 clickDot
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function() {
        clickDot(i);
    }
    
}

// 自動撥放
var box = document.getElementById("slider-box");
var interval = box.getAttribute("data-s-interval");

function autoPlay() {
    next();
}

// 設定間隔(函式。間隔時間)
setInterval(autoPlay, interval);

// 計時器 = 設定間隔(函式，間隔時間)
var timer = setInterval(autoPlay, interval);
// 重新設定計時
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, interval);
}

// 點點顯式或隱藏
var showdots= box.getAttribute("data-s-showdots");
if (showdots == "false") {
    var dots = document.getElementById("slider-dots");
    dots.style["display"] = "none";
}