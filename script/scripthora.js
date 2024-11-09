function myFunc()  {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById('display-hora').innerHTML = time;
}
setInterval(myFunc, 1000);