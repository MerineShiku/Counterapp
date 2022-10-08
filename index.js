let countEl=document.getElementById("count-el")

let preCount=document.getElementById("pre-count")

let count= 0

function increment(){
    count +=1
    countEl.textContent =count
    console.log(20)
}




function save(){
    countEl.textContent =0
    preCount.textContent +=count +" - "
    count=0
    
}