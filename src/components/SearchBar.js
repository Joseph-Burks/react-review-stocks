import React from 'react';

const SearchBar = ({sort, handleSort, handleFilter}) => {
  return (
		<div>
			<strong>Sort by:</strong>
			<label>
				<input
					type='radio'
					value='Alphabetically'
					checked={sort === 'Alphabetically'}
					onChange={() => handleSort('Alphabetically')}
				/>
				Alphabetically
			</label>
			<label>
				<input
					type='radio'
					value='Price'
					checked={sort === 'Price'}
					onChange={() => handleSort('Price')}
				/>
				Price
			</label>
			<br />

			<label>
				<strong>Filter:</strong>
				<select onChange={(e) => handleFilter(e.target.value)}>
					<option value='Tech'>Tech</option>
					<option value='Sportswear'>Sportswear</option>
					<option value='Finance'>Finance</option>
				</select>
			</label>
		</div>
	);
}


export default SearchBar;
