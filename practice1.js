var name = window.prompt("Please, enter your name: ");

var greeting = document.getElementById("greeting");

greeting.innerHTML += name;

var enterDays = document.getElementById("enterDays");

enterDays.onclick = calc;

function calc(){
    var daysInput = document.getElementById("days");

    var days = daysInput.value;

    var msg = document.getElementById("daysMessage");

    if(days < 4){
        msg.innerHTML = "Short trips are always worth it!";
    }
    else if(days < 7){
        msg.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else{
        msg.innerHTML = "You'll have plenty of time to relax and have fun!";
    }


    var hours = days * 24;

    var hoursMsg = document.getElementById("hoursMessage");

    hoursMsg.innerHTML = "That means you'll be traveling for " + hours + " hours.";

    var min = hours * 60;

    var minMsg = document.getElementById("minutesMessage");

    minMsg.innerHTML = "Which means that you'll be traveling for " + min + " minutes.";

    var sec = min * 60;

    var secMsg = document.getElementById("secondsMessage");

    secMsg.innerHTML = "That'll be " + sec + " seconds.";

    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden"); 


    timingNext.onclick = function(){
        document.getElementById("budgetSection").removeAttribute("hidden");
    }
    
    var bdg = document.getElementById("enterBudget");
    
    bdg.onclick = budgetNext;
    
    function budgetNext(){
        var trBdg = document.getElementById("tripBudget");
    
        var budget = trBdg.value * 8000;
    
        var eachDay = budget/days;
    
        var exMsg = document.getElementById("tripExchangeMsg");
        exMsg.innerHTML = "You will have " + budget + " sums.";
    
        var dayMsg = document.getElementById("dailyExchangeMsg");
        dayMsg.innerHTML = "You may use " + eachDay + " each day.";
    
        var ten = 8000*10;
        var one = document.getElementById("exchange10Msg");
        one.innerHTML = "You will need " + ten + " to buy 10 US Dollar thing."

        var five = 8000*500;
        var two = document.getElementById("exchange500Msg");
        two.innerHTML = "You will need " + five + " to buy 500 US Dollar thing."
    }
 
    
    var images = ["uzbekistan-2.jpg", "xiva_uzbekistan_15102017.jpg", "Registan-Samarkand-Uzbekistan.jpg"];

    var currentImage = 0;

    setInterval(changeImage, 3000);

    function changeImage(){
        currentImage ++;
        if(currentImage > images.length - 1){
            currentImage = 0;
        }
        document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
    }
}


