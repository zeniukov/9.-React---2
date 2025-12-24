import { SET_ORDER, SET_SEARCH_TEXT } from '../actions/app-actions';
import styles from '../App.module.css';
import { selectSearchText, selectTodos, selectIsLoading } from '../selectors';
import { Todo } from './Todo';
import { useDispatch, useSelector } from 'react-redux';

const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
};

export const TodosList = () => {
	const dispatch = useDispatch();

	const todos = useSelector(selectTodos);
	const searchText = useSelector(selectSearchText);
	const isLoading = useSelector(selectIsLoading);

	const onHandleOrder = () => dispatch(SET_ORDER);

	const searchOnChange = ({ target }) => {
		const delayedSetSearchText = debounce(
			(newValue) => dispatch(SET_SEARCH_TEXT(newValue)),
			500,
		);
		delayedSetSearchText(target.value);
	};

	return (
		<div className={styles.todosContainer}>
			<form className={styles.filterBlock}>
				<label className={styles.filterBlockLabel}>
					Поиск задачи:
					<input
						type="text"
						name="text"
						className={styles.filterBlockInput}
						placeholder="Начните ввод"
						value={searchText}
						onChange={searchOnChange}
					/>
				</label>
			</form>

			<h1 className={styles.todosHeader}>
				Список дел:
				<button className={styles.button} onClick={onHandleOrder}>
					Сортировка по алфавиту
				</button>
			</h1>

			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles.todoList}>
					{todos.map(({ id, title }) => (
						<Todo key={id} id={id} title={title} />
					))}
				</ul>
			)}
		</div>
	);
};
