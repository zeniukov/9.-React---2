import { SET_ERROR, START_LOADING } from '../app-actions';

export const CREATE_TODO = (textValue) => {
	return async (dispatch) => {
		dispatch(START_LOADING);

		try {
			const response = await fetch(`http://localhost:3000/todos`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ title: textValue }),
			});
			if (!response.ok) throw new Error('Network response was not ok');
			const newTodo = await response.json();
			dispatch({
				type: 'CREATE_TODO',
				payload: newTodo,
			});
		} catch (error) {
			SET_ERROR(error);
		}
	};
};
