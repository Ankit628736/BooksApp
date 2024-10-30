import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3">
        <div className="model-box relative border border-gray-300 rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <Link to={'/'}>✕</Link>
            </button>
          
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </div>
          <div className="flex justify-around mt-4">
            <button 
            type="submit"
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-100 ease-in-out">
              Signup
            </button>
            <p>
              Have Account?{" "}
              <span
                onClick={() => document.getElementById("my_modal_3").showModal()}
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
