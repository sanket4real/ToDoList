const TodoCard = ({
	children,
	handleDeleteTask,
	taskIndex,
	handleEditTask,
}) => {
	return (
		<li className="todoItem">
			{children}
			<div className="actionsContainer">
				<button onClick={() => handleEditTask(taskIndex)}>
					<i className="fa-regular fa-pen-to-square"></i>
				</button>
				<button onClick={() => handleDeleteTask(taskIndex)}>
					<i className="fa-regular fa-trash-can"></i>
				</button>
			</div>
		</li>
	);
};

export default TodoCard;
