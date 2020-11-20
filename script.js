document.getElementById("demo").onclick = function() { alert('Click Button !!');};

function gaca() {
    document.getElementById("demo").innerHTML ="Maaf coba lagii >!>! ZONK"
    var gacha = Math.ceil(Math.random(gacha)* 100)
if (gacha<=40 && gacha >=0) {
    gacha = 1
}else if ((gacha<=75 && gacha >40)) {
    gacha = 2
}else if ((gacha<=90 && gacha >75)) {
    gacha = 3
}else if ((gacha<=97 && gacha >90)) {
    gacha = 4
}else if ((gacha<=100 && gacha >97)) {
    gacha = 5
}
switch (gacha) {
    case 1:
        document.getElementById("demo").innerHTML ="Maaf coba lagii >!>! ZONK";
        document.getElementById("myImg").src = "scream.gif"
        break;
    case 2:
        document.getElementById("demo").innerHTML ="Selamat anda dapat senjata bintang 3";
        document.getElementById("myImg").src = "3 star.jpg"
        break;
    case 3:
        document.getElementById("demo").innerHTML ="Selamat anda dapat senjata bintang 4";
        document.getElementById("myImg").src = "4 star.jpg"
        break;
    case 4:
        document.getElementById("demo").innerHTML ="Selamat anda dapat senjata bintang 5";
        document.getElementById("myImg").src = "5 star.jpg"
        break;
    case 5:
        document.getElementById("demo").innerHTML ="WOW, Selamat anda resmi pecinta Loli dan bangkrut!!";
        document.getElementById("myImg").src = "diona.gif"
        break;
    }
}
