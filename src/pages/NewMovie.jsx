// React

import { useEffect } from 'react'
// React Router Dom
import { useNavigate } from 'react-router-dom'

import { CREATE_MOVIE } from '../graphql/Mutation'
// Zustand
import userState from '../config/userState'

// Components
import MovieForm from '../components/MovieForm'

const NewMovie = () => {
  const navigate = useNavigate()
  
  const verifySession = userState((state) => state.session)

  useEffect(() => {
    if (!verifySession.isValid) return navigate ( '/' )
    
  }, [])

  return (
    <>
      <MovieForm />
    </>
  )
}

export default NewMovie
