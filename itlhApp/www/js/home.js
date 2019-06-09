
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
    }
};

var logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener('click',checkLogout);


function checkLogout()
{
   window.location.href ='index.html';
}

app.initialize();