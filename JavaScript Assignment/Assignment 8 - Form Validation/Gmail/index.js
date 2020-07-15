function validate() {
    var form = document.forms['SignUp']
    var user = form['userName'].value;
    console.log(user);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user)) {
        form.submit();
    } else {
        var x = document.getElementById("errUser")
        document.getElementById("userName").style.border = "2px solid red";
        x.innerText = "Enter a valid email or phone number";
        x.style.color = "red";
        x.style.fontSize = "13px";
        return false;
    }
    return false;

}