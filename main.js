var webcam = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
})
Webcam.attach('#camera');

function click(){
    Webcam.snap(function(data_uri){
        document.getElementById("done").innerHTML = '<img id="img" src= "'+ data_uri +'"/>';
    });
}
console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZPJpNvxrY/model.json',modelLoaded);
