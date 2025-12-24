import styles from '../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectOpenedDeleteModule } from '../selectors';
import { CANCEL_DELETING } from '../actions/app-actions';
import { DELETE_TODO } from '../actions/todos-actions';
import { useState } from 'react';

export const Delete = () => {
	const [isDeleting, setDeleting] = useState(false);

	const dispatch = useDispatch();

	const id = useSelector(selectId);
	const openedDeleteModule = useSelector(selectOpenedDeleteModule);

	const cancelDelete = () => dispatch(CANCEL_DELETING);

	const confirmDelete = () => {
		setDeleting(true);
		dispatch(DELETE_TODO(id));
		setDeleting(false);
	};

	return (
		<div className={openedDeleteModule ? styles.modalOverlay : styles.modalOverlayHidden}>
			<div className={styles.actionModal}>
				<h3 className={styles.actionModalQuestion}>
					Вы действительно хотите удалить эту задачу?
				</h3>
				<div className={styles.actionModalButtons}>
					<button
						className={`${styles.button} ${styles.cancelButton}`}
						disabled={isDeleting}
						onClick={cancelDelete}
					>
						Отмена
					</button>

					<button
						className={`${styles.button} ${styles.confirmButton}`}
						disabled={isDeleting}
						onClick={confirmDelete}
					>
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
};
