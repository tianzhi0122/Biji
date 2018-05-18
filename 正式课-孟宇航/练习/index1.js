/**
 * Created by DELL on 2018/5/12.
 */
/**
 * Created by DELL on 2018/5/12.
 */
//1 获取元素
let list=document.getElementById("list");
let header=document.getElementById("header");
let sortBtn=header.getElementsByTagName("a");
let data=null;
//2 获取数据
let xhr=new XMLHttpRequest();
xhr.open("get","data/product.json",false);
xhr.onreadystatechange=function () {
    data=JSON.parse(xhr.responseText)
};
xhr.send(null);
console.log(data);
//3 将数据绑定到页面上
function bindHTML(data) {
//    循环拼接字符串 ES6模板字符串
    var str=``;
    data.forEach((item)=>{
        str+=`
<li>
            <a href="javascript:">
               <img src="${item.img}" alt="" />
                <p>${item.title}</p>
                    <p class="hot">热度:${item.hot}</p>
                <del>$9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </a>
        </li>`
    });
    list.innerHTML=str;
}
bindHTML(data);
//4 排序
for(let i=0;i<sortBtn.length;i++){
    sortBtn[i].flg=-1;
    sortBtn[i].onclick=function () {
        //点击每一个a标签传的参数不一样 都是自己的某一个排序的维度
        //将每一个a标签的属性sort-attr的值或取出来传给sort
        //第一个a标签this.getAttribute("sort-attr")=>time->"time"
        this.flg *= -1;
        sort.call(this, this.getAttribute("sort-attr"));
        //    up和down跟随
        arrowFollow.call(this);//将这个函数中的this变成你点击的那个a标签    }
        clearOther.call(this);
    }
};
function sort(sortStr) {
    //注意当你传进来的sortStr是time的时候
    if(sortStr=="time"){
        data.sort((a,b)=>(new Date(a[sortStr])-new Date(b[sortStr]))*this.flg);
    }else {
        data.sort((a,b)=>(a[sortStr]-b[sortStr])*this.flg);
    }
// data.sort((a,b)=>{
//     return sortStr=="time"? data.sort((a,b)=>(new Date(a[sortStr])-new Date(b[sortStr]))*this.flg): data.sort((a,b)=>(a[sortStr]-b[sortStr])*this.flg);
// })
    bindHTML(data)
}

    function arrowFollow() {
        //    根据点击的a标签将下面的俩三角（up和down）实现对应
//    获取当前点击的a标签中的两个i 就是获取他的俩孩子
        let up = this.children[0];
        let down = this.children[1];
    //    根据每一个a的flg（this.flg）来确定是谁有高亮样式
        if(this.flg>0){
        //    升序 up加上一个类名 add增加类名
            up.classList.add("bg");
            down.classList.remove("bg");
        }else {
            down.classList.add("bg");
            up.classList.remove("bg");
        }
    }
    function clearOther() {
    //    只要不是当前点击的a标签让里面的up和down没有bg类名
        for(let i=0;i<sortBtn.length;i++){
            if(sortBtn[i]!=this){
                sortBtn[i].children[0].classList.remove("bg");
                sortBtn[i].children[1].classList.remove("bg");
                //将其他的状态重置
                sortBtn[i].flg=-1;
            }
        }
    }

























