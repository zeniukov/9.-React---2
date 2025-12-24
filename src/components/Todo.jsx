import { useDispatch } from 'react-redux';
import styles from '../App.module.css';
import { START_DELETING, START_UPDATING } from '../actions/app-actions';

export const Todo = ({ title, id }) => {
	const dispatch = useDispatch();

	const initiateDeleting = () => dispatch(START_DELETING(id));
	const initiateUpdating = () => {
		dispatch(START_UPDATING(title, id));
	};

	return (
		<li className={styles.taskItem}>
			{title}
			<button className={styles.button} onClick={initiateDeleting}>
				Удалить
			</button>

			<button className={styles.button} onClick={initiateUpdating.bind(null, id, title)}>
				Обновить
			</button>
		</li>
	);
};
