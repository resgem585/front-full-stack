import { gql } from "@apollo/client"

export const CREATE_MOVIE = gql`

mutation createMovie($title:String, $description:String, $likes:Int, $date_of_released:String, $image:String){
  
  createMovie(title:$title, description:$description, date_of_released:$date_of_released, image: $image){
		_id
    title
    description
    likes
    date_of_released
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
  date_of_released
  description
}
}
`
export const UPDATE_MOVIE = gql`

mutation updateMovie($_id: ID,$title:String, $description:String, $likes:Int, $date_of_released:String, $image:String){
  updateMovie(_id: $_id,title:$title, description:$description, liles:$likes, date_of_released:$date_of_released, image: $image){
    _id
    title
    description
    likes
    date_of_released
    image
  }
}
`