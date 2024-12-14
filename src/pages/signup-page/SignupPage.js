import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  
  const { user, encodedToken, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  useEffect(()=>{
    if(isAuthenticated){
        navigate("/")
        toast.success("logged in successfully")
    }
    if(error){
        toast.error(error.message)
    }
  },[isAuthenticated, error, navigate])

  const validatedata = () => {
    if (formData.firstName === "") {
      setFormData((prev) => ({ ...prev, error: "First Name can't be Empty" }));
      return false
    }
    if (formData.lastName === "") {
      setFormData((prev) => ({ ...prev, error: "Last Name can't be Empty" }));
      return false
    }
    if (formData.userName === "") {
      setFormData((prev) => ({ ...prev, error: "User Name can't be Empty" }));
      return false
    }
    if (formData.password.length < 6) {
      setFormData((prev) => ({ ...prev, error: "Password can't be less than 6 characters" }));
      return false
    }
    if (formData.confirmPassword !== formData.password) {
      setFormData((prev) => ({ ...prev, error: "Password do not match" }));
      return false
    }
    setFormData((prev)=>({...prev, error:null}))
    return true;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    if (validatedata()) {
      dispatch(signup(formData));
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container py-1 flex flex-wrap justify-center items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
            <h2 className="text-gray-900 text-[2rem] lg font-bold ">Signup</h2>
            {formData.error && (
              <p className="p-2 text-red-700 bg-red-200 rounded">
                {formData.error}
              </p>
            )}
            <div className="relative mb-4">
              <label htmlFor="firstname" className="text-m text-gray-900 font-medium ">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="email"
                placeholder="Enter your first name "
                value={formData.firstName}
                onInput={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="lastname" className="text-m text-gray-900 font-medium">
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="email"
                placeholder="Enter your last name "
                value={formData.lastName}
                onInput={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-m text-gray-900 font-medium"
              >
                User name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your username "
                value={formData.userName}
                onInput={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      userName: e.target.value,
                    }))
                  }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="text-m text-gray-900 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="full-name"
                placeholder="Enter your password "
                value={formData.password}
                onInput={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="confirmpassword"
                className="text-m text-gray-900 font-medium"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="full-name"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onInput={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={signupHandler}
            >
              Signup
            </button>

            <h2>
              Already have an account ? <Link to="/login"> Login&#62;</Link>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
