let imgBox  = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText  = document.getElementById("text");
let elmError = document.getElementById("error");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        + qrText.value;
        imgBox.style.display = "block";
        qrText.style.border = "1px solid #494eea";
        elmError.style.display = "none";
    }else{
        qrText.style.border = "1px solid red";
        elmError.style.display = "block";
    }
}

qrText.addEventListener('keydown', function(event) {
    imgBox.style.display = "none";
    qrText.style.border = "1px solid #494eea";
    elmError.style.display = "none";
});