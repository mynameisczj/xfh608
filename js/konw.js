
function Slider(){
    var slideImg = document.getElementById("slide-img")
    var imgNum = parseInt(slideImg.getAttribute("imgNum")); 
    setTimeout(function(){
        imgNum+=1;
         if(imgNum==4) {
             imgNum = 0
         }
        slideImg.src = "../img/slide_"+imgNum+".webp"
        console.log("轮播图切换"+imgNum)
        slideImg.setAttribute("imgNum",imgNum)
        var left = document.getElementById("left")
        var right = document.getElementById("right")
        left.onclick = function(){
            imgNum--;
            console.log("点击左")
            if(imgNum<0) imgNum=0
            slideImg.src = "../img/slide_"+imgNum+".webp"
            slideImg.setAttribute("imgNum",imgNum)
            console.log("imgNum+1为"+imgNum)
        }
        right.onclik = function(){
            imgNum++;
            if(imgNum>3) imgNum =3
            slideImg.src = "../img/slide_"+imgNum+".webp"
            slideImg.setAttribute("imgNum",imgNum)
            console.log("imgNum-1"+imgNum)
        }
    },3000) 

}

//防疫数据加载
var konwdata =[  
  { title: "间谍过家家（第二季）",context:"B站"},
  { title: "定海浮生录",context:"B站"},
  { title: "凡人修仙传",context:"B站"},
  { title: "少年歌行 海外仙山篇",context:"B站"},

  { title: "咒术回战",context:"B站"},
  { title: "狐妖小红娘",context:"B站"},
  { title: "仙王的日常生活",context:"B站"},
  { title: "天官赐福",context:"B站"},

  { title: "雾山五行",context:"B站"},
  { title: "葬送的芙莉莲",context:"B站"},
  { title: "Dr.STONE 石纪元（第三季）",context:"B站"},
  { title: "盾之勇者成名录",context:"B站"},

  { title: "白圣女与黑牧师",context:"B站"},
  { title: "米奇与达利",context:"B站"},
  { title: "孤独摇滚",context:"B站"},
  { title: "香格里拉边境",context:"B站"},
]; 
function initKnowData() 
{
  // 取前四条数据初始化页面
  var konwList = document.getElementById('konwList');
  var outStr = "";
  for (var i = 0; i < 4; i++) {
    outStr += '<a href="../web/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+konwdata[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+konwdata[i].context+'</p> </div></a>'
  }
  konwList.innerHTML = outStr;
  
  // 实现翻页功能
  var aBtn = document.getElementsByClassName("page-item");
  for (var j = 0; j < aBtn.length; j++) { // 为每个页数按钮都设置点击事件
    var funStr = "pageChange2("+j+')'
    aBtn[j].setAttribute("onclick",funStr)
  }
}

var nowIndex = 1;
function pageChange2(index){

  console.log("点击"+index)
  
  //变色
  for(var i =0;i<aBtn.length;i++){
    if(i==index) aBtn[index].style.color ="rgb(10, 153, 248,0.7)"
    else aBtn[i].style.color ="rgb(54, 54, 54)"
  }
  // 获取自定义属性pageNum的值 并将其转换为数字类型  释：pageNum表明当前时第几页
  var pageNum = parseInt(aBtn[index].getAttribute("pageNum")); 
  outStr = "";

  //范围内循环
  //点击上一页
  if(index ==0&&nowIndex!=0){
    nowIndex--;//当前页-1
    if(nowIndex==0){
      nowIndex = 1;
    }
    pageChange2(nowIndex);
    return;
  }
  //点击下一页
  if(index == 5&&nowIndex!=5){
    nowIndex++;//当前页+1
    if(nowIndex==5){
      nowIndex = 4;
    }
    pageChange2(nowIndex);
    return;
  }
  for (var i = pageNum*4; i < pageNum*4+4; i++) { 
    //通过页数获取data中相应段的值
    outStr += '<a href="../web/news_detail.html"> <div class="list-item"><div class="list-item-title">'+'<h6>'+konwdata[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+konwdata[i].context+'</p> </div></a>'
  }
  konwList.innerHTML = outStr;
  nowIndex = index;
  console.log("现在是"+nowIndex+"页")
}
