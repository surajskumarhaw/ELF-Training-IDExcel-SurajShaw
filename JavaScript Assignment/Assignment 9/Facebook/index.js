function validate() {
    var form = document.forms["rightform"];
    var fN = form["fN"].value;
    var lN = form["nd"].value;
    var e = form["email"].value;


    var user = {
        firstName: fN,
        lastName: lN,
        email: e,
    }

    var userId = user.email + ""
    localStorage.setItem(userId, JSON.stringify(user))

    var userfound = localStorage.getItem(e);
    
    if (fN === "" && lN === "" && e === "") {
        document.getElementById("fN").style.border = "2px solid red";
        document.getElementById("nd").style.border = "2px solid red";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    } else {
        localStorage.setItem("currentUser", userfound)
        form.submit();

    }
    return false;
}