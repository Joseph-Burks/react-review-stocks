import React from 'react'

const Stock = ({stock, moveStock}) => (
  <div>

    <div className="card" onClick={() => moveStock(stock)}>
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{`${stock.ticker}: $${stock.price}`}</p>
      </div>
    </div>


  </div>
);

export default Stock
