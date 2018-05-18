/**
 * Created by DELL on 2018/5/14.
 */
//1 获取元素
let header=document.getElementById("header");
let list=document.getElementById("list");
let btnSort=header.getElementsByTagName("a");
let data=null;
//2 获取数据
let xhr=new XMLHttpRequest();
xhr.open("get","data/product.json",false);
xhr.onreadystatechange=function () {
    data=JSON.parse(xhr.responseText);
};
xhr.send(null);
//3 将数据引入页面
function bindHTML(data) {
    let str=``;
    data.forEach((item)=>{
        str+=`
 <li>
            <img src="${item.img}" alt="">
            <p class="introduce">${item.title}</p>
            <p class="hot">${item.hot}</p>
            <del>$9999</del>
            <span>${item.price}</span>
            <p class="time">${item.time}</p>
        </li>
`
    });
    list.innerHTML=str;
}
bindHTML(data);
//4 排序


    for(let i=0;i<btnSort.length;i++){
        btnSort[i].flg=-1;
        btnSort[i].onclick=function () {
            this.flg*=-1;
            sort.call(this,this.getAttribute("attr"));
            arrFollow.call(this);
            clearOther.call(this);
        }
    }


function sort(sortStr){
    if(sortStr=="time"){
        data.sort((a,b)=>((new Date(a[sortStr]))-(new Date(b[sortStr])))*this.flg);
    }else {
        data.sort((a,b)=>(a[sortStr]-b[sortStr])*this.flg);
    }
    bindHTML(data);
}

function arrFollow() {
    let up=this.children[0];
    let down=this.children[1];
    if(this.flg>0){
        up.classList.add("bg");
        down.classList.remove("bg");
    }else {
        down.classList.add("bg");
        up.classList.remove("bg");
    }
}
function clearOther() {
    for(let i=0;i<btnSort.length;i++){
        if(btnSort[i]!=this){
            btnSort[i].children[0].classList.remove("bg");
            btnSort[i].children[1].classList.remove("bg");
            btnSort[i].flg=-1;
        }
    }
}




















