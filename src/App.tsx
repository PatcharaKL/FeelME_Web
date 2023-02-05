import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useGetHealthCheckQuery } from './services/feelme_api'

function App() {
  const {data, isLoading, isError, error} = useGetHealthCheckQuery({})

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Status: {!isLoading && data?.message}</p>
      <p>Error: {isError && JSON.stringify(error)}</p>
      </div>
  )
}

export default App
