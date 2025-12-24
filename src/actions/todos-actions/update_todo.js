import { SET_ERROR, START_LOADING } from '../app-actions';

export const UPDATE_TODO = (id, updatedTextValue) => {
	return async (dispatch) => {
		dispatch(START_LOADING);

		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ title: updatedTextValue }),
			});
			if (!response.ok) throw new Error('Network response was not ok');
			const updatedTodo = await response.json();
			dispatch({
				type: 'UPDATE_TODO',
				payload: { id, updatedTodo },
			});
		} catch (error) {
			SET_ERROR(error);
		}
	};
};
