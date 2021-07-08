window.addEventListener("load", function(){

    let counter = 00;
    let display = document.getElementById("display-counter");
    let countUp = document.getElementById("count-up");
    let countDown = document.getElementById("count-down");
    let reset = document.getElementById("reset");

    countUp.addEventListener("click", function(){
        counter++;
        displayCounter();
        lessThanNine();
    })

    countDown.addEventListener("click", function(){
        counter--;
        displayCounter();
        lessThanNine();
        lessThanZero();
    })

    reset.onclick = function(){
        counter = 0;
        display.innerHTML = "00";
    }

    function displayCounter(){
        display.innerHTML = counter;
    }

    function lessThanNine(){
        if(counter <= 9){
            display.innerHTML = "0" + counter;
        }
    }

    function lessThanZero(){
        if(counter <= 0){
            counter = 0;
            display.innerHTML = "0" + 0;
        }
    }
})