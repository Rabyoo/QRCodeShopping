import React, { useState } from "react";
import "./login.css";
import "../../tailwind.config";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://automative-ecommerce.onrender.com/user/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
    alert("Hello! ");
    navigate("/myAccount");
  };

  return (
    <div className="login-box">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            class="space-y-6"
            action="#"
            method="GET"
            onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900">
                Your email address*
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div class="text-sm">
                <a href="#" class="text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex w-full justify-center rounded-md relative right-3.5
              bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
              text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </button>
            </div>

            <div class="createAcount">
              <p class="text-gray-700">
                Don't have an account?
                <Link class="text-sm underline" to="/signup">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
