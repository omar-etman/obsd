import React, { useState, useEffect } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import AccordionList from '../AccordionList/AccordionList'
import { getProducts } from '../../API'
import './ItemsList.css'

function ItemsList({ dropDown }) {
  const [filteredProds, setFilteredProds] = useState([])
  const [prods, setProds] = useState([])
  async function setData() {
    try {
      const productsDataResponse = await getProducts()
      const productsData = await productsDataResponse.data
      setProds(productsData)
      setFilteredProds(productsData?.filter((p) => p.isPopular === true))
    } catch (err) {
      console.log(err)
    }
  }

  const menuFilter = (e) => {
    const categName = e.target.closest('button')?.innerText

    if (categName === 'POPULAR') {
      setFilteredProds(prods?.filter((p) => p.isPopular))
    } else {
      setFilteredProds(prods?.filter((p) => p.category.name === categName))
    }
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div className="itemsList-container">
      <div className="itemsList-accordions">
        <AccordionList prods={prods} dropDown={dropDown} />
      </div>
      <ul className="itemsList-topBtns" onClick={(e) => menuFilter(e)}>
        <button className="topBtns-btn">PIZZA</button>
        <button className="topBtns-btn">BURGER</button>
        <button className="topBtns-btn">CREPE</button>
        <button className="topBtns-btn">DRINKS</button>
        <button className="topBtns-btn">POPULAR</button>
      </ul>
      <ul className="itemsList-display">
        {filteredProds?.map((el, index) => {
          return (
            <li key={el.index}>
              <ItemCard item={el} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ItemsList
