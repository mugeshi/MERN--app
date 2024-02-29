import toast from 'react-hot-toast';

/** validate password */
export async function passwordValidate(values) {
    const errors = await passwordVerify({}, values);
    return errors;
}

/** validate password */
async function passwordVerify(errors = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        // Check if error already exists before displaying a new one
        if (!errors.password) {
            errors.password = toast.error("Invalid Password...!");
        }
    } else if (values.password.length < 4) {
        if (!errors.password) {
            errors.password = toast.error("Password must be more than 4 characters long");
        }
    } else if (!specialChars.test(values.password)) {
        if (!errors.password) {
            errors.password = toast.error("Password must have a special character");
        }
    }

    return errors;
}

/** validate username */
export async function usernameValidate(values) {
    const errors = await usernameVerify({}, values);
    return errors;
}

/** validate username */
function usernameVerify(errors = {}, values) {
    if (!values.username) {
        errors.username = toast.error('Username Required...!');
    } else if (values.username.includes(" ")) {
        if (!errors.username) {
            errors.username = toast.error('Invalid Username...!');
        }
    }

    return errors;
}
