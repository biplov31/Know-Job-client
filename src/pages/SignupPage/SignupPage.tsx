import React from 'react'
import SignupPageStyles from "./SignupPage.module.css";

export const SignupPage = () => {
  return (
    <form action="" className={SignupPageStyles.form}>
      <div className={SignupPageStyles.field}>
        <label className={SignupPageStyles.label}>Username</label>
        <input type="text" className={SignupPageStyles.input} />
      </div>
    </form>
  )
}
