import React, { useState } from "react";
import "./style.css";

type TodoListProps = {
	id: number;
	title: string;
};


const TodoList = () => {
	const [todos, setTodos] = useState<TodoListProps[]>([]);
	const [newTodo, setNewTodo] = useState<TodoListProps>({} as TodoListProps);

	const concluiTodo = (index: number) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};
	const addTodo = () => {
		if (newTodo.title) {
			setTodos([...todos, newTodo]);
			setNewTodo({} as TodoListProps);
		}
	};
	return (
		<div>
			<h3>Todo List</h3>
			<input
				type="text"
				value={newTodo.id ? newTodo.title : ""}
				onChange={(e) =>
					setNewTodo({
						id: Math.floor(Math.random() * 1000),
						title: e.target.value,
					})
				}
			/>
			<button onClick={addTodo}>Add Todo</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={todo.id}>
						{todo.title}
						<button onClick={() => concluiTodo(index)}>Concluir</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export { TodoList };
