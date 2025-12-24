import { useDispatch, useSelector } from 'react-redux';
import styles from '../App.module.css';
import { RESET_TEXT_VALUE, SET_TEXT_VALUE } from '../actions/app-actions';
import { CREATE_TODO } from '../actions/todos-actions';
import { selectTextValue } from '../selectors/';

export const CreateTaskForm = () => {
	const dispatch = useDispatch();

	const textValue = useSelector(selectTextValue);

	const onSubmit = (event) => {
		event.preventDefault();
		if (textValue.trim() === '') return;
		dispatch(CREATE_TODO(textValue));
		dispatch(RESET_TEXT_VALUE);
	};

	const onSetTodoText = ({ target }) => dispatch(SET_TEXT_VALUE(target.value));

	return (
		<form>
			<input
				className={styles.createTaskBlockInput}
				type="text"
				name="text"
				value={textValue}
				placeholder="Создайте новую задачу"
				onChange={onSetTodoText}
			/>
			<button className={styles.createButton} onClick={onSubmit} type="submit">
				Создать
			</button>
		</form>
	);
};
