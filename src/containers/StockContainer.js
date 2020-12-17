import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props.stocks.sort((a,b) => {
    //     return a.price - b.price
    //   }))
    return (
      <div>
        <h2>Stocks</h2>
        { this.props.stocks ?
          this.props.stocks.map(stock => {
            return (
							<Stock
								key={stock.id}
								stock={stock}
								moveStock={this.props.buyStock}
							/>
						);
          })
          : null
        }
      </div>
    );
  }

}

export default StockContainer;
