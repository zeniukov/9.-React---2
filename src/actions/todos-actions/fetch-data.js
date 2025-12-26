import { SET_ERROR, START_LOADING } from '../app-actions';

export const FETCH_DATA = (order, searchText) => {
	return async (dispatch) => {
		dispatch(START_LOADING);

		let params = [];
		if (order) {
			params.push(`_sort=title`);
			params.push(`order=${order}`);
		}
		if (searchText) params.push(`q=${searchText}`);

		params = params.length > 0 ? `?${params.join('&')}` : '';

		try {
			const response = await fetch(`http://localhost:3000/todos${params}`);
			if (!response.ok) throw new Error('Network response was not ok');
			const dataFromServer = await response.json();
			dispatch({
				type: 'FETCH_DATA',
				payload: dataFromServer,
			});
		} catch (error) {
			dispatch(SET_ERROR(error));
		}
	};
};
