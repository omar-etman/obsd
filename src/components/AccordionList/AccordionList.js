import React, { Fragment } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from '../ItemCard/ItemCard';
import './AccordionList.css'
function AccordionList() {

  //props passed = array to be mapped
  //category prop remember that to name it

  return (
    <Fragment>
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
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
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
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
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
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
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
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
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
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                      <li><ItemCard/></li>
                    </ul>
                </Typography>
                </AccordionDetails>
            </Accordion> 
    </Fragment>
  )
}

export default AccordionList