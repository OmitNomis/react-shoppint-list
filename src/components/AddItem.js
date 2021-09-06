import React from "react";

const AddItem = ({ item, handleInput, handleAddItem }) => {
	return (
		<div className='add-items'>
			<input
				onChange={(e) => {
					handleInput(e.target.value);
				}}
				value={item.name}
				type='text'
				placeholder='Add an item'
			/>
			<button onClick={() => handleAddItem()} className='add-button'>
				+
			</button>
		</div>
	);
};
export default AddItem;
