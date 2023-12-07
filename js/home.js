//国内外疫情切换
function ChangeTab(caseTab){
    var tabBro =document.getElementsByClassName("newcase-tab-item")
    var dataArr = document.getElementsByClassName("data")
    //改变颜色
    for(var i = 0; i < tabBro.length; i++){
        if(tabBro[i]!=caseTab){
            tabBro[i].style.background ="rgb(255, 255, 255,0.5)"
        }
        else{
            tabBro[i].style.background ="rgb(255, 255, 255)"
        }
    }
    //console.log(caseTab.textContent)
    //设置人数
    if(caseTab==tabBro[0]){
        dataArr[0].src="../img/a.webp";
        dataArr[1].src="../img/f.webp";
        dataArr[2].src="../img/h.webp";
        dataArr[3].src="../img/w.webp";
    }
    else{
        dataArr[0].src="../img/awsl.jpg";
        dataArr[1].src="../img/yao.jpg";
        dataArr[2].src="../img/chao.jpg";
        dataArr[3].src="../img/jian.jpg";
    }
}
//弹出详细新闻窗
function PopNews(thisNews) {
    var newsArr = document.getElementsByClassName("btn-more")
    var index=0;//点击序号
    for(var i=0; i<newsArr.length;i++)
    {
        if(thisNews == newsArr[i]){
            index = i;
            console.log(index)
        }
    }
    //获取点击标题文字
    var titleName = "newsTitle"+index
    var title = document.getElementById(titleName).textContent
    var content = document.getElementsByClassName("news-content-intro")[index].textContent.replace(/\s*/,"")
    //设置窗口标题序号
    var winTitle = document.getElementById("winTitle")
    winTitle.innerText = title
    var winContent = document.getElementById("winContent")
    winContent.innerText =content
    //显示
    document.getElementById("popWin").setAttribute("style","display: block;")
}
//关闭显示窗
function WinOut(){
    var win =document.getElementById("popWin")
    win.setAttribute("style","display: none;")
}