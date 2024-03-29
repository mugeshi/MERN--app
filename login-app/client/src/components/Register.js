import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik}  from 'formik'
import {passwordValidate} from '../helper/validate'
import convertToBase64 from '../helper/convert'
import {registerValidate} from '../helper/validate'

export default function Register() {
  
  const [file, stateFile] = useState()

  const formik =useFormik({
    initialValues :{
      email: 'nicolemugeshi@gmail.com',
      username:'example@123',
      Password : 'admin123/'
    },
    validate:  registerValidate, 
    validateOnBlur: false,
    validationOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file || ''})
      console.log(values)
    }
  })

  //formik doesn't support file upload so we need to create the handler or a function
 const onUpload = async e => {
  console.log('File selected:', e.target.files[0]);
  const base64 = await convertToBase64(e.target.files[0]);
  stateFile(base64);
}



  return (
    <div className="container mx-auto">

     
     <Toaster className="top-centre" reverseOrder="false" ></Toaster>


      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} >
          <div className="title flex flex-col items-center " >
            <h4 className="text-5xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center black">
              Happy to join you!
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4 '>
              <label htmlFor=''>
              <img  src={file || avatar} className={styles.profile_img} alt="avatar"/>
              </label>
              
              <input onChange={onUpload} type="file" id="profile" name="profile" />



            </div>

            <div className="textbox flex flex-col items-center gap-6">
          <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*'/>
          <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*'/>
          <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password'/>
          <button className={styles.btn} type='submit'>Register</button>
            </div> 

            <div className="text-center py-4">
              <span className='text-gray-500'>Already Registered ? <Link className='text-red-500' to="/">Login Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
