import {gql} from '@apollo/client'

export const GET_MOVIES = gql`

query getMovies{
    getMovies {
        _id 
        title
        description
        likes
        dateOfReleased
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