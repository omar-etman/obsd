import React from 'react'
import Cover from '../../components/Cover/Cover'
import ItemsList from '../../components/ItemsList/ItemsList'
function Home() {
  return (
    <div className='home-container'>
        <section>
            <Cover/>
        </section>
        <main>
            <ItemsList/>
        </main>
    </div>
  )
}

export default Home