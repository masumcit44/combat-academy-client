import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGoogle, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { createUser, UpdateUserProfile, GoogleSignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    if (data.password !== data.confirm) {
      setError("Password and confirm password do not match");
      return;
    }
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        res.user.displayName = data.name;
        res.user.photoURL = data.photo;
        const user = {
          name: data.name,
          email: data.email,
          role: "student",
        };
        axios.post("http://localhost:5000/users", user).then((data) => {
          console.log(data?.data);
          if (data?.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
        UpdateUserProfile(data.name, data.photo)
          .then(() => {
            console.log("user updated");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((res) => {
        const user = {
          name: res.user.displayName,
          email: res.user.email,
          role: "admin",
        };
        axios.post("http://localhost:5000/users", user).then((data) => {
          console.log(data?.data);
          if (data?.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">PhotoURL is required</p>
              )}
            </div>
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
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/,
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
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Confirm password"
                  className="input input-bordered w-full"
                  {...register("confirm", {
                    required: true,
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="btn btn-sm btn-circle text-lime-500 absolute end-2  "
                >
                  <FaEye></FaEye>
                </button>
              </div>
              <p className=" text-end mb-2">
                have an account ?
                <Link className="underline" to="/login">
                  Login
                </Link>
              </p>
              <label className="label">
                <p className="label-text-alt  text-red-600 fw-bold text-base">
                  {error}
                </p>
              </label>
            </div>
            <div className="mt-6 flex justify-evenly items-center ">
              <button className="btn btn-outline btn-success ">Register</button>
              <p className="text-center">OR</p>
              <button
                type="button"
                onClick={handleGoogleSignIn}
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

export default SignUp;
