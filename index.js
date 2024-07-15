var datbtn = document.getElementById("button"),
datdiv = document.getElementById("div"),
thedate = new Date(),
month = thedate.getMonth(),
day = thedate.getDate(),
year = thedate.getFullYear();
span = document.querySelectorAll("span");


function calc() {
    var date = new Date(),
        hours = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();


    var dat = window.input.value,
        arr = dat.split("-"),
        arr0 = eval(arr[2]),
        arr1 = eval(arr[1]),
        arr2 = eval(arr[0]),
        userday = 30 + day - arr0,
        usermonth = 12 + month - arr1,
        useryear = year - 1 - arr2;

    if(arr[1] == null){
        span.textContent.display ="none";
    }  
    if(userday >= 30){
        userday = 0 + userday % 30;
        usermonth = usermonth + 1;
    }else {
        userday = userday;
        usermonth = usermonth;
    }

    if(usermonth >= 12){
        usermonth = usermonth % 12;
        useryear = useryear + 1;
    }else{
        usermonth = usermonth;
        useryear = useryear;
    }


    if(hours < 10){ 
       hours = "0" + hours
    }

    if(minute < 10){
        minute = "0" + minute
    }

    if(second < 10){
        second = "0" + second
    }
    if(userday < 10){
         userday = "0" + userday
    }
    if(usermonth < 10){
        usermonth = "0" + usermonth
    }
    if(useryear < 10){
        useryear = "0" + useryear
    }


    span[0].textContent = useryear;
    span[1].textContent = usermonth;
    span[2].textContent = userday;
    span[3].textContent = hours;
    span[4].textContent = minute;
    span[5].textContent = second;


    setInterval(calc, 1000);

}