//1.获取想要操作的元素
let list=document.getElementById("list");
let header=document.getElementById("header");
let sortBtn=document.getElementsByTagName("a");
let data=null;
//2.获取数据
let xhr=new XMLHttpRequest();
xhr.open("get","data/product.json",false);
xhr.onreadystatechange=function () {
    data=JSON.parse(xhr.responseText);
};
xhr.send(null);
console.log(data);
//3.将数据绑定到页面上
function bindHTML(data){
    //循环拼接字符串 ES6模板字符串
    var strHTML=``;
    data.forEach((item)=>{
        strHTML+=`
        <li>
            <a href="${item.url}">
            <img src="${item.img}" alt="">
                <p>${item.title}</p>
                <p class="hot">热度${item.hot}</p>
                <del>$9999</del>
                <span>￥${item.price}</span>
                <p class="time">${item.time}</p>
                 </a>
        </li>
        `
    })
    //将拼接好的字符串放在页面上 给list.innerHTML赋值
    list.innerHTML=strHTML;
}
bindHTML(data);

//4.排序
//操作的是数据 数据变了让视图刷新 重新执行bindHTML页面就会重新渲染
//我们排序排的是data  将data按照一定的维度排完序之后再去执行bindHTML即可
//循环所有的a排序
for (let i=0;i<sortBtn.length;i++){
    sortBtn[i].flg=-1;
    sortBtn[i].onclick=function () {
this.flg*=-1;
arrowFollow.call(this);
clearOther.call(this);
        if (i==0){
            //上架时间排序 第一个a标签 索引为0 i==0
           data.sort((a,b)=>(new Date(a.time)-new Date(b.time))*this.flg);
           bindHTML(data);
        }
        else if (i==1) {
            //价格排序
            //将data按照每一项的price排序
            data.sort((a,b)=>(a.price-b.price)*this.flg);
            //不要忘记让视图改变 执行bindHTML(data);
            bindHTML(data);
        }else{
            //热度排序
            data.sort((a,b)=>(a.hot-b.hot)*this.flg);
            bindHTML(data);
        }
        function arrowFollow() {
            //根据点击的a标签将下面的俩三角（up和down）实现对应
            let up=this.children[0];
            let down=this.children[1];
            //根据每一个a的flg来确定谁有高亮样式
            if(this.flg>0){
                up.classList.add("bg");
                down.classList.remove("bg");
            }else{
                down.classList.add("bg");
                up.classList.remove("bg");
            }
        }

        function clearOther() {
            //只要不是当前点击的a标签让里面的i标签没有'bg'类名
            for (let i=0;i<sortBtn.length;i++){
                if (sortBtn[i]!=this){
                    sortBtn[i].children[0].classList.remove("bg");
                    sortBtn[i].children[1].classList.remove("bg");
                    //将其他状态初始化
                    sortBtn[i].flg=-1;
                }
            }
        }
    }
}
