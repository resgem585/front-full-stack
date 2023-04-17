import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/Queries";
import  userState  from "../config/userState";
import "../styles/login.css";


  const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState("");
  const setUserSession = userState((state) => state.addSession);
  const verifySession = userState((state) => state.session);
  console.log("get current session in login", verifySession);

  const [login, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password },
  });
  return (
    <section className="flex flex-col items-center  h-screen text-center  ">
      <div className="text-gray-50 text-4xl py-8 ">Iniciar Sesion</div>
      <div className="sm:w-80 md:w-80 lg:w-96 bg-white rounded-lg">
        <div className="p-6 space-y-6">
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={async (e) => {
              e.preventDefault(); // Prevent refreshing
              await login().then(function (response) {
                var data = response.data.login;
                if (data) {
                  navigate("/home");
                  setUserSession({ isValid: true });
                } else {
                  setIsInvalid("Invalid login!! Try again ");
                }
              });
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-3xl font-medium text-gray-900 dark:text-black"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-200 border border-gray-200 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-3xl font-medium text-gray-900 dark:text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-gray-200 border border-gray-200 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-2/4 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
            <div className="mb-6">
              <p className="text-red-600 mt-5">{isInvalid}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
    }

    export default LoginForm