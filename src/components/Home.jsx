import {useEffect, useState} from 'react'
import { useLazyquery } from '@apollo/client'
import { GET_MOVIE } from '../graphql/Queries'

export const Home = () => {
  
  const [searchMovie, { data, error }] = useLazyquery( GET_MOVIE )

  if ( data ) {
    
  }
  
  
  
  
  
  return (
    <div className="bg-red-600">Home</div>
  )
}