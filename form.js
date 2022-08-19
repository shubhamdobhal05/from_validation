function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerText = error;
}


function validation() {
    var returnVal = true
    var name = document.forms['myForm']["fname"].value;
    if(name.length < 5) {
        setError("name", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(name[0] == "+" || name[0] == "-" || name[0] == "_") {
        setError("name", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(name);
        if(!inValid) {
            setError("name", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    var proName = document.forms['myForm']["pname"].value;
    if(proName.length < 5) {
        setError("project", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(proName[0] == "+" || proName[0] == "-" || proName[0] == "_") {
        setError("project", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(proName);
        if(!inValid) {
            setError("project", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    var buckName = document.forms['myForm']["bname"].value;
    if(buckName.length < 5) {
        setError("bucket", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(buckName[0] == "+" || buckName[0] == "-" || buckName[0] == "_") {
        setError("bucket", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(buckName);
        if(!inValid) {
            setError("bucket", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    var storage = document.forms['myForm']["fstorage"].value;
    if(storage.length < 5) {
        setError("storage", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(storage[0] == "+" || storage[0] == "-" || storage[0] == "_") {
        setError("storage", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(storage);
        if(!inValid) {
            setError("storage", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    var cred = document.forms['myForm']["fcred"].value;
    if(cred.length < 5) {
        setError("cred", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(cred[0] == "+" || cred[0] == "-" || cred[0] == "_") {
        setError("cred", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(cred);
        if(!inValid) {
            setError("cred", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    var time = document.forms['myForm']["ftime"].value;
    if(time.length < 5) {
        setError("number", "Name cannot be shorter than 5 letter");
        returnVal = false
    } else if(time[0] == "+" || time[0] == "-" || time[0] == "_") {
        setError("number", "Name cannot start with +,_,-");
        returnVal = false
    } else {
        var regex = /^[A-Za-z0-9]+$/
        var inValid = regex.test(time);
        if(!inValid) {
            setError("number", "Name cannot contain Specal characters");
        returnVal = false
        }
    }
    
    return returnVal
}

