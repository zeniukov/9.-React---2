import { useDispatch } from 'react-redux';
import styles from '../App.module.css';
import { CREATE_TODO } from '../actions/todos-actions';
import { useState } from 'react';

export const CreateTaskForm = () => {
	const [textValue, setTextValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (textValue.trim() === '') return;
		dispatch(CREATE_TODO(textValue));
	};

	const onSetTodoText = ({ target }) => setTextValue(target.value);

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
