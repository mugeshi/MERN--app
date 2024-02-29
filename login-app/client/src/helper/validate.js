import toast from 'react-hot-toast'


//validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}


//validate password
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}



//Validate password
function passwordVerify(errors = {}, values){
     
    const specialchars = "! @ # $ % ^ & * ( ) _ + - = { } [ ] | ; : ' , . < > / ?"

    if(!values.password){
        errors.password = toast.error("password Required...!");
    }else if (values.password.include(" ")){
        errors.password = toast.error("wrong password...!");
    }else if (values.password.length < 4){
         errors.password = toast.error("Password must be more than 4 character long");
    }else if(!specialchars.test(values.password)){
          errors.password = toast.error("Password must have speacial characters");
    }

    return error;
}





//validate username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required ...!')
     
    } else if(values.username.include(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}


