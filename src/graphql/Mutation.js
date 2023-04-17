import { gql } from "@apollo/client"

export const CREATE_MOVIE = gql`

mutation createMovie($title:String, $description:String, $likes:Int, $dateOfReleased:String, $image:String){
  
  createMovie(title:$title, description:$description, likes:$likes, dateOfReleased:$dateOfReleased, image: $image){
		_id
    title
    description
    likes
    dateOfReleased
    image
    
  }
}
`
export const REMOVE_MOVIE = gql`
  mutation deleteEmp($_id:ID){
  deleteMovie(_id: $_id)
{
  _id
  title
  image
  likes
  dateOfReleased
  description
}
}
`
export const UPDATE_MOVIE = gql`

mutation updateMovie($_id: ID,$title:String, $description:String, $likes:Int, $dateOfReleased:String, $image:String){
  updateMovie(_id: $_id,title:$title, description:$description, liles:$likes, dateOfReleased:$dateOfReleased, image: $image){
    _id
    title
    description
    likes
    dateOfReleased
    image
  }
}
`