let userName = document.getElementById("userName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let male = document.getElementById("male");
let female = document.getElementById("female");
let age = document.getElementById("age");
let date = document.getElementById("date");
let color = document.getElementById("color");


console.log(date.value);



function myFun() {


    let error = document.getElementById("error");

    if (userName.value == "") {
        error.innerText = "Required Field must be fill"
        userName.style.border = "1px solid red";



    }
    else if (userName.value.length <= 3) {
        error.innerText = "Length must be greater than 3";


    }
    else if (!isNaN(userName.value)) {
        error.innerText = "Only Aplhabets"


    } else if (userName.value.length >= 3) {
        userName.style.border = "2px solid rgb(5, 212, 5)"
        error.innerText = ""



    }

    // Email
    if (email.value == "") {
        document.getElementById("emails").innerText = "Required Field must be fill"
        email.style.border = "1px solid red"


    }
    else if (email.value.indexOf("@") == 0) {
        document.getElementById("emails").innerText = "@ At Wrong position"
        email.style.border = "1px solid red"


    }

    else if (email.value.indexOf('.') != email.value.length - 4 && email.value.indexOf('.') != email.value.length - 3) {
        document.getElementById("emails").innerText = ". at Wrong position";

    }
    else if (email.value.indexOf('.') == email.value.length - 4 || email.value.indexOf('.') == email.value.length - 3) {
        document.getElementById("emails").innerText = "";
        email.style.border = "2px solid rgb(5, 212, 5)"

    }

    //   number

    if (number.value == "") {
        document.getElementById("num").innerText = "Required Field must be fill"
        number.style.border = "1px solid red";



    }

    else if (number.value.length != 10) {
        document.getElementById("num").innerText = "Length must be 10";
        number.style.border = "1px solid red";



    }

    else if (number.value.length == 10) {
        document.getElementById("num").innerText = "";
        number.style.border = "2px solid rgb(5, 212, 5)"




    }

    // password

    if (password.value == "") {
        document.getElementById("pass").innerText = "Required Field must be fill"
        password.style.border = "1px solid red";



    } else if (password.value !== "") {
        document.getElementById("pass").innerText = ""
        password.style.border = "1px solid rgb(5, 212, 5) ";




    }

    // age

    if (age.value == "") {
        document.getElementById("ages").innerText = "Required Field must be fill"
        age.style.border = "1px solid red";



    } else if (age.value < 1) {
        document.getElementById("ages").innerText = "Must be Greate then 1"
        age.style.border = "1px solid red";


    }
    else if (age.value > 100) {
        document.getElementById("ages").innerText = "Must be less then 100"
        age.style.border = "1px solid red";


    }
    else if (age.value > 1 && age.value < 100) {
        document.getElementById("ages").innerText = ""
        age.style.border = "1px solid rgb(5, 212, 5) ";



    }

    // gender

    if (male.checked == false && female.checked == false) {

        document.getElementById("gender").innerText = "Must select Male or Female"
    }
    else if (male.checked == true || female.checked == true) {
        document.getElementById("gender").innerText = ""
    }

    // date



    function checkDate() {
        let data = new Date();
        let m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        for (let i = 0; i <= m.length; i++) {
            console.log(m[i]);
            if (m[i] == data.getMonth()) {
                let a = ("current" + m[i + 1]);



                let todayDate = data.getFullYear() + "-" + "0" + m[i + 1] + "-" + data.getDate();
                console.log(todayDate);
                console.log(date.value);


                if (todayDate != date.value) {
                    document.getElementById("dates").innerHTML = "Please Enter Valid Date";
                    date.style.border = "1px solid red"

                } else if (todayDate == date.value) {
                    document.getElementById("dates").innerHTML = "";
                    date.style.border = "1px solid green"
                }
            }
        }
    }
    checkDate();




    // COLOR

    console.log();

    if (color.value == "#000000") {
        document.getElementById("colors").innerHTML = "Please Select Color"
        color.style.border = "1px solid red"
    }
    else if (color.value != "#000000") {
        document.getElementById("colors").innerHTML = ""
        color.style.border = "1px solid rgb(5, 212, 5)"
    }
    console.log(color.value);
}
