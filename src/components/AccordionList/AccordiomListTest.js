import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from '../ItemCard/ItemCard';
import {useDispatch, useSelector} from 'react-redux'
import './AccordionList.css'
function AccordionList({items, dropDown}) {

  const popular = items.POPULAR
  const pizza = items.PIZZA
  const burger = items.BURGER
  const crepe = items.CREPE
  const drinks = items.DRINKS

//   useEffect()
  //items.filter((i) => i.category.id === BURGER)
  //items.filter((i) => i.category.name === PIZZA)
  //items.filter((i) => i.category.name === CREPE)
  //items.filter((i)) => i.category.name ==== DRINKS)
  //items.filter((i) => i.isPopular === true)
  return (
    <div className={ dropDown ? 'accordion-hide' : 'accordion-show'}>
       <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>POPULAR</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='accordionList-expanded'>
                      {popular.map((el, index) => {
                        return (
                          <li key={el.id}>
                            <ItemCard  item={el} />
                          </li>
                        );
                      })}
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>PIZZA</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='accordionList-expanded'>
                      {pizza.map((el, index) => {
                        return (
                          <li key={el.id}>
                            <ItemCard  item={el} />
                          </li>
                        );
                      })}
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>BURGER</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='accordionList-expanded'>
                      {burger.map((el, index) => {
                        return (
                          <li key={el.id}>
                            <ItemCard  item={el} />
                          </li>
                        );
                      })}
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>CREPE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='accordionList-expanded'>
                        {crepe.map((el, index) => {
                          return (
                            <li key={el.id}>
                              <ItemCard  item={el} />
                            </li>
                          );
                        })}
                      </ul>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>DRINKS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <ul className='accordionList-expanded'>
                        {drinks.map((el, index) => {
                          return (
                            <li key={el.id}>
                              <ItemCard  item={el} />
                            </li>
                          );
                        })}
                      </ul>
                </Typography>
                </AccordionDetails>
            </Accordion> 
    </div>
  )
}

export default AccordionList