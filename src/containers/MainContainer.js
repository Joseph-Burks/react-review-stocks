import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
	state = {
		allStocks: [],
		myStocks: [],
		sort: '',
		filter: '',
	};

	componentDidMount() {
		fetch('http://localhost:3000/stocks')
			.then(res => res.json())
			.then(allStocks => this.setState({ allStocks }));
	}

	buyStock = stock => {
		this.setState({ myStocks: [...this.state.myStocks, stock] });
	};

	sellStock = soldStock => {
		this.setState({
			myStocks: this.state.myStocks.filter(stock => stock.id !== soldStock.id),
		});
  };
  
  handleSort = sort => {
    this.setState({sort})
  }

  handleFilter = filter => {
    this.setState({filter})
  }

  sortedStocks = () => {
    let stocks = [...this.state.allStocks];
		if (this.state.sort === 'Price') {
			stocks = stocks.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (this.state.sort === 'Alphabetically') {
			stocks = stocks.sort((a, b) => {
				return a.ticker.localeCompare(b.ticker);
			});
		}
		if (this.state.filter !== '') {
			stocks = stocks.filter(stock => stock.type === this.state.filter);
		}
    console.log(stocks);
    return stocks
  }

	render() {
    
		return (
			<div>
				<SearchBar handleSort={this.handleSort} sort={this.state.sort} handleFilter={this.handleFilter}/>

				<div className='row'>
					<div className='col-8'>
						<StockContainer
							stocks={this.sortedStocks()}
							buyStock={this.buyStock}
						/>
					</div>
					<div className='col-4'>
						<PortfolioContainer
							stocks={this.state.myStocks}
							sellStock={this.sellStock}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
