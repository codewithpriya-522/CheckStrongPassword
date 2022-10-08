
function showPassword(){
    var showpass=document.getElementById("txtPassword");
var showicon=document.getElementById("ShowIcon");
var hideicon=document.getElementById("HideIcon");
    if(showpass.type=="password"){
        showpass.type="text";
        showicon.style.display="none";
        hideicon.style.display="flex"
    }
    else{
        showpass.type="password";
        showicon.style.display="flex";
        hideicon.style.display="none";
    }
}
function checkpasswordStrongOrNot(value)
{
    var Showpass=document.getElementById("txtPassword");
    if(Showpass.value.length>=8)
    {
        document.getElementById("message1").innerHTML="strong password"
    }       
    else if(Showpass.value.length>=5)
    {
        document.getElementById("message1").innerHTML="medium password"

    } 
    else
    {
        document.getElementById("message1").innerHTML="week password"
    }
}
