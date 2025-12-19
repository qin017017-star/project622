let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML +`
  <div class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
}
let i=0, imgArr=new Array(); 
imgArr[0] = "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/1181px-National_Chiayi_University_seal.svg.png";
imgArr[1] = "https://cdn2.ettoday.net/images/2681/2681772.jpg";
imgArr[2] ="https://www.overseas.edu.tw/wp-content/uploads/2020/10/HCY_1680_1-1024x576.jpg";
function showImg() {
document.getElementById('ico').src = imgArr[i]; 
i = (i+1) % 3;
}
function show() {
setInterval(showImg, 2000); 
}