

let currentIndex = 0
const images = document.querySelectorAll(".slider-image")
const totalImages = images.length
function changeImage() {
images [currentIndex].style.display = "none"
currentIndex = (currentIndex + 1) % totalImages
images [currentIndex].style.display = "block"
}
setInterval(changeImage, 2000)

function validateForm() {

    const nama = document.forms['message-form']['name-input'].value
    const angka = 11

    if (nama == '') {
    document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"
    return false
    }
   
    setName(nama);
    return false;
    }

    function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = ""
    }