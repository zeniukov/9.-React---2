const initialState = {
	todos: [],
	error: null,
	isLoading: false,
};

export const todosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA': {
			return {
				...state,
				isLoading: false,
				todos: payload,
			};
		}
		case 'CREATE_TODO': {
			return {
				...state,
				isLoading: false,
				todos: state.todos.concat(payload),
			};
		}
		case 'UPDATE_TODO': {
			return {
				...state,
				isLoading: false,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? payload.updatedTodo : todo,
				),
			};
		}
		case 'DELETE_TODO': {
			return {
				...state,
				isLoading: false,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		}
		case 'SET_ERROR': {
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		}
		case 'START_LOADING': {
			return {
				...state,
				isLoading: true,
			};
		}
		default:
			return state;
	}
};
