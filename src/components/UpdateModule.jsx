import styles from '../App.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTitle, selectOpenedUpdateModule, selectId } from '../selectors';
import { CANCEL_UPDATING } from '../actions/app-actions';
import { UPDATE_TODO } from '../actions/todos-actions';

export const Update = () => {
	const dispatch = useDispatch();

	const id = useSelector(selectId);
	const title = useSelector(selectTitle);
	const openedUpdateModule = useSelector(selectOpenedUpdateModule);

	const [isUpdating, setUpdating] = useState(false);
	const [updatedValue, setUpdatedValue] = useState(title);

	useEffect(() => {
		setUpdatedValue(title);
	}, [title]);

	const onTextUpdate = ({ target }) => setUpdatedValue(target.value);

	const cancelUpdate = () => dispatch(CANCEL_UPDATING);

	const confirmUpdate = () => {
		if (updatedValue.trim() === '') return;
		setUpdating(true);
		dispatch(UPDATE_TODO(id, updatedValue));
		setUpdating(false);
	};

	return (
		<div className={openedUpdateModule ? styles.modalOverlay : styles.modalOverlayHidden}>
			<div className={styles.actionModal}>
				<form className={styles.updateTaskBlock}>
					<input
						className={styles.updateTaskBlockInput}
						type="text"
						name="text"
						value={updatedValue}
						placeholder="Введите новый текст"
						onChange={onTextUpdate}
					/>
				</form>

				<div className={styles.actionModalButtons}>
					<button
						className={`${styles.button} ${styles.cancelButton}`}
						disabled={isUpdating}
						onClick={cancelUpdate}
					>
						Отмена
					</button>

					<button
						className={`${styles.button} ${styles.confirmButton}`}
						disabled={isUpdating}
						onClick={confirmUpdate}
					>
						Обновить
					</button>
				</div>
			</div>
		</div>
	);
};
