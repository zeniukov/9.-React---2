import { CreateTaskForm, TodosList, Update, Delete } from './components/';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FETCH_DATA } from './actions/todos-actions';
import { selectError } from './selectors';

// npx json-server@0.17.4 --watch src/db.json

const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
};

export function App() {
	const [order, setOrder] = useState('');
	const [searchText, setSearchText] = useState('');

	const error = useSelector(selectError);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FETCH_DATA(order, searchText));
	}, [order, searchText]);

	const onHandleOrder = () => setOrder((prev) => (prev === '' ? 'asc' : ''));

	const delayedSetSearchText = debounce((newValue) => setSearchText(newValue), 500);

	const searchOnChange = ({ target }) => {
		delayedSetSearchText(target.value);
	};

	if (error) return <h1>{error}</h1>;

	return (
		<>
			<div id={styles.tasks}>
				<div className={styles.tasksWrapper}>
					<CreateTaskForm />
					<TodosList
						onHandleOrder={onHandleOrder}
						searchText={searchText}
						searchOnChange={searchOnChange}
					/>
				</div>
			</div>
			<Delete />
			<Update />
		</>
	);
}
