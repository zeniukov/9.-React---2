import styles from '../App.module.css';
import { selectTodos, selectIsLoading } from '../selectors';
import { Todo } from './Todo';
import { useSelector } from 'react-redux';

export const TodosList = ({ searchText, searchOnChange, onHandleOrder }) => {
	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);

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
