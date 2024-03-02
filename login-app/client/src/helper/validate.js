import toast from 'react-hot-toast';



/** validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
}


/** validate password */
function passwordVerify(errors = {}, values) {
    const specialchars = "!@#$%^&*()_+-={}[]|;:',.<>/?";

    if (!values.password) {
        errors.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        errors.password = toast.error("Invalid Password...!");
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters long");
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.password)) {
        errors.password = toast.error("Password must have special characters");
    }
    return errors;
}


/** validate username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);
    return errors;
}

/** validate username */
function usernameVerify(errors = {}, values) {
    if (!values.username) {
        errors.username = toast.error('Username Required ...!');
    } else if (values.username.includes(" ")) {
        errors.username = toast.error('Invalid Username...!');
    }
    return errors;
}


//Validate Reset password
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password != values.confirm_pwd){
        errors.exist = toast.error('password not match...!')
    }

    return errors

}