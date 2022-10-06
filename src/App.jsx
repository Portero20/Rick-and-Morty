import React from 'react'
import CharacterList from './components/CharacterList'

const App = () => {


  return (
    <div className='bg-dark text-white'>

      <h1 className='text-center display-1 p-1'>Rick and Morty</h1>

      <CharacterList/>


    </div>
  )
}

export default App