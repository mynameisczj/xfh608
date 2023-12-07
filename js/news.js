// 自定义数据 实际开发中 数据是从后台获取
var localData =  [  
  { title: "正经少主的幸福生活 更新至第8话", context: "B站"},
  { title: "请吃红小豆吧！第四季 日语版 更新至第9话", context: "B站"},
  { title: "燃夏 连更4话 更新至第1话~第4话", context: "B站"},
  { title: "傲世九重天 更新至第11话", context:"B站"},

  { title: "梦塔·雪谜城 更新至补完篇2", context: "B站"},
  { title: "凡人修仙传 更新至第78话", context: "B站"},
  { title: "七侯笔录 更新至第7话", context: "B站"},
  { title: "三十六骑 更新至第9话", context: "B站"},

  { title: "你的人生是我来迟了 更新至第5话", context: "B站"},
  { title: "我是不白吃 更新至第642话", context: "B站"},
  { title: "少年歌行 海外仙山篇 更新至第7话", context: "B站"},
  { title: "小绿和小蓝 第三季 更新至第10话", context: "B站"},

  { title: "月魁传 动态漫画 更新至第5话", context: "B站"},
  { title: "我的弟子遍布诸天万界 动态漫 更新至第83话", context: "B站"},
  { title: "不死不灭 更新至第4话", context: "B站"},
  { title: "给我来个小狐狸 更新至第12话 ", context: "B站"},
];
var todayData = [  
  { title: "aa", context:"B站"},
  { title: "bb", context:"B站"},
  { title: "cc", context:"B站"},
  { title: "dd", context:"B站"},

  { title: "ee", context:"B站"},
  { title: "ff", context:"B站"},
  { title: "gg", context:"B站"},
  { title: "hh", context:"B站"},

  { title: "ii", context:"B站"},
  { title: "jj", context:"B站"},
  { title: "kk", context:"B站"},
  { title: "ll", context:"B站"},

  { title: "mm", context:"B站"},
  { title: "nn", context:"B站"},
  { title: "oo", context:"B站"},
  { title: "pp", context:"B站"},
]; 
var forData = [  
  { title: "间谍过家家 第二季 更新至第29话", context: "B站"},
  { title: "咒术回战 第二季 更新至第14话", context: "B站"},
  { title: "葬送的芙莉莲 更新至第9话", context: "B站"},
  { title: "Ｄｒ．ＳＴＯＮＥ 石纪元 (第三季) 更新至第19话", context: "B站"},

  { title: "布莱泽奥特曼 更新至第22话", context: "B站"},
  { title: "盾之勇者成名录 第三季 更新至第5话", context: "B站"},
  { title: "狩龙人拉格纳 更新至第9话", context: "B站"},
  { title: "香格里拉边境 更新至第5话", context: "B站"},

  { title: "勇者赫鲁库 更新至第21话", context: "B站"},
  { title: "菜鸟魔王与独居勇者 更新至第9话", context: "B站"},
  { title: "新网球王子 U-17世界杯 更新至第10话 ", context: "B站"},
  { title: "米奇与达利 更新至第9话", context: "B站"},

  { title: "砂糖苹果童话故事 银砂糖师与黑妖精 更新至第20话", context: "B站"},
  { title: "为美好的世界献上爆焰！更新至第7话", context: "B站"},
  { title: "圣女魔力无所不能 第二季 更新至第5话", context: "B站"},
  { title: "赛马娘 第三季 更新至第9话 ", context: "B站"},
]; 
var data = todayData;
var aBtn = document.getElementsByClassName("page-item");
var nowIndex = 1;
var dataType=0;
function initData() 
{
  // 取前四条数据初始化页面
  var newsList = document.getElementById('newsList');
  var outStr = "";
  for (var i = 0; i < 4; i++) {
    if(i%2==0) data = forData;
    else data = localData;
    outStr += '<a href="https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"> <div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+data[i].context+'</p> </div></a>'
  }
  newsList.innerHTML = outStr;
  
  // 实现翻页功能
  for (var j = 0; j < aBtn.length; j++) { // 为每个页数按钮都设置点击事件
    var funStr = "pageChange("+j+')'
    aBtn[j].setAttribute("onclick",funStr)
  }

}
function pageChange(index){

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
    pageChange(nowIndex);
    return;
  }
  //点击下一页
  if(index == 5&&nowIndex!=5){
    nowIndex++;//当前页+1
    if(nowIndex==5){
      nowIndex = 4;
    }
    pageChange(nowIndex);
    return;
  }
  for (var i = pageNum*4; i < pageNum*4+4; i++) { 
    if(dataType==0){
      if(i%2==0) data = forData;
      else data = localData;
    }
    //通过页数获取data中相应段的值
    outStr += '<a href="https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"> <div class="list-item"><div class="list-item-title">'+'<h6>'+data[i].title+'</h6>'+'</div>'+ '<p class="list-item-context">'+'来源：'+data[i].context+'</p> </div></a>'
  }
  newsList.innerHTML = outStr;
  nowIndex = index;
  console.log("现在是"+nowIndex+"页")
}
//
//
//新闻分类
function classifyNews(barItem){
  var bar = document.getElementsByClassName("bar-item");
  //切换分类
  if(barItem==bar[0]){//今日
    data = todayData;
    dataType=0;
  }
  if(barItem==bar[1]){//国内
    data = localData;
    dataType =1;
  }
  if(barItem==bar[2]){//国际
    data = forData;
    dataType = 2;
  }
  pageChange(1);
  //切换颜色
  for(var i=0; i<bar.length;i++)
  if(bar[i] == barItem) {
    barItem.style.color ="#153458";
    barItem.style.fontWeight = "bold";
  }
  else {
    bar[i].style.color = "#6b6b6b";
    bar[i].style.fontWeight = "normal"
  }
}

  