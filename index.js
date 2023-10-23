// event mouse
document.getElementById('btn').addEventListener("mouseenter", function () {
    document.getElementById('key_2').style.padding = "20px"
    document.getElementById('key_2').style.width = "150px"
    document.getElementById('key_2').style.margin = "5px"
    document.getElementById('key_2').style.fontSize = "30px"
    document.getElementById('key_2').innerText = "Alhamdulillahh"
}) 


// event keyboard
document.getElementById('key').addEventListener("keypress", function (event) {
    document.getElementById('key_2').style.padding = "20px"
    document.getElementById('key_2').style.width = "150px"
    document.getElementById('key_2').style.margin = "5px"
    document.getElementById('key_2').style.fontSize = "30px"
    document.getElementById('key_2').innerText = "Belom Nihhh"
})


// event change = terjadi ketika sesuatu berubah
document.getElementById('warna').addEventListener("change", function () {
    document.getElementById('key_2').style.color = document.getElementById('warna').value
    document.getElementById('key_2').style.padding = "20px"
    document.getElementById('key_2').style.width = "150px"
    document.getElementById('key_2').style.margin = "5px"
    document.getElementById('key_2').style.fontSize = "30px"
})

// // event mouse
// document.getElementById('btn').addEventListener("mouseenter", function() {
// alert("Gaada Duit, Kerja Sana!!")   
// })

// function MouseEvent(value) {
//     let title = document.getElementById("title")
//     if (value == 1) {
//         title.innerText = "Berjalan"
//     } else {
//         title.innerText = "Berhenti"
//     }
// }