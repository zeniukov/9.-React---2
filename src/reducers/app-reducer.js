const initialState = {
	textValue: '',
	openedUpdateModule: false,
	openedDeleteModule: false,
	id: '',
	title: '',
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CREATE_TODO': {
			return {
				...state,
				id: '',
			};
		}
		case 'UPDATE_TODO': {
			return {
				...state,
				id: '',
				openedUpdateModule: false,
			};
		}
		case 'DELETE_TODO': {
			return {
				...state,
				id: '',
				openedDeleteModule: false,
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
