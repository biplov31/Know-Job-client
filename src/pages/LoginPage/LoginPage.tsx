import React from 'react'
import LoginPageStyles from "./LoginPage.module.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaRegUserCircle } from "react-icons/fa";

// const Input = ({name, type, register}) => {
//   return (
//     <div className={LoginPageStyles.field}>
//       <label className={LoginPageStyles.label}>{name}</label>
//       <input {...register(name)} type={type} className={LoginPageStyles.input} />
//     </div>
//   )
// }

const validationSchema = yup.object({
  email: yup.string().required('Email is required.').email('Invalid email.'),
  password: yup.string().required('Password is required.')
}).required();

export const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = data => {
  }

  return (
    <main className={LoginPageStyles.container}>
      <h2>Log in</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={LoginPageStyles['login-form']}>
        <FaRegUserCircle />
        <div className={LoginPageStyles.field}>
          <label className={LoginPageStyles.label}>Email</label>
          <input {...register('email')} type='text' className={LoginPageStyles.input} />
          {errors.email && (
            <span className={LoginPageStyles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={LoginPageStyles.field}>
          <label className={LoginPageStyles.label}>Password</label>
          <input {...register('password')} type='password' className={LoginPageStyles.input} />
          {errors.password && (
            <span className={LoginPageStyles.error}>{errors.password.message}</span>
          )}
        </div>
        <button type='submit' className={LoginPageStyles.button}>Log in</button>
      </form>
    </main>
  )
}
