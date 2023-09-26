const tampilkanTombolButton = document.getElementById("tampilkanTombol");
const layer = document.getElementById("layer");

tampilkanTombolButton.addEventListener("click", function () {
    if (layer.style.display === "none" || layer.style.display === "") {
        layer.style.display = "block";
    } else {
        layer.style.display = "none";
    }
});

// Optional: Tambahkan event listener untuk tombol-tombol di dalam layer jika diperlukan.
