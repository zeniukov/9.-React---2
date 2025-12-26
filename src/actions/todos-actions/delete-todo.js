import { SET_ERROR, START_LOADING } from '../app-actions';

export const DELETE_TODO = (id) => {
	return async (dispatch) => {
		dispatch(START_LOADING);

		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: 'DELETE',
			});
			if (!response.ok) throw new Error('Network response was not ok');
			dispatch({
				type: 'DELETE_TODO',
				payload: id,
			});
		} catch (error) {
			dispatch(SET_ERROR(error));
		}
	};
};
