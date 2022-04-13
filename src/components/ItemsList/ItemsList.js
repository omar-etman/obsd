import React, { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import AccordionList from '../AccordionList/AccordionList';
import './ItemsList.css';
import { items } from '../../dummyData/dummy';

function ItemsList() {
  //function to filter based on category (object for filters as state)
  //for mobile view, a function to assign based on category to the accordions

  const [selectedItem, setSelectedItem] = useState('POPULAR');

  return (
    <div className="itemsList-container">
      <div className="itemsList-accordions">
        <AccordionList 
          items={items}
        />
      </div>
      <ul
        className="itemsList-topBtns"
        onClick={(e) => {
          console.log(e.target.closest('button')?.innerText);
          const item = e.target.closest('button')?.innerText;
          if (item) {
            setSelectedItem(item);
          }
        }}
      >
        <button className="topBtns-btn">POPULAR</button>
        <button className="topBtns-btn">PIZZA</button>
        <button className="topBtns-btn">BURGER</button>
        <button className="topBtns-btn">CREPE</button>
        <button className="topBtns-btn">DRINKS</button>
      </ul>
      <ul className="itemsList-display">
        {items[selectedItem].map((el, index) => {
          return (
            <li key={el.index}>
              <ItemCard  item={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemsList;
