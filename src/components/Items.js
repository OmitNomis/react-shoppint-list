import React from "react";

const Items = ({
	items,
	index,
	handleChecked,
	handleIncreaseQty,
	handleDecreaseQty,
}) => {
	return (
		<div className='items'>
			<div className='item-container'>
				{items.checked ? (
					<>
						<button onClick={() => handleChecked(index)}>🗸</button>
						<p className='checked'>{items.name}</p>
					</>
				) : (
					<>
						<button onClick={() => handleChecked(index)}>🗸</button>
						<p>{items.name}</p>
					</>
				)}
			</div>
			<div className='quantity-container'>
				<button onClick={() => handleDecreaseQty(index)}>-</button>
				<span>{items.count}</span>
				<button onClick={() => handleIncreaseQty(index)}>+</button>
			</div>
		</div>
	);
};
export default Items;
