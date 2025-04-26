import { useEffect, useState } from 'react'

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/actors')
      .then(r => r.json())
      .then(data => setActors(data))
  }, [])

  return (
    <>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  )
}

export default Actors
