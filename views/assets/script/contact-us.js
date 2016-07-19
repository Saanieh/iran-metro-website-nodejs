var nameText = document.getElementById('name');
//var surnameText = document.getElementById('surname');
var emailText = document.getElementById('email');
var commentText = document.getElementById('comment');
var okBtn = document.getElementById('submitBtn');

var nameErr = document.getElementById('nameErr');
//var surnameErr = document.getElementById('surnameErr');
var emailErr = document.getElementById('emailErr');
var commentErr = document.getElementById('commentErr');

function onClick(){
    var flag = true;
    
    if (!nameText.value.trim()){
        nameErr.style.visibility = "visible";
        flag = false;
    }
    else
        nameErr.style.visibility = "hidden";
    
//    if (!surnameText.value.trim()){
//        surnameErr.style.visibility = "visible";
//        flag = false;
//    }
//    else
//        surnameErr.style.visibility = "hidden";
    
//    if (!emailText.value.trim()){
//        emailErr.style.visibility = "visible";
//        flag = false;
//    }
//    else
//        emailErr.style.visibility = "hidden";
    
    if (!commentText.value.trim()){
        commentErr.style.visibility = "visible";
        flag = false;
    }
    else
        commentErr.style.visibility = "hidden";
    
    return flag;
        
}