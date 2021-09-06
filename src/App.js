import React, { useState } from "react";
import "./index.css";
import { nanoid } from "nanoid";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import Total from "./components/Total";

const App = () => {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);

	const toggleChecked = (index) => {
		const newItem = [...items];
		newItem[index].checked = !newItem[index].checked;
		setItems(newItem);
	};

	const increaseQuantity = (index) => {
		const newItem = [...items];
		newItem[index].count++;
		setItems(newItem);
		calculateTotal();
	};
	const decreaseQuantity = (index) => {
		const newItem = [...items];
		if (newItem[index].count > 0) {
			newItem[index].count--;
			setItems(newItem);
		}
		calculateTotal();
	};
	const addItem = () => {
		const newItem = [
			...items,
			{ key: nanoid(), name: input, checked: false, count: 0 },
		];
		setItems(newItem);
	};
	const calculateTotal = () => {
		const totalCount = items.reduce((total, item) => {
			return total + item.count;
		}, 0);
		setTotal(totalCount);
	};
	return (
		<div className='App'>
			<div className='container'>
				<AddItem handleAddItem={addItem} item={items} handleInput={setInput} />
				{items.map((item, index) => (
					<Items
						handleIncreaseQty={increaseQuantity}
						handleDecreaseQty={decreaseQuantity}
						items={item}
						index={index}
						handleChecked={toggleChecked}
					/>
				))}
				<Total total={total} />
			</div>
		</div>
	);
};
export default App;
