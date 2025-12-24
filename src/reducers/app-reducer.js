const initialState = {
	isLoading: false,
	error: null,
	textValue: '',
	openedUpdateModule: false,
	openedDeleteModule: false,
	id: '',
	title: '',
	searchText: '',
	order: '',
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_ERROR': {
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		}
		case 'START_LOADING': {
			return {
				...state,
				isLoading: true,
			};
		}
		case 'FETCH_DATA': {
			return {
				...state,
				isLoading: false,
			};
		}
		case 'CREATE_TODO': {
			return {
				...state,
				isLoading: false,
				id: '',
			};
		}
		case 'UPDATE_TODO': {
			return {
				...state,
				isLoading: false,
				id: '',
				openedUpdateModule: false,
			};
		}
		case 'DELETE_TODO': {
			return {
				...state,
				isLoading: false,
				id: '',
				openedDeleteModule: false,
			};
		}
		case 'SET_TEXT_VALUE': {
			return {
				...state,
				textValue: payload,
			};
		}
		case 'RESET_TEXT_VALUE': {
			return {
				...state,
				textValue: '',
			};
		}
		case 'SET_SEARCH_TEXT': {
			return {
				...state,
				searchText: payload,
			};
		}
		case 'SET_ORDER': {
			return {
				...state,
				order: state.order === '' ? 'asc' : '',
			};
		}
		case 'START_DELETING': {
			return {
				...state,
				id: payload,
				openedDeleteModule: true,
			};
		}
		case 'START_UPDATING': {
			return {
				...state,
				id: payload.id,
				title: payload.title,
				openedUpdateModule: true,
			};
		}
		case 'CANCEL_DELETING': {
			return {
				...state,
				id: '',
				openedDeleteModule: false,
			};
		}
		case 'CANCEL_UPDATING': {
			return {
				...state,
				id: '',
				openedUpdateModule: false,
			};
		}
		default:
			return state;
	}
};
