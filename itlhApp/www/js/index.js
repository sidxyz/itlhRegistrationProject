
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
    }
};


// baseUrl='https://b7aec922.ngrok.io';
// var contentOfSecurityPolicy = `default-src 'self' 
//  `+baseUrl+` 
//  data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval';
//  style-src 'self' 'unsafe-inline'; `;
//  console.log("csr is as follows===>");
//  console.log(contentOfSecurityPolicy);
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener('click',checkLogin);


function checkLogin()
{
    var postData = {
        email : document.getElementById("userName").value,
        password : document.getElementById("password").value
    };

    $.ajax(
        {
            url:"https://b7aec922.ngrok.io/login",
            type:'POST',
            data:JSON.stringify(postData),
            success:successfulLoginResponse,
            contentType:'application/x-www-form-urlencoded'
        }
    )
}

function successfulLoginResponse(response)
{
    console.log(response);

    if(response=="success")
    {
        //alert("Logged in Successfully");
        //window.location='home.html';
        window.location.href = 'home.html';
    }
    else
    {
        alert("please check your credentials");
    }
}
app.initialize();