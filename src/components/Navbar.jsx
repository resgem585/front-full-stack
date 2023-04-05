import { Link } from "react-router-dom";
import { userState } from "../config/userState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GET_MOVIE_BY_TITLE } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

export const Navbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const destroyUserSession = userState((state) => state.removeSession);
  const [movieInfo, setMovieInfo] = useState("");
  const getUserSession = userState((state) => state.session);
  const [getMovieByTitle, { data, error }] = useLazyQuery(GET_MOVIE_BY_TITLE);

  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="#" className="flex items-center">
          <img
            src="https://www.hbomax.com/img/hbo-max-h-w-l.svg"
            className="h-6 mr-3 sm:h-10"
            alt="Hbo Max Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {getUserSession.isValid && (
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    onBlur={async (event) => {
                      console.log("onblur fired!!");
                      await getMovieByTitle({
                        variables: { title: title },
                      }).then((response) => {
                        console.log("response", response);
                        var movieData = response.data.getMovieByTitle;
                        setMovieInfo(movieData);
                      });
                    }}
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <Link
                    type="/movie"
                    state={{movieData: movieInfo}}
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/new-movie"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  New Movie
                </Link>
              </li>
              <li>
                <button
                  onClick={async (e) => {
                    destroyUserSession();
                    navigate("/");
                  }}
                  type="button"
                  className="focus:outline-none
                 text-white bg-red-700
                  hover:bg-red-800 focus:ring-4 focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
