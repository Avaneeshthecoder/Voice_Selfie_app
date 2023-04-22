var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ""
    Recognition.start()
}
Recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    if (content=="take my selfie") {
        speak()
        
    }
    document.getElementById("textbox").innerHTML = content
}
function speak() {
    var s= window.speechSynthesis
    //data= document.getElementById("textbox").value
    data= "Taking your selfie in 5 seconds."
    var speak_this= new  SpeechSynthesisUtterance(data)
    speak_this.pitch= 1.5
    speak_this.rate= 1.23
    speak_this.volume= 0.05
    s.speak(speak_this)
    Webcam.attach("#camera");
    Webcam.attach(cam);
    setTimeout(() => {
        take_snapshot();
        save()
    }, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 cam=document.getElementById("camera")
function take_snapshot() {
    Webcam.snap(function (dataurl) {
    document.getElementById("result").innerHTML='<img id="selfie_img" src="'+dataurl+'">'        
    })
}
function save() {
    link=document.getElementById("link")
    img=document.getElementById("selfie_img").src;
    link.href=img
    link.click()   
}