// for the text visible or not visible code

var link=document.querySelector(".container-link")
var textvisible=document.querySelector(".textvisible")
var flag = 0;
link.addEventListener("click",function(){
    if(flag == 0){
    textvisible.style.display="inline";
    link.innerHTML="Show less";
    flag = 1;
    }else{
        textvisible.style.display="none";
        link.innerHTML="Show more";
        flag = 0;
    }
})