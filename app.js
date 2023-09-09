const container=document.querySelector(".container");
const love=document.querySelector("i");

container.addEventListener("dblclick",function(){
    console.log("Hello");
    love.style.transform='translate(-50%,-50%) scale(1)'
    love.style.opacity=0.8;


    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)'
        love.style.opacity=0;

    },2000)
})