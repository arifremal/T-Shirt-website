import React from 'react';
import'./shirt.css'

const Tshirt = ({ tshirt,handleAddtoCart}) => {

    const {picture,name,price} = tshirt
    return (
        <div className='shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={handleAddtoCart}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;