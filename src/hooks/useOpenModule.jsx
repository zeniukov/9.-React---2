import { useDispatch, useSelector } from 'react-redux';
import {
	SET_DELETING,
	SET_ID,
	SET_TODO_TITLE,
	SET_UPDATING,
	TOGGLE_DELETE_MODULE,
	TOGGLE_UPDATE_MODULE,
} from '../actions/app-actions';
import { selectId } from '../selectors';
import { DELETE_TODO, UPDATE_TODO } from '../actions/todos-actions';

export const useOpenModule = () => {
	const dispatch = useDispatch();

	const id = useSelector(selectId);

	const initiateDeleting = (setId) => {
		dispatch(SET_ID(setId));
		dispatch(TOGGLE_DELETE_MODULE);
	};

	const cancelDelete = () => {
		dispatch(TOGGLE_DELETE_MODULE);
		dispatch(SET_ID(''));
	};

	const confirmDelete = async () => {
		dispatch(SET_DELETING);
		dispatch(DELETE_TODO(id));
		dispatch(SET_DELETING);
		cancelDelete();
	};

	const initiateUpdating = (setId, titleValueSet) => {
		dispatch(SET_ID(setId));
		dispatch(SET_TODO_TITLE(titleValueSet));
		dispatch(TOGGLE_UPDATE_MODULE);
	};

	const cancelUpdate = () => {
		dispatch(TOGGLE_UPDATE_MODULE);
		dispatch(SET_ID(''));
	};

	const confirmUpdate = async (payload) => {
		dispatch(SET_UPDATING);
		if (payload.trim() === '') return;
		dispatch(UPDATE_TODO(id, payload));
		dispatch(SET_UPDATING);
		cancelUpdate();
	};

	return {
		initiateDeleting,
		cancelDelete,
		confirmDelete,
		initiateUpdating,
		cancelUpdate,
		confirmUpdate,
	};
};
