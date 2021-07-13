let userName = prompt("Adınız Nedir");
let myName = document.querySelector("#myName");
myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`;

var day = new Date().getDay();
console.log(day);
switch (day) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
}

showTime();

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('myClock').innerHTML = `${h}:${m}:${s} ${day}`;
    var t = setTimeout(showTime, 1000);
}

