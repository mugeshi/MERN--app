import toast from 'react-hot-toast'

//validate username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required ...!')
     
    } else if(values.username.include(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}