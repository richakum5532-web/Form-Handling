// console.log("js is working
function validateForm(){
    let name=document.getElementById("name").value.trim();
    let nerror=document.getElementById("nerror")
    let email=document.getElementById("email").value.trim();
    let eerror=document.getElementById("eerror")
    let phone=document.getElementById("phone").value.trim();
    let perror=document.getElementById("perror")
    let password=document.getElementById("password").value
    let passerror=document.getElementById("passerror")
    let confirmpassword=document.getElementById("confirmpassword").value
    let cpasserror=document.getElementById("cpasserror")
    let address=document.getElementById("address").value.trim();
    let adderror=document.getElementById("adderror")

    document.getElementById("nerror").innerHTML = "";
    document.getElementById("eerror").innerHTML = "";
    document.getElementById("perror").innerHTML = "";
    document.getElementById("passerror").innerHTML = "";
    document.getElementById("cpasserror").innerHTML = "";
    document.getElementById("generror").innerHTML = "";
    document.getElementById("counerror").innerHTML = "";
    document.getElementById("herror").innerHTML = "";
    document.getElementById("adderror").innerHTML = "";

        if (name==""){
        document.getElementById("nerror").innerHTML = "Name can't be blank";
        return false;
    }

    if (name.length<3){
        document.getElementById("nerror").innerHTML = "Name must be at least 3 characters";
        return false;
    }

    if (email == ""){
        document.getElementById("eerror").innerHTML = "Email can't be blank";
        return false;
    }

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)){
        document.getElementById("eerror").innerHTML = "Invalid email";
        return false;
    }

    if (phone == ""){
        document.getElementById("perror").innerHTML = "Phone can't be blank";
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)){
        document.getElementById("perror").innerHTML = "Invalid phone number";
        return false;
    }

    if (password==""){
        document.getElementById("passerror").innerHTML = "Password can't be blank";
        return false;
    }

    if (password.length<6){
        document.getElementById("passerror").innerHTML = "Password must be at least 6 characters";
        return false;
    }

    if (confirmpassword == ""){
        document.getElementById("cpasserror").innerHTML = "Confirm password can't be blank";
        return false;
    }

    if (password!== confirmpassword){
        document.getElementById("cpasserror").innerHTML = "Passwords do not match";
        return false;
    }

    let gender=document.getElementsByName("gender");
    let genderSelected = false;

    for (let i = 0; i < gender.length; i++){
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected){
        document.getElementById("generror").innerHTML = "Select your gender";
        return false;
    }

    let country=document.getElementById("country").value;
    let cerror=document.getElementById("counerror").value

    if (country==""){
      cerror.innerHTML= "Select your country";
        return false;
    }

    let hobby=document.getElementsByName("hobby");
    let hobbySelected=false;

    for (let i=0; i<hobbyobby.length;i++){
        if (hobby[i].checked){
            hobbySelected = true;
            break;
        }
    }
    if(!hobbySelected) {
        document.getElementById("herror").innerHTML = "Select your hobby";
        return false;
    }

    if (address=="") {
        document.getElementById("adderror").innerHTML = "Address can't be blank";
        return false;
    }

    if (address.length<15) {
        document.getElementById("adderror").innerHTML = "Address must be at least 15 characters";
        return false;
    }

    return true;

}