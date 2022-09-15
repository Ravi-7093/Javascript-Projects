const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click",function(){ //setups the function call whenever a specified ebvent i delivered to the target
    //const randomnumber=getRandomNumber();
    let hexcol="#"
   for(let i=0;i<6;i++){
    hexcol+=hex[getRandomNumber()]
 }
   document.body.style.backgroundColor=hexcol
  color.textContent=hexcol

});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}