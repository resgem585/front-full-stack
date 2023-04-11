// React

import { useEffect } from 'react'
// React Router Dom
import { useNavigate } from 'react-router-dom'

// Zustand
import userState from '../config/userState'


// Components
import MovieForm from '../components/MovieForm'

const NewMovie = () => {
  const navigate = useNavigate()
  
  const verifySession = userState((state) => state.session)
  console.log("Session from home", verifySession)


  /* useEffect(() => {
    if (!verifySession.isValid) return navigate ( '/' )
    
  }, [])
 */
  return (
    <>
      <MovieForm />
    </>
  )
}

export default NewMovie
