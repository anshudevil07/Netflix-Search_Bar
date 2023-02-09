import React, {useState} from 'react'
import{Link} from 'react-router-dom'
function Home() {
  const[search,setsearch]=useState();
  // console.log(search);
  return (
    <div className='homeBg'>
        <div className='home'>
            <h1>Search for yourfavroite movie and tv shows</h1>
            <input onChange={(event)=>setsearch(event.target.value)} value={search} type='text' placeholder='Search movies,TV shows and more'/>
            <button>
                <Link to={`/search/${search}`}>Search</Link>
            </button>
        </div>
    </div>
  )
}

export default Home;