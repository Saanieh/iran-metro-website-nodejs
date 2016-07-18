var nameText = document.getElementById('name');
var surnameText = document.getElementById('surname');
var emailText = document.getElementById('email');
var resumeText = document.getElementById('resume');
var okBtn = document.getElementById('submitBtn');

//okBtn.addEventListener("click", onClick);

var nameErr = document.getElementById('nameErr');
var surnameErr = document.getElementById('surnameErr');
var emailErr = document.getElementById('emailErr');
var resumeErr = document.getElementById('resumeErr');

function onClick(){
    var flag = true;
    
    if (!nameText.value.trim()){
        nameErr.style.visibility = "visible";
        flag = false;
    }
    else
        nameErr.style.visibility = "hidden";
    
    if (!surnameText.value.trim()){
        surnameErr.style.visibility = "visible";
        flag = false;
    }
    else
        surnameErr.style.visibility = "hidden";
    
    if (!emailText.value.trim()){
        emailErr.style.visibility = "visible";
        flag = false;
    }
    else
        emailErr.style.visibility = "hidden";
    
    if (!resumeText.value.trim()){
        resumeErr.style.visibility = "visible";
        flag = false;
    }
    else
        resumeErr.style.visibility = "hidden";
    
    return flag;
        
}