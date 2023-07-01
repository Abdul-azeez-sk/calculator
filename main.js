const buttons=document.querySelectorAll('.but');
const box=document.querySelector('.box');
const ans=document.querySelector('.ans');
const clear=document.querySelector('.clear');
let currentvalue="";
buttons.forEach((button)=>{
    button.addEventListener('click',function (event) {
            let buttonvalue = event.target.textContent;
            console.log(buttonvalue);
            currentvalue=currentvalue+buttonvalue;
            box.value=currentvalue;
        })
})
ans.addEventListener('click',()=>{
    let answer=eval(currentvalue);
    box.value=answer;
    currentvalue="";
})
clear.addEventListener('click',()=>{
    currentvalue="";
    box.value="";
})

