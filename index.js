const text=document.querySelector('p')
const minus=document.querySelectorAll('button')[0]
const add=document.querySelectorAll('button')[1]
const input=document.querySelector('input')
let money=10000
text.textContent=10000
minus.addEventListener('click',()=>{
    if(+text.textContent-input.value>=0){
        text.textContent=+text.textContent-input.value
    }
    else{
        alert("Balansinizda kifayet qeder vesait yoxdur")
    }
})
add.addEventListener('click',()=>{
    text.textContent=+text.textContent+ +input.value
})