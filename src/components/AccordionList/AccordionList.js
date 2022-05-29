import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ItemCard from '../ItemCard/ItemCard'
import './AccordionList.css'
function AccordionList({ dropDown, prods }) {
  const popularProds = prods.filter((p) => p.isPopular === true)

  const burger = prods.filter((p) => p.category.name === 'BURGER')
  const pizza = prods.filter((p) => p.category.name === 'PIZZA')
  const crepe = prods.filter((p) => p.category.name === 'CREPE')
  const drinks = prods.filter((p) => p.category.name === 'DRINKS')

  return (
    <div className={dropDown ? 'accordion-hide' : 'accordion-show'}>
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
            <ul className="accordionList-expanded">
              {popularProds.map((el, index) => {
                return (
                  <li key={el.id}>
                    <ItemCard item={el} />
                  </li>
                )
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
            <ul className="accordionList-expanded">
              {pizza.map((el, index) => {
                return (
                  <li key={el.id}>
                    <ItemCard item={el} />
                  </li>
                )
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
            <ul className="accordionList-expanded">
              {burger.map((el, index) => {
                return (
                  <li key={el.id}>
                    <ItemCard item={el} />
                  </li>
                )
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
            <ul className="accordionList-expanded">
              {crepe.map((el, index) => {
                return (
                  <li key={el.id}>
                    <ItemCard item={el} />
                  </li>
                )
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
            <ul className="accordionList-expanded">
              {drinks.map((el, index) => {
                return (
                  <li key={el.id}>
                    <ItemCard item={el} />
                  </li>
                )
              })}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionList
