import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './OrderCard.css'
function OrderCard() {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };
    
    return (
        <div className='orderCard-container'>
            <div className='container-timeStamp'>
                timeStamp
            </div>
            <ul>
                <li><Checkbox/></li>
                <li><Checkbox/></li>
                <li><Checkbox/></li>
                <li><Checkbox/></li>
            </ul>
            
        </div>
    )
}

export default OrderCard