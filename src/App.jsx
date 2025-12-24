import { CreateTaskForm, TodosList, Update, Delete } from './components/';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FETCH_DATA } from './actions/todos-actions';
import { selectError, selectOrder, selectSearchText } from './selectors';

// npx json-server@0.17.4 --watch src/db.json

export function App() {
	const error = useSelector(selectError);
	const order = useSelector(selectOrder);
	const searchText = useSelector(selectSearchText);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FETCH_DATA(order, searchText));
	}, [order, searchText]);

	if (error) return <h1>{error}</h1>;

	return (
		<>
			<div id={styles.tasks}>
				<div className={styles.tasksWrapper}>
					<CreateTaskForm />
					<TodosList />
				</div>
			</div>
			<Delete />
			<Update />
		</>
	);
}
