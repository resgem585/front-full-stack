import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { CREATE_MOVIE } from "../graphql/Mutation";
import { useNavigate } from "react-router-dom";
import { GET_MOVIES } from "../graphql/Queries";



    const MovieForm = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dateOfReleased, setDateOfReleased] = useState("")
    const [image, setImage] = useState("")


    const [createMovie] = useMutation(CREATE_MOVIE, {
      refetchQueries: [{ query: GET_MOVIES }]
    })

 
  
  
    return (
    <form className=" flex flex-col items-center  h-screen mt-8 text-center  "
          onSubmit={async ( event ) => {
            event.preventDefault() 
            await createMovie( { 
                variables: {title, description, dateOfReleased, image}
            })
            navigate('/home')
          }} >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value)
          }}
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="date_of_released"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date of Released
        </label>
        <input
          type="text"
          onChange={(event) => {
            setDateOfReleased(event.target.value)
          }}
          id="dateOfReleased"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Url Image
        </label>
        <input
          type="text"
          id="title"
          onChange={(event) => {
            setImage(event.target.value)
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default MovieForm