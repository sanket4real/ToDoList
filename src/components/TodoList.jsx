import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
	const { tasks } = props;

	return (
		<ul className="main">
			{tasks.map((task, taskIndex) => {
				return (
					<TodoCard {...props} key={taskIndex} taskIndex={taskIndex}>
						<p>{task}</p>
					</TodoCard>
				);
			})}
		</ul>
	);
};

export default TodoList;
