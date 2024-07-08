import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
	const [tasksList, setTask] = useState([]);
	const [editTaskVal, setEditTaskVal] = useState("");

	function persistData(newList) {
		localStorage.setItem("taskList", JSON.stringify({ tasksList: newList }));
	}

	function handleAddTask(newTask) {
		const newTaskList = [...tasksList, newTask];
		persistData(newTaskList);
		setTask(newTaskList);
	}

	function handleDeleteTask(index) {
		const newTaskList = tasksList.filter((task, taskIndex) => {
			return taskIndex !== index;
		});
		persistData(newTaskList);
		setTask(newTaskList);
	}

	function handleEditTask(index) {
		const valueToBeEdited = tasksList[index];
		setEditTaskVal(valueToBeEdited);
		handleDeleteTask(index);
	}

	useEffect(() => {
		if (!localStorage) {
			return;
		}

		let localTaskList = localStorage.getItem("taskList");

		if (!localTaskList) {
			return;
		}
		console.log(localTaskList);
		localTaskList = JSON.parse(localTaskList).tasksList;
		setTask(localTaskList);
	}, []);

	return (
		<>
			<TodoInput
				editTaskVal={editTaskVal}
				setEditTaskVal={setEditTaskVal}
				handleAddTask={handleAddTask}
			/>
			<TodoList
				handleEditTask={handleEditTask}
				handleDeleteTask={handleDeleteTask}
				tasks={tasksList}
			/>
		</>
	);
}

export default App;
