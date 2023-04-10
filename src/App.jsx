import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './layouts/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import NewMovie from './pages/NewMovie'
import SearchedMovies from './pages/SearchedMovies'



function App() {
 
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
 
  return (
    <Router>
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newMovie" element={<NewMovie />} />
        <Route path="/search/:search" element={<SearchedMovies />} />
      </Routes>
    </ApolloProvider>
  </Router>
  )
}

export default App
