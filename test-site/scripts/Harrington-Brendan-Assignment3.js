

function isStrongPassword(input){
    contains_num = false;
    sub_password = false;

    // checking password length > 8
    if (input.length < 8){
        console.log("Password is too short :(");
        return false;
    }

    // checking that password contains a num
    for (let i = 0; i < input.length; i++){
        if (input.charCodeAt(i) > 48 && input.charCodeAt(i) < 57){
            contains_num = true;
        }
    }

    // checking that password does not contain substring "password"
    if (input.indexOf("password") != -1){
        sub_password = true;
    }

    if (contains_num == false){
        console.log("Password must contain a number :(");
        return false;
    } else if (sub_password == true){
        console.log("Password cannot contain the word 'password' :(");
        return false;
    } else {
        console.log("Password Works !! :)");
        return true;
    }

    
}

function printCharCode(str){
    for (let i = 0; i < str.length; i++){
        console.log(str.charCodeAt(i));
    }
}
isStrongPassword("qwerty1") // false - too short
isStrongPassword("qwertypassword1") // false - contains 'password'
isStrongPassword("qwertyABC") // false - no numbers
isStrongPassword("qwerty123") //true

// printCharCode("p")

