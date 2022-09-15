const colors = ['green','red','rgba(133,122,200)','#f15025']
const btn = document.getElementById("btn")
console.log(btn)
const color = document.querySelector(".color")//returns the first element that is  descendant of the element that matches  
console.log(color)

btn.addEventListener("click",function(){ //setups the function call whenever a specified ebvent i delivered to the target
    const randomnumber=getRandomNumber();
    console.log(randomnumber)
    document.body.style.backgroundColor=colors[randomnumber]
    color.textContent=colors[randomnumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}