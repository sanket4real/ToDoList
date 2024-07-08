/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoInput = (props) => {
	const { handleAddTask, editTaskVal, setEditTaskVal } = props;

	return (
		<header>
			<input
				value={editTaskVal}
				placeholder="Enter todo..."
				onChange={(e) => {
					setEditTaskVal(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleAddTask(editTaskVal);
					setEditTaskVal("");
				}}>
				Add
			</button>
		</header>
	);
};

export default TodoInput;
