let heading =document.getElementById("heading");
let input=document.getElementById("input");
let para=document.getElementById("para");

//change heading
document.getElementById("changeTTextBtn").onclick=function(){
    heading.innerText=input.value;
}

//change event
input.onchange=function(){
    console.log("Input changed to:",input.value);
};
//change background color
document.getElementById("bgcolorBtna")..addEventlistener=("click",function(){
    document.body.style.backgroundColor="lightblue";
});

//change font size
document.getElementById("fontSizeBtn").addEventListener("click",function(){
    heading.style.fontSize="100px";
});
//Reset page 
document.getElementById("resetBtn").addEventListener("click",function(){
    location.reload();
});

//mouse over event
heading.addEventListener("mouseover",function(){
    heading.style.color="blue";
});

//function expression with parameter
const squareFun=function(n){
return n*n;
};

//syntax 
//const function name =(parameters)=>expression;

const addNumbber