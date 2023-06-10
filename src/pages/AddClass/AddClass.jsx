import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,event) => {
    event.preventDefault()
    data.status = "pending"
    data.studentsEnrolled = 0;
    console.log(data);
    axios.post("http://localhost:5000/addclass",data)
    .then(res=>{
        // console.log(res.data);
        if(res.data.insertedId){
            Swal.fire("added class successfully , status is pending")
        }
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>

              <input
                type="text"
                placeholder="Class Name"
                className="input input-bordered"
                {...register("martialArtName", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>

              <input
                type="text"
                placeholder="Image"
                className="input input-bordered"
                {...register("image", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>

              <input
                type="text"
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered"
                {...register("instructorName", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>

              <input
                type="text"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered"
                {...register("instructorEmail", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>

              <input
                type="text"
                readOnly
                defaultValue={50}
                className="input input-bordered"
                {...register("availableSeats", { required: true })}
              />
            </div>
            <div className="mt-6 flex items-start ">
              <button className="btn btn-outline btn-success ">Add Class</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddClass;
