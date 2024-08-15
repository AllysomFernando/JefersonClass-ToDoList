import React, { useState } from "react";
import "./style.css";

type TodoListProps = {
	id: number;
	title: string;
};

const CriarTodo = () => {
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
		<div className="container">
			<h3 className="titleH3">Todo List</h3>
			<input className="inputTodo"
				type="text"
				value={newTodo.id ? newTodo.title : ""}
				placeholder="Digite um novo todo"
				onChange={(e) =>
					setNewTodo({
						id: Math.floor(Math.random() * 1000),
						title: e.target.value,
					})
				}
			/>
			<button className="buttonTodo" onClick={addTodo}>Add Todo</button>
			<div className="itemTodo">
				<ul className="ulTodo">
					{todos.map((todo, index) => (
						<li className="listaTodo" key={todo.id}>
							<div className="divCheckBox">
								<input className="checkBox" type="checkbox" />
								<p className="titleTodo">{todo.title}</p>
							</div>
							<button className="finalizarButton" onClick={() => concluiTodo(index)}>Concluir</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export { CriarTodo };
