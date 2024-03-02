import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      Password: "admin123/",
      confirm_pwd: "admin123/",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validationOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster className="top-centre" reverseOrder="false"></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center black">
              Enter new password
            </span>
          </div>

          <form  className="py-2" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6" >
              <input id="form"
                {...formik.getFieldProps("password")}
                className={styles.textbox}

                type="text"
                placeholder="New password"
              />
             
              <input
                {...formik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
                type="text"
                placeholder="Repeat Password"
              />
              
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
