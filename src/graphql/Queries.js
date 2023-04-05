import {gql} from '@apollo/client'

export const GET_MOVIE = gql`

query getMovies{
    getMovies {
        _id 
        title
        description
        date_of_released
        image
    }
}
`

export const GET_MOVIE_BY_TITLE = gql`
   query getMovieByTitle($title:String){
    getMovieByTitle(title: $title){
         _id 
        title
        description
        date_of_released
        image
    }
   }

    `

export const LOGIN =  gql`
query login($email:String, $password: String){
    login(email: $email, password: $password){
        _id
        email
        password
    }
}

`