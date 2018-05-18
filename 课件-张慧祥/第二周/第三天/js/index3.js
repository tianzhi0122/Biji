let list=document.getElementById("list");
let header=document.getElementById("header");
let sortBtn=document.getElementsByTagName("a");
let data=null;

let xhr=new XMLHttpRequest();
xhr.open("get","data/product.json",false);
xhr.onreadystatechange=function () {
    data=JSON.parse(xhr.responseText);
};
xhr.send(null);

function bindHTML(data) {
    var strHTML="";
    data.forEach((item)=>{
        strHTML+=`
        <li>
            <a href="javascript:;">
                <img src="${item.img}" alt="">
                <p>${item.title}</p>
                <p class="hot">热度:${item.hot}</p>
                <del>$9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
            </a>
        </li>
        `
    });
    list.innerHTML=strHTML;
}
bindHTML(data);

for (let i=0;i<sortBtn.length;i++){
    sortBtn[i].onclick=function(){
        if (i==0){

        } else if(i==1){

        } else{

        }
    }

}
