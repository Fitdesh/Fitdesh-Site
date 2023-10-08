const tampilkanTombolButton = document.getElementById("tampilkanTombol");
const layer = document.getElementById("layer");

tampilkanTombolButton.addEventListener("click", function () {
    if (layer.style.display === "none" || layer.style.display === "") {
        layer.style.display = "block";
    } else {
        layer.style.display = "none";
    }
});

var targetDate = new Date("September 26, 2024 06:59:59").getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();

    var timeRemaining = targetDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Domain Telah Berakhir!";
    }
}, 1000);
