
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
    }
};

var imageButton = document.getElementById("uploadImage");
imageButton.addEventListener('click',openCamera);

function openCamera()
{
    var cameraOptions={// Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true,  //Corrects Android orientation quirks
        targetHeight:100,
        targetWidth:100
    };

    navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
}

function cameraSuccess(imageURI)
{
    //console.log(imageData);
    var image = document.getElementById('myImage');
    image.src = imageURI;
    image.style.display="inline";
}

function cameraError(message)
{
    console.log(imageData);
}


// function checkLogout()
// {
//    window.location.href ='index.html';
// }

app.initialize();