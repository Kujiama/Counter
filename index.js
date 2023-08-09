const buttons = document.querySelectorAll(".btn");
const counter = document.getElementById("counter");
let startNum = 0;

counter.textContent = startNum;

buttons.forEach(btn => {
    btn.addEventListener("click",() => {
    
        if(btn.classList.contains('add')){
            startNum++;
        }else if(btn.classList.contains('reset')){
            startNum = 0;
        }else if(btn.classList.contains('subtract')){
            startNum--;
        }
        
        display() // every after the click event this function will always run
    });
    
});


function display(){
    counter.textContent = startNum;

    if(startNum < 1){
        document.querySelector('.reset').disabled = true;
        document.querySelector('.subtract').disabled = true;
    }else if (startNum > 0){
        document.querySelector('.reset').disabled = false;
        document.querySelector('.subtract').disabled = false;
    }
}