
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
    }
};

var loginButton = document.getElementById("loginButton");
loginButton.addEventListener('click',checkLogin);

//constant login credentials
var superusername = "admin@gmail.com";
var superuserpwd = "admin";

function checkLogin()
{
    if(document.getElementById("userName").value == superusername &&
       document.getElementById("password").value == superuserpwd)
       {
            alert("Login was successful!");
       }
       else
       {
            alert("Please check your credentials!");
       }

}

app.initialize();