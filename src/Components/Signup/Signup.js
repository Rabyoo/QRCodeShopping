import React, { useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://automative-ecommerce.onrender.com/user/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: userName,
        confirm_password: confirmPass,
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
    setEmail("");
    setPassword("");
    alert("Hello! ");
    navigate("/myAccount");
  };

  return (
    <div className="signup-box">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" method="POST" onSubmit={handleSubmit} />
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900">
              Username*
            </label>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                value={userName}
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 
          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900">
                Email address*
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
          ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900">
                  Password*
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                  required
                  class="block w-full rounded-md border-0 
          py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password*
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(event) => {
                    setConfirmPass(event.target.value);
                  }}
                  value={confirmPass}
                  required
                  class="block w-full rounded-md border-0 
          py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 
        text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600">
                Sign Up
              </button>
            </div>

            <div class="contactWithLinks">
              <ul>
                <li>
                  <a href="https://www.google.com/">
                    <i class="fa-brands fa-google" title="google"></i>
                  </a>

                  <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook" title="facebook"></i>
                  </a>

                  <a href="https://www.twitter.com/">
                    <i class="fa-brands fa-twitter" title="twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
