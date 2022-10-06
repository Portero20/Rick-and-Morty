import React, { useEffect, useState } from 'react'
import Character from './Character'


function NavPage({ page, setPage }) {

  return (

    <div className='d-flex justify-content-between align-items-center'>
      <p>Page: {page} </p>
      <button onClick={() => setPage(page + 1)} className='btn btn-primary btn-sm'>
        Page: {page + 1}
      </button>
    </div>


  )

}

const CharacterList = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);


  useEffect(() => {

    async function fetchData() {

      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()

      setCharacters(data.results);


    }

    fetchData();

    return (

      setLoading(false)

    )


  }, [page])

  if (loading) {

    return (

      <div>Loading</div>


    )


  }


  return (

    <div className='container'>

      <NavPage page={page} setPage={setPage} />


      {
        loading ? <div>Hola</div> : <div className='row'>

          {
            characters.map((prod) => {

              return (

                <div className='col-md-4' key={prod.id}>
                  <Character prod={prod} />
                </div>

              )

            })
          }

        </div>
      }

      <NavPage page={page} setPage={setPage} />

    </div>

  )
}

export default CharacterList