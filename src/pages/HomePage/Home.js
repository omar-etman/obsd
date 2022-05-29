import React from 'react'
import Cover from '../../components/Cover/Cover'
import ItemsList from '../../components/ItemsList/ItemsList'
function Home({dropDown}) {
  return (
    <div className='home-container'>
        <section>
            <Cover/>
        </section>
        <main>
            <ItemsList
             dropDown = {dropDown}
            />
        </main>
    </div>
  )
}

export default Home