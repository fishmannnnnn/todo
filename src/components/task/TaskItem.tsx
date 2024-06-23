import styles from './TaskItem.module.scss';
import { Task } from '../../App';

interface Props {
	task: Task;
	updateTask: Function;
}

const TaskItem = (props: Props) => {
	return (
		<div className={styles.task}>
			<div className={styles.taskContent}>
				<div
					className={styles.nameWrapper}
					onClick={() => {
						props.task.isDone = !props.task.isDone;
						props.updateTask(props.task);
					}}>
					{props.task.isDone ? (
						<div className={styles.checkboxDone}>
							<svg
								width='46'
								height='46'
								viewBox='0 0 46 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M33.557 12.834L18.4 27.991L10.143 19.757L6.9 23L18.4 34.5L36.8 16.1L33.557 12.834ZM23 0C10.304 0 0 10.304 0 23C0 35.696 10.304 46 23 46C35.696 46 46 35.696 46 23C46 10.304 35.696 0 23 0ZM23 41.4C12.834 41.4 4.6 33.166 4.6 23C4.6 12.834 12.834 4.6 23 4.6C33.166 4.6 41.4 12.834 41.4 23C41.4 33.166 33.166 41.4 23 41.4Z'
									fill='#D98326'
								/>
							</svg>
						</div>
					) : (
						<div className={styles.checkbox}></div>
					)}
					<div
						className={
							props.task.isDone
								? styles.nameCompleted
								: styles.name
						}>
						{props.task.name}
					</div>
				</div>
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.3' clipPath='url(#clip0_113_203)'>
						<path
							d='M7.99999 25.3333C7.99999 26.8 9.19999 28 10.6667 28H21.3333C22.8 28 24 26.8 24 25.3333V9.33333H7.99999V25.3333ZM10.6667 12H21.3333V25.3333H10.6667V12ZM20.6667 5.33333L19.3333 4H12.6667L11.3333 5.33333H6.66666V8H25.3333V5.33333H20.6667Z'
							fill='#B30B04'
						/>
					</g>
					<defs>
						<clipPath id='clip0_113_203'>
							<rect width='32' height='32' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className={styles.separator}></div>
		</div>
	);
};

export default TaskItem;
