function validate(){
    var form = document.forms["signUp"];
    var fN = form['firstName'].value; 
    var lN = form['nd'].value;
    var e = form['email'].value;
    var regeX = /^[A-Za-z]+$/;
    var regeE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regeX.test(fN) === true && regeX.test(lN) === true  && regeE.test(e) === true){
        form.submit();
    }else if(regeX.test(fN) === false && regeX.test(lN) === true  && regeE.test(e) === true){
        document.getElementById("firstName").style.border = "2px solid red";
        return false;
    }else if(regeX.test(lN) === false && regeX.test(fN) === true && regeE.test(e) === true){
        document.getElementById("nd").style.border = "2px solid red";
        return false;
    }else if(regeE.test(e) === false && regeX.test(lN) === true && regeX.test(fN) === true){
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }else if(regeX.test(fN) === false && regeX.test(lN) === false && regeE.test(email) === false){
        document.getElementById("firstName").style.border = "2px solid red";
        document.getElementById("nd").style.border = "2px solid red";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
    return false;
}