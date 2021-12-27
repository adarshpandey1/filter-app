import React from 'react';
import './style.css';


const ListItem = ({
  item: { coverSrc, title, price, description, cuisine, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <body>
        <p>{description}</p>
    </body>
    <footer>
      <p>
        <b>{cuisine.toUpperCase()}</b> 
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;