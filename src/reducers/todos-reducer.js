const initialState = {
	todos: [],
};

export const todosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA': {
			return {
				...state,
				todos: payload,
			};
		}
		case 'CREATE_TODO': {
			return {
				...state,
				todos: state.todos.concat(payload),
			};
		}
		case 'UPDATE_TODO': {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? payload.updatedTodo : todo,
				),
			};
		}
		case 'DELETE_TODO': {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		}
		default:
			return state;
	}
};
