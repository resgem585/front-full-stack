import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MOVIE } from "../graphql/Queries";

export const Home = () => {
  const [searchMovie, { data, error }] = useLazyQuery(GET_MOVIE);

  useEffect(() => {
    searchMovie();
  }, []);

  if (data) {
    console.log(data);
  }

  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data &&             // Validamos que data Existe
        data.getMovies.map(
          ({ _id, title, description, date_of_released, image }) => (
            <>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={image}
                    alt
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {date_of_released}
                  </p>
                </div>
              </div>
            </>
          )
        )}
    </div>
  );
}
