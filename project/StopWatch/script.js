onload = function(){
    var sec = 00;
    var ten = 00
    var appen = document.getElementById("mini")
    var appensec = document.getElementById("seconds")
    var startButton = document.getElementById("button-start")
    var stopButton = document.getElementById("button-stop")
    var resetButton = document.getElementById("button-reset")
    var interval

    startButton.onclick = function(){
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }

    stopButton.onclick = function(){
        clearInterval(interval)
    }

    resetButton.onclick = function(){
        clearInterval(interval)
        ten = "00"
        sec = "00"
        appen.innerHTML = ten
        appensec.innerHTML = sec
    }

    function startTimer(){
        ten++
        if(ten < 9){
            appen.innerHTML = "0" + ten
        }

        if(ten > 9){
            appen.innerHTML = ten
        }

        if(ten >= 99){
            sec ++ 
            appensec.innerHTML = "0" + sec
            ten = 0
            appen.innerHTML = 0 + ten
        }

        if(sec > 9){
            appensec.innerHTML = sec
        }
    }
}