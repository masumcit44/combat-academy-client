import React from "react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGoogle,FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const {  GoogleSignIn ,Login} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    console.log(data);
    Login(data.email,data.password)
    .then(res=>{
        console.log(res.user);
        navigate("/")
    })
    .catch(error=>{
        setError(error.message)
    })
  };
  const handleGoogleSignIn = () =>{
    GoogleSignIn()
    .then(res=>{
        navigate("/")
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: true,
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="btn btn-sm btn-circle text-lime-500 absolute end-2  "
                >
                  <FaEye></FaEye>
                </button>
              </div>

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              
            </div>
            
             <p className=" text-end mb-2">dont have and account ?
             <Link className="underline" to="/signup">Sign Up</Link>
             </p>
             <p className="font-bold text-red-600">{error}</p>
            <div className="mt-6 flex justify-evenly items-center ">
              <button className="btn btn-outline btn-success ">Login</button>
              <p className="text-center">OR</p>
              <button
                type="button"
                onClick={()=>handleGoogleSignIn()}
                className="btn btn-outline btn-circle btn-info text-lime-500 "
              >
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
