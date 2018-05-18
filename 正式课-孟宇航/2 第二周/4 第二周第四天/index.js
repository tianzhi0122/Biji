/**
 * Created by DELL on 2018/5/12.
 */
// 1 获取元素
var list=document.getElementById("list");
var header=document.getElementById("header");
var btnList=header.getElementsByTagName("a");

//2 获取数据
let data=null;
let xhr=new XMLHttpRequest();//创建一个AJAX对象
xhr.open("get","data/product.json",false);//打开地址
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200) {
        data = JSON.parse(xhr.responseText)
    }
};//3监听状态及获取数据
xhr.send(null);//4发送AJAX请求



function bindHtml(data) {
    let str=``;
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
        </li>
`
    });
    list.innerHTML=str
}
for(var i=0;i<btnList.length;i++){
    btnList[i].index=i;
    btnList[i].onclick=function () {
        this.index*=-1;
        data.sort((a,b)=>{
            return (a["price"]-b["price"])*this.index

        });
        bindHtml(data)
    }

}








