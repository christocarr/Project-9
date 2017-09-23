

function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "active") {
        x.className += "responsive";
    } else {
        x.className = "active";
    }
}


var crt = document.getElementById('myChart');