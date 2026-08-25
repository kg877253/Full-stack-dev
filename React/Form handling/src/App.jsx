import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout((t) => {
        resolve()
      }, t * 1000);
    })
  }
  
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  }

  return (
    <>
      <br />
      {isSubmitting && <p>Submitting...</p>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='enter username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 2, message: "Username must be at least 2 characters" }, maxLength: { value: 18, message: "Username must be less than 18 characters" } })} />
        {errors.username && <p>{errors.username.message}</p>}
        <br />
        <input type="password" placeholder='enter password' {...register("password", { required: { value: true, message: "This field is required" } })} />
        <br />
        {errors.password && <p>{errors.password.message}</p>}
        <input disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
